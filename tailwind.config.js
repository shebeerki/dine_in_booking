/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- **Crucial path for your components**
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}