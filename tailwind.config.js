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
        xs: "320px",
        sm:  "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
  
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
