/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "white",
        dark: "black",
        lightGray: "#f5f5f5",
        darkGray: "#333",
        primary: "#6466F1",
      },
    },
  },
  plugins: [],
};
