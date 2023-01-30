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
        Croissant_One: ["Croissant One"],
        Cute_Font: ["Cute Font"],
        Dangrek: ["Dangrek"],
        Devonshire: ["Devonshire"],
        Diplomata: ["Diplomata"],
      },
      colors: {
        gray1: "rgb(33 , 33, 41)",
        gray2: "rgb(125 , 125, 127)",
        darkGray: "rgb(36 , 36, 36)",
        lightGray: "rgb(47 , 47, 47)",
        textGray: "rgb(121 , 121, 121)",
        primary_blue: "rgb(48 , 122, 255)",
        input_white: "rgb(242,242,242)",
        place_white: "rgb(180,180,180)", //text-color
        icon_black: "rgb(66,66,66)",
        secondary: "#1e1e1e", //black for majority
        primary: "#444549", //text-color for label
        primaryGray: "#949494",
        topNavSvgBg: "#4e4f51",
        heading: "#fcfefb", //properties white
        certificateSection: "#252525",
        secondaryGray: "#666769", //for text
        primaryBlue: "#007acd", //vscode blue
        hr: "gray-700/50",
        roundedRed: "#f93925",
        Orange: "#f97f1a",
        Yellow: "#f9c921",
        SkyBlue: "#2fedd0",
        DarkBlue: "#1dacf0",
        green: "#3bb143",
        Red: "#ef4444",
        rose: "#e8155c",
        // light-theme
        lightDarkGray: "#1b2a3e",
        lightBlue: "#43a4cb",
        lightHeaderSection: "#dedede", //for light placeholder too
        layerPanelActive: "#f3f4f6",
        layerPanelinActive: "#e6e7eb",
      },
      boxShadow: {
        box_Shadow: "0px 0px 20px 10px rgb(0 0 0 / .15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
