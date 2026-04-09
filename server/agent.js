dotenv.config();

import { tool } from '@langchain/core/tools';
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatMistralAI } from "@langchain/mistralai";
import dotenv from "dotenv";
import { z } from 'zod';

import data from './data.js';
import { vectorStore } from './embeddings.js';

const video1 = data[0];
const video2 = data[1];
const video3 = data[2];

// await addYTVideoToVectorStore(video1)
// await addYTVideoToVectorStore(video2)
// await addYTVideoToVectorStore(video3)

// retrieval tool
const retrieveTool = tool(async ({ query }, { configurable: { video_id } }) => {
  const retrievedDocs = await vectorStore.similaritySearch(query, 3, { video_id })
  const serializedDocs = retrievedDocs.map((doc) => doc.pageContent).join('\n ')
  return serializedDocs
}, {
  name: 'retrieve',
  description: 'Retrieve the most relevant chunks of text from the transcript of a youtube video',
  schema: z.object({
    query: z.string()
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
3) If the retrieved context is empty, irrelevant, or does not answer the question, reply exactly:
"No idea of that please. Ask something from this video's transcript."
4) Keep every response short: one concise paragraph, maximum 3 sentences.
5) Do not include bullet points, markdown headings, or long explanations.
`;

export const agent = createReactAgent({
  llm,
  tools: [retrieveTool],
  checkpointSaver,
  prompt: agentInstructions,
});

