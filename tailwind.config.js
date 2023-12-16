/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(255,255,255,0.6)",
        purple: "#35336E",
        pink:"#E1486D"
      },
    },
  },
  plugins: [],
};
