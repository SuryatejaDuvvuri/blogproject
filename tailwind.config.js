/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:false,
  theme: {
    extend: {
      colors: {
        primary: "#0A1828",
        secondary: "#178582",
        lightFirst: "#EFFAFD",
        lightSecond: "#4A8BDF",
        lightThird: "#A0006D",
        lightFourth: "#0099FF",
        light: "#fffff6"
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
