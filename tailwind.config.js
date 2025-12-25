/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'stripes': "repeating-linear-gradient(45deg, transparent, transparent 2px, #dadbdd 2px, #dadbdd 4px)",
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

