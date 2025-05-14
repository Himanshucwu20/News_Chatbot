# 📰 News Chatbot

A full-stack news chatbot that uses Retrieval-Augmented Generation (RAG) to answer user queries based on indexed news data. It features:

- 📚 FAISS + Hugging Face Transformers for semantic search
- 🤖 Gemini API for intelligent, context-aware responses
- 🚀 FastAPI backend for handling sessions and chat
- 🧠 Redis for session history (optional extension)
- 🖥️ React + Tailwind CSS frontend with chat UI

---

## 📁 Project Structure

project-root/
├── app/ # FastAPI backend logic
│ ├── main.py # App entry point
│ ├── routes.py # API routes
│ ├── utils/ # Session, history, and utility functions
│ └── services/ # Embeddings, Gemini API call, etc.
├── client/ # React frontend
│ ├── components/ # ChatBox, MessageInput etc.
│ ├── services/ # API helpers
│ └── pages/ # Main page (Home.tsx)
└── README.md

🔍 Features
✅ RAG-based answers using FAISS + Hugging Face + Gemini API

✅ Session management with /session, /chat, /clear_session, /history

✅ Persistent sessions via localStorage

✅ UI built with Tailwind CSS

✅ Clear and Reset session options

📬 API Endpoints
POST /api/session – Creates a new chat session

POST /api/chat – Sends a query and gets a bot response

GET /api/history/{session_id} – Retrieves session history

POST /api/clear_session/{session_id} – Clears a session

🧪 Tech Stack
Layer	Tools/Technologies
Frontend	React, Tailwind CSS, TypeScript
Backend	FastAPI, Python
NLP / RAG	Hugging Face Transformers, FAISS
LLM API	Gemini API (Google)
Storage (opt)	Redis (for storing session/chat)

📸 UI Preview

![image](https://github.com/user-attachments/assets/bcd04f37-8940-41f2-80e6-f0e42499e390)

✍️ Author
Himanshu Singh
