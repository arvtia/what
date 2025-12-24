import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle Theme"
        className={`
          relative flex items-center h-6 w-11 p-1 rounded-full transition-colors duration-300 ease-in-out
          ${isDark ? "bg-neutral-700" : "bg-neutral-200"}
          border
        `}
      >
        {/* The Moving Slider (Dot) */}
        <span
          className={`
            pointer-events-none inline-block h-4 w-4 rounded-full shadow-sm transform transition duration-300 ease-in-out
            ${isDark ? "translate-x-5 bg-white" : "translate-x-0 bg-white"}
          `}
        >
          {/* Subtle Sun/Moon detail using a shadow if desired */}
          {isDark && (
             <span className="absolute inset-0 rounded-full shadow-[inset_-1px_-1px_0_0_#000] opacity-20"></span>
          )}
        </span>

        {/* Dynamic Glow Effect */}
        <div className={`
          absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity
          ${isDark ? "bg-yellow-900" : "bg-blue-100"}
        `} />
      </button>
    </div>
  );
}