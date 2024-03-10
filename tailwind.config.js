/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "380px" },
        sm: { min: "381px", max: "640px" },
        md: { min: "641px", max: "768px" },
        xmd: { min: "500px", max: "640" },
        lg: { min: "769px", max: "992px" },
        xl: { min: "993px", max: "1299px" },
        "2xl": { min: "390px", max: "500px" },
      },
      colors: {
        darkGrey: "#0D1926",
        lightGrey: "#1A324C",
        green: "#0DA325",
        darkGreen: "rgba(144,96,169)",
        darkBlue: "#0F172A",
        purple: "#8273D9",
        lightBlue: "#8CB0D9",
        blue: "#032F8D",
        skyBlue: "#0099ff"
      
      },
    },
  },
  plugins: [],
};
