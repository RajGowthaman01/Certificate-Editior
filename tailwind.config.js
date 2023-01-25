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
        nunito: ["nunito", "sans-serif"],
        Croissant_One: ["Croissant One	"],
        Cute_Font: ["Cute Font"],
        Dangrek: ["Dangrek"],
        Devonshire: ["Devonshire"],
        Diplomata: ["Diplomata"],
      },
      aspectRatio: {
        "16/10": "16 / 10",
      },
      colors: {
        gray1: "rgb(33 , 33, 41)",
        gray2: "rgb(125 , 125, 127)",
        white1: "rgb(245 , 245, 245)",
        input_color: "rgb(241 , 245, 249)",
        primary: "#282A37", //background
        secondary: "#323645", // input background
        tertiary: "#F5F4FF", // outer text
        quaternary: "#1D90F4", // border focus
        darkGray: "rgb(36 , 36, 36)",
        lightGray: "rgb(47 , 47, 47)",
        textGray: "rgb(121 , 121, 121)",
        textGray2: "rgb(136 , 136, 136)",
        primary_blue: "rgb(48 , 122, 255)",
        input_white: "rgb(242,242,242)",
        place_white: "rgb(180,180,180)", //text-color
        icon_black: "rgb(66,66,66)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
