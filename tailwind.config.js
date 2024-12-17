/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include index.html for Tailwind to scan
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.jpg')",
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
