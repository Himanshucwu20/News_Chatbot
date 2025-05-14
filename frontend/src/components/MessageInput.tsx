import { useState } from "react";

type Props = {
  onSend: (msg: string) => void;
};

export default function MessageInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        className="flex-1 border text-black px-3 py-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something..."
      />
      <button className="bg-blue-500 text-white px-4 rounded" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
