module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        andada: ["Andada Pro", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    screens: {
      sm: { max: "768px" },
      md: { max: "1024px" },
      lg: { max: "1280px" },
    },
  },
  plugins: [],
};
