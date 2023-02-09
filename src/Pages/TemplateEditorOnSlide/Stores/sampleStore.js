import { writable } from "svelte/store"
import {} from "./jsDocs"

export const editorStore = writable({
  /** @type {base} */
  base: {
    name: "Certificate of Appreciation", //current template Name
    url: "", //baseImage Source or blobURL
    dimensions: { w: 100, h: 100 }, //baseImage dimensions
    fileSize: 200, // filesize in kilobytes
    quality: 0.9,
    template: {
      id: "", //24 char alphanumeric id from mongodb
      name: "sample", //introcard template name
    },
  },

  /** @type {Array<fontsItem>} */
  fonts: [
    {
      fileName: "NotoSerifAhom-Regular.ttf",
      fontName: "NotoSerifAhom-Regular",
      fontStyle: "normal",
    },
  ], //[...fonts] add and update from font modal
  keySuggestions: [], //key values for auto complete

  /** @type {Array<layers>} */
  layerOperations: [
    {
      type: "image or text", //specifying layer type i.e., image or text
      name: "image", // can be selected from key values also
      value: "certificate",
      src: "", //image or blob source path
      dynamic: true, //to define static or dynamic for image only
      positions: { x: 20, y: 20 }, //image or text position in x and y axis in pixels
      dimensions: { w: 20, h: 20 }, //image's width and height in pixels
      size: 24, // in pixels to define text height
      fontFamily: "Nunito",
      color: "#eee", //say black as default color
      style: "normal", //default value
      align: "center", //default value
    },
  ],
})
