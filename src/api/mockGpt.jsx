import OpenAI from "openai";

export const mockGptApi = new OpenAI({
  baseURL: "https://mockgpt.wiremockapi.cloud/v1",
  apiKey: "sk-p3cz6elea54oz8voguif4tzd2sgscvb", // your mock key
  dangerouslyAllowBrowser: true, // allow running in browser (since it’s mock)
});

const dummyReplies = [
  `That's an interesting question! Let me break it down for you:

1. **Concept Overview**
   The \`::-webkit-scrollbar\` pseudo-element is used to style scrollbars in WebKit browsers.

2. **Example Usage**
   \`\`\`css
   ::-webkit-scrollbar {
     width: 8px;
   }
   ::-webkit-scrollbar-thumb {
     background: #9ca3af;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-track {
     background: #f3f4f6;
   }
   \`\`\`

3. **Note**
   It's not fully supported in Firefox. Use \`scrollbar-width: thin;\` for better cross-browser results.
  `,

  `Sure! Here’s how you can create a simple **React state counter**:

\`\`\`jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
\`\`\`

✅ Tip: You can make it persistent by saving \`count\` to \`localStorage\`.
  `,

  `Good catch! When using **Tailwind CSS**, remember that arbitrary values must be inside square brackets.

For example:

\`\`\`html
<div class="bg-[#0f172a] text-white p-4 rounded-xl">
  Custom dark background
</div>
\`\`\`

This makes your UI flexible without modifying your config file.`,
  
  `Interesting idea! If you want to format GPT-like replies, use the \`marked\` library for Markdown parsing and \`highlight.js\` for syntax highlighting:

\`\`\`bash
npm install marked highlight.js
\`\`\`

Then initialize it like this:
\`\`\`js
import { marked } from "marked";
import hljs from "highlight.js";
marked.setOptions({
  highlight: (code, lang) => hljs.highlightAuto(code).value,
});
\`\`\`
  `,

  `Here's what happens when you use **flexbox** with mixed alignments:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

This ensures children are evenly distributed while vertically centered. 🚀`
];


export const sendMessageToMockGPT = async (userMessage) => {
  try {
    const response = await mockGptApi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    let reply = response.choices[0].message.content;

    if (reply.includes("mock") || reply.length < 10) {
      reply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
    }

    return reply;
  } catch (err) {
    console.error("Error with MockGPT:", err);
    return "⚠️ Error: Could not reach MockGPT";
  }
};
