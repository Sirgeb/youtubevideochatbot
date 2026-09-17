# YouTube Video Chatbot

A full-stack YouTube transcript chatbot. Paste a YouTube URL into the chat, let the backend ingest the video's transcript, then ask questions that are answered from the transcript using retrieval-augmented generation.

## Features

- Chat interface built with React, TypeScript, and Vite
- Express API for chat generation and webhook handling
- YouTube transcript scraping through Bright Data
- Transcript chunking and semantic search with LangChain and PGVector
- OpenAI `text-embedding-3-large` embeddings
- LangGraph ReAct agent powered by Mistral
- Video-scoped retrieval so follow-up questions stay focused on the active video

## Tech Stack

- Frontend: React 19, TypeScript, Vite
- Backend: Node.js, Express, LangChain, LangGraph
- AI: Mistral for chat, OpenAI for embeddings
- Data: PostgreSQL with PGVector
- Scraping: Bright Data dataset API

## Project Structure

```text
youtubevideochatbot/
├── client/          # React + Vite chat UI
└── server/          # Express API, Bright Data webhook, RAG agent
```

## Prerequisites

- Node.js 20 or newer
- npm
- PostgreSQL database with the PGVector extension enabled
- API keys for Mistral, OpenAI, and Bright Data

## Environment Variables

Create `server/.env`:

```bash
MISTRAL_API_KEY=your_mistral_api_key
OPENAI_API_KEY=your_openai_api_key
DB_URL=postgresql://user:password@host:5432/database
BRIGHT_DATA_API_KEY=your_bright_data_api_key
PORT=3000
```

Create `client/.env`:

```bash
VITE_API_URL=http://localhost:3000
```

For local webhook testing, expose the server with a public tunnel such as ngrok and update the Bright Data webhook URL in `server/brightdata.js`.

## Installation

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

## Running Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## How It Works

1. The user sends a message containing a YouTube URL.
2. The server extracts the video ID and checks whether that video already exists in the vector store.
3. If the transcript has not been ingested, the server triggers a Bright Data scrape and returns a processing message.
4. Bright Data sends transcript data to `POST /webhook/youtube`.
5. The server chunks the transcript, embeds each chunk, and stores the chunks in PostgreSQL/PGVector.
6. Follow-up questions are answered by a LangGraph agent that retrieves relevant transcript chunks before responding.

## API Endpoints

### `POST /generate`

Sends a chat message to the backend.

Request body:

```json
{
  "query": "What is this video about? https://www.youtube.com/watch?v=...",
  "thread_id": "session-id",
  "video_id": "optional-youtube-video-id"
}
```

### `POST /webhook/youtube`

Receives Bright Data scrape results and stores transcript chunks in the vector database.

## Build

Build the frontend:

```bash
cd client
npm run build
```

Run the backend:

```bash
cd server
npm start
```

## Notes

- The backend keeps ingestion state in memory, so restarting the server during an active scrape can lose the pending state.
- `server/brightdata.js` currently contains a hardcoded production webhook URL. Change it for local webhook testing.
- The vector table is named `transcripts` and stores transcript chunks with `video_id` metadata.
