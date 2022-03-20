module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Outfit"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        "mask-hint": "url('/images/MaskGroup.png')",
      },
      colors: {
        "green-line": "#8BAC3E",
        "green-line-200": "#F0FEEB",
        "green-line-100": "#F9FFF6",
        "blue-sky": "#40A2B1",
        "blue-sky-200": "#E6F3F5",
        "blue-water": "#405EB6",
        "blue-water-200": "#EAEEFA",
        "red-violet": "#B23F74",
        "red-violet-200": "#F9EEF3",
        "green-grass": "#A4B441",
        "green-grass-200": "#F3F7D9",
      },
    },
  },
  plugins: [],
};
