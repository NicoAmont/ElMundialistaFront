module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#fdfffc", A700_01: "#ffffff", A700_7f: "#fdfffc7f" },
        green: { 400: "#60d669" },
        indigo: { 900: "#232c64" },
        gray: { 50: "#f2f7ff", 600: "#737b7d", 800: "#373c3d", 900: "#252527" },
        blue: { A400: "#1877f2" },
        purple: { 400: "#c837ab" },
        red: { 700: "#da1d2d" },
        amber: { 400: "#f9c41e" },
        blue_gray: { 400: "#8e8e8e" },
        light_blue: { 900: "#055694" },
        black: { 900: "#000000" },
        white_A700_4c: "#fdfffc4c",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", notosans: "Noto Sans", oswald: "Oswald", lexend: "Lexend" },
      backgroundImage: { gradient: "linear-gradient(180deg, #ffffff,#ffffff,#ffffff00,#ffffff00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
