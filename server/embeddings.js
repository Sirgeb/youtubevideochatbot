import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { Document } from '@langchain/core/documents';
import { OpenAIEmbeddings } from '@langchain/openai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
});

const pool = new Pool({
  connectionString: process.env.DB_URL,
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  keepAlive: true,
});

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL client error:", err.message);
});

pool.on("connect", (client) => {
  // Guard against unhandled pg client errors that otherwise crash Node.
  client.on("error", (err) => {
    console.error("PostgreSQL client connection error:", err.message);
  });
});

export const vectorStore = await PGVectorStore.initialize(embeddings, {
  pool,
  tableName: 'transcripts',
  columns: {
    idColumnName: 'id',
    vectorColumnName: 'vector',
    contentColumnName: 'content',
    metadataColumnName: 'metadata'
  },
  distanceStrategy: 'cosine'
});

export const addYTVideoToVectorStore = async (videoData) => {
  const { transcript, video_id, url } = videoData;

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const docs = [
    new Document({
      pageContent: transcript,
      metadata: {
        source: url,
        video_id: video_id,
      },
    }),
  ];

  const chunks = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(chunks)
}