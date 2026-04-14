dotenv.config();

import { tool } from '@langchain/core/tools';
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatMistralAI } from "@langchain/mistralai";
import dotenv from "dotenv";
import { z } from 'zod';

import { vectorStore } from './embeddings.js';

// retrieval tool
const retrieveTool = tool(async ({ query, video_id }, { configurable }) => {
  const effectiveVideoId = String(video_id || configurable?.video_id || "").trim();
  const retrievedDocs = effectiveVideoId
    ? await vectorStore.similaritySearch(query, 3, { video_id: effectiveVideoId })
    : await vectorStore.similaritySearch(query, 3);
  const serializedDocs = retrievedDocs.map((doc) => doc.pageContent).join('\n ')
  return serializedDocs
}, {
  name: 'retrieve',
  description: 'Retrieve the most relevant chunks of text from the transcript for a specific youtube video',
  schema: z.object({
    query: z.string(),
    video_id: z.string().optional().describe('Optional: The id of the video to retrieve')
  })
})

const llm = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0,
  apiKey: process.env.MISTRAL_API_KEY,
});

const checkpointSaver = new MemorySaver();
const agentInstructions = `
You are a YouTube transcript assistant.

Rules you must follow:
1) You MUST call the "retrieve" tool for every user question before producing a final answer.
2) Use only information returned by the "retrieve" tool. Do not use outside knowledge.
3) Use video-scoped retrieval only when the user clearly asks about a specific video; otherwise use broad retrieval.
4) If the retrieved context is empty, irrelevant, or does not answer the question, reply exactly:
"No idea of that please. Ask something from this video's transcript."
5) Keep every response short: one concise paragraph, maximum 3 sentences.
6) Do not include bullet points, markdown headings, or long explanations.
`;

export const agent = createReactAgent({
  llm,
  tools: [retrieveTool],
  checkpointSaver,
  prompt: agentInstructions,
});

