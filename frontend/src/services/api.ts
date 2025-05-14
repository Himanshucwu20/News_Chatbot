import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const askQuestion = async (question: string, sessionId?: string) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, {
    query: question,
    session_id: sessionId || null,
  });
  return response.data;
};

export const createSession = async () => {
  const response = await axios.post(`${API_BASE_URL}/session`);
  return response.data;
};

export const fetchSessionHistory = async (sessionId: string) => {
  const response = await axios.get(`${API_BASE_URL}/history/${sessionId}`);
  return response.data.history;
};

export const clearSession = async (sessionId: string) => {
  await axios.post(`${API_BASE_URL}/clear_session/${sessionId}`);
};
