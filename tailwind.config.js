/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#c24fae",
        color2: "#cb8c2b",
        color3: "#3b4089",
        color4: "#cc4b7d",
        color5: "#ffffff",
      },
      animation: {
        pop: "popUp 0.5s ease-out forwards",
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        slideIn: "slideIn 1.2s ease-out forwards",
        glow: "glow 3s infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideIn: {
            "0%": { transform: "translateY(30px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
          glow: {
            "0%, 100%": { textShadow: "0 0 10px #c24fae, 0 0 20px #cb8c2b" },
            "50%": { textShadow: "0 0 15px #cc4b77, 0 0 30px #3b4089" },
          },
          float: {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
            "100%": { transform: "translateY(0px)" },
          },
        },
      },
    },
  },
  plugins: [flowbite], // Ensure Flowbite is included
};
