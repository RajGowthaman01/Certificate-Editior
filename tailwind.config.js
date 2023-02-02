/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      padding: {
        22: "88px",
        15: "60px",
      },
      width: {
        85: "340px",
        75: "300px",
        15: "60px",
        "1/10": "10%",
        "9/10": "90%",
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

        //venkatesh
        secondary: "#1e1e1e", //black for majority
        primary: "#444549", //text-color for label
        primaryGray: "#949494",
        topNavSvgBg: "#4e4f51",
        heading: "#fcfefb", //properties white
        certificateSection: "#252525",
        secondaryGray: "#666769", //for text
        hr: "gray-700/50",
       
        Analytics: {
          sidebar: "#3D3D45", //
          primary: "#232428", //
          secondary: "#302F35", //
          iconcolor: "#1B5FDA", //
          primarytext: "#A0A1A3", //
          secondarytext: "#A8A7AD", //
          addbtn: "#43434B", //
          card2: "#9259E9",
          card3: "#4DE5BE",
          card4: "#58C0FE",
        },
      },
      aspectRatio: {
        "16/10": "16 / 10",
      },
      boxShadow: {
        box_Shadow: "0px 0px 20px 10px rgb(0 0 0 / .15)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
