/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#33ff99',
      },
      boxShadow: {
        neon: '0 0 2.5px #33ff99, 0 0 5px #33ff99, 0 0 7.5px #33ff99, 0 0 10px #33ff99',
      }
    },
  },
  plugins: [],
}

