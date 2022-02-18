module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        "body-dark": "#d9d9d9",
        "title-white": "#FCFCFC",
        line: "#D9D9D9",
        dark: "#222322",
      },
    },
  },
  plugins: [],
};
