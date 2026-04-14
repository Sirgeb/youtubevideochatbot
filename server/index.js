import cors from 'cors'
import express from 'express'
import { agent } from './agent.js'
import { fetchYoutubeSnapshotData, triggerYoutubeVideoScrape } from './brightdata.js'
import { addYTVideoToVectorStore, hasVideoInVectorStore } from './embeddings.js'

const port = process.env.PORT || 3000
const app = express()
const ingestionStateByVideoId = new Map()
const snapshotToVideoId = new Map()

app.use(express.json({ limit: "100mb" }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

const getYoutubeVideoId = (url) => {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/")[2] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
};

const shouldUseVideoScopedRetrieval = (queryText, explicitVideoId, youtubeUrlInQuery) => {
  if (youtubeUrlInQuery) return true;
  if (!explicitVideoId) return false;

  const text = String(queryText || "").toLowerCase();
  return [
    "this video",
    "that video",
    "the video",
    "video transcript",
    "transcript",
    "from the video",
    "in the video",
  ].some((phrase) => text.includes(phrase));
};

app.post('/generate', async (req, res) => {
  try {
    const { query, video_id, thread_id } = req.body;
    const userText = String(query ?? "");
    let resolvedVideoId = String(video_id || "").trim();
    const youtubeUrlMatch = userText.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=[\w-]+(?:[^\s]*)?|youtube\.com\/shorts\/[\w-]+(?:[^\s]*)?|youtu\.be\/[\w-]+(?:[^\s]*)?)/i);

    // Deterministic path: if user includes a YouTube URL, trigger scrape immediately.
    if (youtubeUrlMatch?.[0]) {
      const parsedVideoId = getYoutubeVideoId(youtubeUrlMatch[0]);
      // Prefer the ID parsed from the URL so stale client-provided IDs do not block scraping.
      const effectiveVideoId = String(parsedVideoId || video_id || "").trim();
      resolvedVideoId = effectiveVideoId;

      if (effectiveVideoId) {
        const existsInStore = await hasVideoInVectorStore(effectiveVideoId);
        if (!existsInStore) {
          ingestionStateByVideoId.set(effectiveVideoId, {
            status: "processing",
            updatedAt: Date.now(),
          });
          const snapshotId = await triggerYoutubeVideoScrape(youtubeUrlMatch[0]);
          snapshotToVideoId.set(snapshotId, effectiveVideoId);
          ingestionStateByVideoId.set(effectiveVideoId, {
            status: "processing",
            snapshotId,
            updatedAt: Date.now(),
          });
          return res.json(
            `Scrape triggered successfully. Snapshot ID: ${snapshotId}. I will answer from transcript context after webhook ingestion finishes.`
          );
        }
      }
    }
    const scopedVideoId = shouldUseVideoScopedRetrieval(
      userText,
      resolvedVideoId,
      Boolean(youtubeUrlMatch?.[0])
    )
      ? resolvedVideoId
      : "";

    if (resolvedVideoId) {
      const ingestionState = ingestionStateByVideoId.get(resolvedVideoId);
      if (ingestionState && ingestionState.status !== "ready") {
        return res.json("I am still ingesting this video's transcript. Please try again in a few seconds.");
      }
    }
    const runAgent = async (threadId) =>
      agent.invoke({
        messages: [
          {
            role: "user",
            content: userText,
          },
        ],
      }, {
        configurable: { thread_id: threadId, video_id: scopedVideoId }
      });

    let result;
    try {
      result = await runAgent(thread_id);
    } catch (invokeError) {
      const message = invokeError instanceof Error ? invokeError.message : String(invokeError);
      if (!message.includes('Mistral only supports types "text" or "image_url"')) {
        throw invokeError;
      }

      // Retry once with a fresh thread when old checkpoint content is incompatible.
      result = await runAgent(`fallback-${Date.now()}`);
    }
    const data = result.messages.at(-1)?.content;

    res.json(data)
  } catch (error) {
    console.error('Failed to handle /generate request:', error);
    res.status(500).json({
      error: 'Failed to generate response. Please try again.'
    });
  }
})

// Webhook endpoint to receive scraped YouTube data
app.post("/webhook/youtube", async (req, res) => {
  try {
    const payload = req.body;
    let records = [];
    let snapshotId = null;

    if (Array.isArray(payload)) {
      // Direct data delivery webhook.
      records = payload;
    } else if (Array.isArray(payload?.data)) {
      // Some webhook deliveries wrap rows under `data`.
      records = payload.data;
    } else if (payload?.snapshot_id) {
      // `notify` webhook: fetch actual rows using snapshot id.
      snapshotId = String(payload.snapshot_id);
      records = await fetchYoutubeSnapshotData(snapshotId);
    }

    const ingestableRecords = records.filter(
      (video) => video?.transcript && video?.video_id && video?.url
    );

    await Promise.all(ingestableRecords.map(async (video) => addYTVideoToVectorStore(video)));

    for (const video of ingestableRecords) {
      const ingestedVideoId = String(video.video_id || "").trim();
      if (!ingestedVideoId) continue;
      ingestionStateByVideoId.set(ingestedVideoId, {
        status: "ready",
        snapshotId: snapshotId || ingestionStateByVideoId.get(ingestedVideoId)?.snapshotId,
        updatedAt: Date.now(),
      });
    }

    if (snapshotId && ingestableRecords.length === 0) {
      const mappedVideoId = snapshotToVideoId.get(snapshotId);
      if (mappedVideoId) {
        ingestionStateByVideoId.set(mappedVideoId, {
          status: "ready",
          snapshotId,
          updatedAt: Date.now(),
        });
      }
    }

    // Acknowledge receipt within 30 seconds
    res.status(200).json({
      received: true,
      records_received: records.length,
      records_ingested: ingestableRecords.length,
    });
  } catch (err) {
    console.error("Error handling webhook:", err);
    // If you return non-2xx, Bright Data will retry delivery
    res.status(500).json({ error: "Failed to process webhook" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
