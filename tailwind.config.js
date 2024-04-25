/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "DM":[ "DM Serif Display", "serif"],
      "Fira":["Fira Sans", "sans-serif"],
      "Ubuntu":["Ubuntu Mono", "monospace"],
      "Arsenal":["Arsenal", "sans-serif"],
      "Sansita":["Sansita", "sans-serif"]
    }
  },
  plugins: [],
}

