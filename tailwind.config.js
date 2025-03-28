/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class", // Enable dark mode (can be 'media' or 'class')
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // Custom spacing
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "inner-top": "inset 0px 6px 6px rgba(0, 0, 0, 0.2)", // Custom inner shadow (top only)
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // For better form styling
    require("@tailwindcss/typography"), // For better text rendering
    require("@tailwindcss/aspect-ratio"), // Aspect ratio utilities
  ],
};
