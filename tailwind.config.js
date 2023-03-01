/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#ff385c",
      },
    },
  },
  plugins: [],
};
