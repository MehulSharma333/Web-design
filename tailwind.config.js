/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rambhadra: ["Ramabhadra", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        color: {
          blue: "#0000FF",
          lightBlue: "#F0F8FF",
          navyBlue: "#002244",
          azure: "#007FFF",
        },
      },
    },
  },
  plugins: [],
};
