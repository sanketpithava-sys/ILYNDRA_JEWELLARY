const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "src/**/*.{ts,tsx,js,jsx,mdx}")],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: "#fbf7f1",
          100: "#f6eee2",
          200: "#ead8b9",
          300: "#d8b882",
          400: "#c9a36a",
          500: "#b68d51",
          600: "#8f693a",
        },
        ivory: "#f8f3eb",
        espresso: "#231810",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 16px 48px rgba(68, 45, 21, 0.12)",
        glow: "0 20px 70px rgba(201, 163, 106, 0.22)",
      },
      letterSpacing: {
        luxury: "0.28em",
      },
    },
  },
  plugins: [],
};
