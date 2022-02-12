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
      },
      colors: {
        title: "#232323",
        body: "#595959",
        "title-white": "#fcfcfc",
      },
    },
  },
  plugins: [],
};
