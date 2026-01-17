/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wealthy-dark': '#0a1a3f',
        'wealthy-highlight': '#1e3a8a',
      },
    },
  },
  plugins: [],
}
