import dotenv from "dotenv";
dotenv.config();

const BRIGHT_DATA_API_KEY = process.env.BRIGHT_DATA_API_KEY;

// 2) Your public webhook URL that Bright Data will call
//    In local dev, use something like ngrok and put the public URL here.
const WEBHOOK_URL = `https://youtubevideochatbot-server.vercel.app/webhook/youtube`;

// 3) The dataset_id of the YouTube scraper you want to use
//    Example: YouTube channels / videos / posts scraper from Scrapers Library.
//    Get it from the scraper page in the UI (Web Scraper API → YouTube → chosen template).
const DATASET_ID = "gd_lk56epmy2i5g7lzu0k";

const assertApiKey = () => {
  if (!BRIGHT_DATA_API_KEY) {
    throw new Error("Missing BRIGHT_DATA_API_KEY in server environment.");
  }
  return BRIGHT_DATA_API_KEY;
};

export const triggerYoutubeVideoScrape = async (url) => {
  const apiKey = assertApiKey();

  if (!url) {
    throw new Error("Missing YouTube URL for scraping.");
  }

  const inputs = [{ url }];
  const triggerUrl = `https://api.brightdata.com/datasets/v3/trigger?dataset_id=${DATASET_ID}&format=json&notify=${encodeURIComponent(
    WEBHOOK_URL
  )}`;

  const response = await fetch(triggerUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(
      `Error triggering YouTube scrape (${response.status}): ${JSON.stringify(payload ?? {})}`
    );
  }

  // Keep tool output primitive/text-safe for LLM memory serialization.
  return payload?.snapshot_id ? String(payload.snapshot_id) : "";
};

export const fetchYoutubeSnapshotData = async (snapshotId) => {
  const apiKey = assertApiKey();
  if (!snapshotId) return [];

  const response = await fetch(
    `https://api.brightdata.com/datasets/v3/snapshot/${encodeURIComponent(snapshotId)}?format=json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(
      `Error fetching snapshot data (${response.status}): ${JSON.stringify(payload ?? {})}`
    );
  }

  return Array.isArray(payload) ? payload : [];
};
