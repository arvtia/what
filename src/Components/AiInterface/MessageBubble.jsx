// src/components/MessageBubble.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // you can use any theme

const MessageBubble = ({ role, content }) => {
  return (
    <div
      className={`p-3 rounded-xl max-w-[80%] prose ${
        role === "user"
          ? "ml-auto bg-blue-500 text-white prose-invert"
          : "mr-auto bg-white text-black"
      }`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        className="prose max-w-none"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MessageBubble;
