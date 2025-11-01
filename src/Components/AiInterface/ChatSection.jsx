import { useState, useRef, useEffect } from "react";
import { marked } from "marked";
import SearchBox from "./SearchBox";
import { sendMessageToMockGPT } from "../../api/mockGpt";

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello 👋 How can I help you today?" },
  ]);

  const chatEndRef = useRef(null);

  const handleSend = async (userInput) => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    const reply = await sendMessageToMockGPT(userInput);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[85vh] flex flex-col bg-neutral-200 dark:bg-neutral-900 w-full">
      {/* Chat messages */}
      <div
        className="flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar px-4 py-6 max-w-4xl mx-auto w-full"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[80%] leading-relaxed prose prose-sm ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-white text-black prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-code:text-pink-600"
            }`}
            dangerouslySetInnerHTML={{
              __html: msg.role === "assistant"
                ? marked.parse(msg.content)
                : msg.content,
            }}
          />
        ))}

        {/* scroll anchor */}
        <div ref={chatEndRef} />
      </div>

      {/* Input box */}
      <div className="border-t border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <SearchBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatSection;
