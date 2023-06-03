/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#339933',
      },
      boxShadow: {
        neon: '0 0 2.5px #339933, 0 0 5px #339933, 0 0 7.5px #339933, 0 0 10px #339933',
      }
    },
  },
  plugins: [],
}

