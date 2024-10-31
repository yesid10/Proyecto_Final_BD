/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color: '#85c227',
        secondary_color: '#191919'
      }
    },
  },
  plugins: [],
}

