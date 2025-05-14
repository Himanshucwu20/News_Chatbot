// frontend/src/components/ChatBox.tsx

import type { Message } from "../types";
import ReactMarkdown from "react-markdown";

interface ChatBoxProps {
  messages: Message[];
}

export default function ChatBox({ messages }: ChatBoxProps) {
  return (
    <div className="h-[500px] overflow-y-auto p-4 border rounded-lg bg-white shadow-inner scroll-smooth">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm whitespace-pre-wrap shadow ${
              msg.role === "user"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-gray-200 text-gray-900 rounded-bl-none"
            }`}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
