/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid': `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 2px),
                 linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
      }
    }
  },
  plugins: [],
}
