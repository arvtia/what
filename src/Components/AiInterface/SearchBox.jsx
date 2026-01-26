import { useState } from "react";

const SearchBox = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    onSend(input);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto fixed bottom-3 left-0 right-0 rounded-2xl p-3 md:p-5">
      <div className="w-full h-fit relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendClick()}
          placeholder="Type your message..."
          className="w-full h-16 rounded-2xl px-3 outline-none "
        />
        <button
          onClick={handleSendClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-neutral-100 transition"
        > 
          Send
          
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
