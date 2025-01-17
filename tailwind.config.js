/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        normalGreen: "#77B254",
        darkGreen: "#5B913B",
      },
    },
  },
  plugins: [],
};
