/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        maUrgent: "#FFD9D4",
        maNormal: "#D4D7FF"
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
}