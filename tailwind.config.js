/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "#262826",
        background: "#F5F5F8",
        darkBackground: "#222423",
        foreground: "#F9F9FB",
        darkForeground: "#1D1F1E",
        text: "#2e3f51",
        darkText: "#f7f2df",
        accentBlue: "#47a6bd",
        accentRed: "#d15a44",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
