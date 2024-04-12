/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NetflixSansBlack: ["Netflix Sans Black", "sans-serif"],
        NetflixSansBold: ["Netflix Sans Bold", "sans-serif"],
        NetflixSansLight: ["Netflix Sans Light", "sans-serif"],
        NetflixSansMedium: ["Netflix Sans Medium", "sans-serif"],
        NetflixSansRegular: ["Netflix Sans Regular", "sans-serif"],
        NetflixSansThin: ["Netflix Sans Thin", "sans-serif"],
      },
      colors: {
        netflixRed: "#E50914",
        netflixGray: "rgb(45,45,45)",
        netflexLightGray: "rgba(255,255,255,0.7)",
      },
    },
  },
  plugins: [],
};
