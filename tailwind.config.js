/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0b101d",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ],
}

