/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        darkGreen: "hsla(159, 41%, 10%, 1)",
        midGreen: "hsla(159, 36%, 57%, 1)",
        lightGreen: "hsla(159, 65%, 88%, 1)",
        vlightGreen: "rgba(204, 244, 230, 1)",
        lightGray: "hsla(0, 0%, 98%, 1)",
        midGray: "hsla(0, 0%, 89%, 1)",
        lightWhite: "hsla(0, 0%, 100%, 1)",
        darkGray: "hsla(0, 0%, 46%, 1)",
        textGray: "rgba(118, 118, 118, 1)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        dmsans: ["dm sans", "sans-serif"],
      },
      boxShadow: {
        cr: "0px -1px 8px 1px lightGray",
        cl: "0px 0px 8px 1px lightGray",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        3: "repeat(3, minmax(0, 352px))",
        2: "repeat(2, minmax(0, 352px))",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
