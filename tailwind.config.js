/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stripes:
          "repeating-linear-gradient(45deg, transparent, transparent 2px, #dadbdd 2px, #dadbdd 4px)",
        "stripes-light":
          "repeating-linear-gradient(45deg, transparent, transparent 2px, #f5f5f5 2px, #f5f5f5 5px)",
      },
      boxShadow: {
        // We name this 'norden-low' to match your aesthetic
        "norden-low": `
          0.5px 1px 1.6px rgba(0, 0, 0, 0.05),
          1px 2px 2.7px -1.2px rgba(0, 0, 0, 0.05),
          2.5px 5px 6.4px -2.5px rgba(0, 0, 0, 0.06)
        `,
      },
      keyframes: {
        "blur-in": {
          "0%": {
            filter: "blur(10px)",
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "blur-in": "blur-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
