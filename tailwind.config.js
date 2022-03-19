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
    },
  },
  plugins: [],
};
