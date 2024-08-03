/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1174px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#00413D",
        brand: "#E5745D",
        "banner-bg": "#00413D",
      },
      boxShadow: {
        shadowone: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        shadowtwo: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        shadowthree: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      animation: {
        solutionrotate: "solutionrotate 3s alternate infinite",
        solrotatetwo: "solrotatetwo 3s alternate infinite",
        solrotatethree: "solrotatethree 3s alternate infinite",
        solrotatetefour: "solrotatetefour 3s alternate infinite",
      },
      keyframes: {
        solutionrotate: {
          "0%": { "stroke-dashoffset": "570px" },
          "100%": { "stroke-dashoffset": "970px" },
        },
        solrotatetwo: {
          "0%": { "stroke-dashoffset": "570px" },
          "100%": { "stroke-dashoffset": "1030px" },
        },
        solrotatethree: {
          "0%": { "stroke-dashoffset": "570px" },
          "100%": { "stroke-dashoffset": "900px" },
        },
        solrotatetefour: {
          "0%": { "stroke-dashoffset": "570px" },
          "100%": { "stroke-dashoffset": "800px" },
        },
      },
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      vollkorn: ["Vollkorn", "serif"],
    },
  },
  plugins: [],
};
