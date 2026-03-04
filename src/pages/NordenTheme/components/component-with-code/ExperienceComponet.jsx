"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopySimple, Check } from "phosphor-react";
import ExperienceTimeline from "../blogs/ExpData";

/* -------------------------------- */
/* Reusable Code Block Component    */
/* -------------------------------- */

const CodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 p-2 rounded-md border border-slate-200 bg-white hover:bg-slate-100 transition-all z-10 shadow-sm"
      >
        {copied ? (
          <Check size={14} className="text-green-600" />
        ) : (
          <CopySimple size={14} className="text-slate-500" />
        )}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vs}
        customStyle={{
          margin: 0,
          padding: "24px",
          background: "transparent",
          fontSize: "13px",
          lineHeight: "1.7",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

/* -------------------------------- */
/* Experience Docs Component        */
/* -------------------------------- */

const ExperienceComponent = () => {
  const [activeTab, setActiveTab] = useState("preview");

  /* Usage Example */
  const usageCode = `
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <ExperienceTimeline />
    </div>
  );
}
`;

  /* Full Component Source */
  const fullSourceCode = `
import { CodeSimple } from "phosphor-react";
import "./exp.css";

const ExperienceTimeline = ({ experiences = [] }) => {
  return (
    <div className="w-full max-w-lg mx-auto py-12 px-4 bg-white select-none">
      <div className="flex w-full justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 px-2 py-1">
          Experience
        </h2>
      </div>

      <div className="relative">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <div className="flex items-center gap-3 relative z-10">
              <div
                className={\`w-8 h-8 rounded-full \${exp.logoColor} flex items-center justify-center text-white font-bold text-[10px] shadow-sm shrink-0\`}
              >
                {exp.company.charAt(0)}
              </div>

              <span className="text-[15px] font-semibold text-gray-800 tracking-tight">
                {exp.company}
              </span>
            </div>

            <div className="relative ml-4 pl-7 pt-2">
              <div
                className="absolute left-0 top-[-16px] w-[18px] h-[32px] border-l-2 border-b-2 rounded-bl-xl transition-colors duration-500"
                style={{
                  borderColor: exp.isLatest ? "#22c55e" : "#e5e7eb",
                }}
              />

              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-gray-900 tracking-tight">
                  {exp.role}
                </h3>

                <div className="flex items-center flex-wrap gap-1 text-[12px] text-gray-400 font-medium">
                  <span>{exp.duration}</span>
                  <span className="opacity-40">•</span>
                  <span>{exp.location}</span>
                  <span className="opacity-40">•</span>
                  <span>{exp.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
`;

  /* CSS Code */
  const cssCode = `
.exp-branch {
  position: absolute;
  left: 18px;
  top: 40px;
  width: 20px;
  height: 24px;
  border-left: 2px solid #e2e8f0;
  border-bottom: 2px solid #e2e8f0;
  border-bottom-left-radius: 12px;
}
`;

  return (
    <div className="w-full min-h-screen bg-white py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Experience Timeline
          </h1>
          <p className="text-lg text-slate-500">
            A clean tree-style component for showcasing professional history.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-6 border-b border-slate-200 mb-6">
          {["preview", "code"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition-all relative capitalize ${
                activeTab === tab
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900" />
              )}
            </button>
          ))}
        </div>

        {/* Preview / Usage */}
        <div className="ring-1 ring-slate-200 rounded-xl overflow-hidden shadow-sm">
          {activeTab === "preview" ? (
            <div className="p-10 bg-white min-h-[400px] flex items-center justify-center">
              <ExperienceTimeline />
            </div>
          ) : (
            <CodeBlock code={usageCode} language="jsx" />
          )}
        </div>

        {/* Full Source */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Full Implementation
          </h2>
          <CodeBlock code={fullSourceCode} language="jsx" />
        </div>

        {/* CSS */}
        <div className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">exp.css</h2>
          <CodeBlock code={cssCode} language="css" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
