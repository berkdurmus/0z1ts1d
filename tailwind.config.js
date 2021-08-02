module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: "#D4B15F",
        "gold-highlight": "#BFA878",
        grayish: "#F3EBD9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
