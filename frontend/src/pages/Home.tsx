import { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";
import {
  askQuestion,
  createSession,
  clearSession,
} from "../services/api";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string>("");

  // Always create new session on first load
  useEffect(() => {
    const initSession = async () => {
      try {
        const session = await createSession();
        setSessionId(session.session_id);
        localStorage.setItem("session_id", session.session_id); // optional
      } catch (error) {
        console.error("Failed to create session:", error);
      }
    };

    initSession();
  }, []);

  const handleSend = async (msg: string) => {
    if (!sessionId) return;
    setMessages((prev) => [...prev, { role: "user", text: msg }]);

    try {
      const response = await askQuestion(msg, sessionId);
      setMessages((prev) => [...prev, { role: "bot", text: response.response }]);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleClearChat = async () => {
    if (!sessionId) return;
    await clearSession(sessionId);
    setMessages([]);
  };

  const handleResetSession = async () => {
    if (sessionId) {
      await clearSession(sessionId);
    }
    const newSession = await createSession();
    setSessionId(newSession.session_id);
    setMessages([]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <ChatBox messages={messages} />
      <MessageInput onSend={handleSend} />
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <button
          onClick={handleClearChat}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Clear Chat
        </button>
        <button
          onClick={handleResetSession}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset Session
        </button>
      </div>
    </div>
  );
}
