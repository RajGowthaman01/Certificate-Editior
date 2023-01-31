/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      padding: {
        22: "88px",
      },
      width: {
        85: "340px",
        75: "300px",
      },
      fontFamily: {
        Emblema_One: ["Emblema One"],
        Roboto: ["Roboto"],
        nunito: ["nunito", "sans-serif"],
        Croissant_One: ["Croissant One"],
        Cute_Font: ["Cute Font"],
        Dangrek: ["Dangrek"],
        Devonshire: ["Devonshire"],
        Diplomata: ["Diplomata"],
      },
      colors: {
        //from karthick
        gray1: "rgb(33 , 33, 41)",
        gray2: "rgb(125 , 125, 127)",
        darkGray: "rgb(36 , 36, 36)",
        lightGray: "rgb(47 , 47, 47)",
        textGray: "rgb(121 , 121, 121)",
        primary_blue: "rgb(48 , 122, 255)",
        modalCardGray: "rgb(30, 30, 30)",
        //to
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
