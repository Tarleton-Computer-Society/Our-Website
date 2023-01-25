/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#8000FF",
      black: "#000000",
      lavender: "#E0C0FF",
      gray: "#D9D9D9",
      darkergray: "#939393",
      lightergray: "#F5F5F5",
      grayvariant: "#CECECE",
    },
    
    extend: {
      fontFamily: {
        design: ["Lexend Deca", "sans-serif"],
        standard: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
}
