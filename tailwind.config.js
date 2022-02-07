module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      xs: { max: "639px" },
      sm: { max: "767px" },
      md: { max: "1023px" },
      lg: { max: "1279px" },
    },
  },
  plugins: [],
};
