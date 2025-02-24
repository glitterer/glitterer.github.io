/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers all pages, components, and app
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Dark background like POSTECH website
        foreground: "#FFFFFF", // White text for contrast
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern typography
      },
    },
  },
  plugins: [],
};
