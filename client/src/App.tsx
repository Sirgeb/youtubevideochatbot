import type { FormEvent } from "react";
import { useMemo, useRef, useState } from "react";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Hi! Ask me anything.",
  },
];

function formatAssistantText(rawText: string): string {
  if (!rawText) return "No response received.";

  let formatted = rawText.trim();

  // Some backends return a JSON-encoded string payload.
  if (formatted.startsWith('"') && formatted.endsWith('"')) {
    try {
      const parsed = JSON.parse(formatted);
      if (typeof parsed === "string") {
        formatted = parsed;
      }
    } catch {
      // Keep original value and continue with fallback formatting.
    }
  }

  // Fallback unescape for text that still contains escaped line breaks.
  formatted = formatted
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");

  // Normalize common markdown formatting into readable plain text.
  formatted = formatted
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return formatted || "No response received.";
}

function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Keep one thread id for this browser session
  const threadIdRef = useRef<number>(Date.now());
  const apiBase = useMemo(
    () => (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/+$/, ""),
    []
  );

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const prompt = input.trim();
    if (!prompt || isLoading) return;

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${apiBase}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: prompt,
          thread_id: threadIdRef.current,
          video_id: "qxTe5QT5R3c"
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      // API returns message content as plain text or JSON-encoded text.
      const assistantContent = await response.text();

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: formatAssistantText(assistantContent),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `${Date.now()}-error`,
        role: "assistant",
        content: "Something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewChat = () => {
    setMessages(initialMessages);
    setInput("");
    setIsLoading(false);
    threadIdRef.current = Date.now();
  };

  return (
    <div className="app">
      <main className="chat-shell">
        <header className="chat-header">
          <div className="chat-header-content">
            <h1>AI Chat</h1>
            <button
              type="button"
              className="new-chat-button"
              onClick={startNewChat}
              disabled={isLoading}
            >
              New Chat
            </button>
          </div>
        </header>

        <section className="messages" aria-live="polite">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`message ${message.role === "user" ? "user" : "assistant"}`}
            >
              <p>{message.content}</p>
            </article>
          ))}

          {isLoading && (
            <article className="message assistant loading">
              <p>Thinking...</p>
            </article>
          )}
        </section>

        <form className="input-bar" onSubmit={sendMessage}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows={1}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void sendMessage(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
          >
            {isLoading ? (
              <span className="spinner" />
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 20L21 12L3 4V10L15 12L3 14V20Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;