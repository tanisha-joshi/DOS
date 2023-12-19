/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      vibes:['Great Vibes', 'cursive']
    }
  },
  plugins: [require("daisyui")],
}