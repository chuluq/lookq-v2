module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sora", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        decorative: ["Cinzel\\ Decorative", "cursive"],
      },
      colors: {
        title: "#232323",
        body: "#595959",
        "title-white": "#FCFCFC",
        line: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
