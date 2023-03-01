const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif"],
    },

    screens: {
      phone: "390px",
      // => @media (min-width: 390px) { ... }

      tablet: "834px",
      // => @media (min-width: 834px) { ... }

      laptop: "1080px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: { green: "#049F84", red: "#D80D3D", "light-red": "#FD2054" },
    },
  },
  plugins: [],
}
