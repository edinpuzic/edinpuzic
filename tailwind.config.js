/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: {
          100: "#ccd6f6",
          200: "#8892b0",
        },
        green: "#64ffda",
        pink: "#e2216a",
      },
      fontFamily: {
        main: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
