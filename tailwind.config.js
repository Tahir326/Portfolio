/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      
      animation: {
        "waving-hand": "wave 0.7s ease-in-out infinite",
      },
      fontFamily:{
        signature:['Great Vibes']
      },
    },
  },
  plugins: [],
}