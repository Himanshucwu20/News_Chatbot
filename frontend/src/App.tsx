// frontend/src/App.tsx
//import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-4">📰 News Chatbot</h1>
      <Home />
    </div>
  );
};

export default App;
