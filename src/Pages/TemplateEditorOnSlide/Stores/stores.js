import { writable } from "svelte/store"
import ImageLayerTile from "../components/imageLayerTile.svelte"
import TextLayerTile from "../components/textLayerTile.svelte"
export const imageStore = writable([ImageLayerTile])
export const textStore = writable([TextLayerTile])

export const editorStore = writable({
  baseImage: {
    name: "", //template Name or file name
    url: "", //baseImage Source or blobURL
    dimensions: { w: "", h: "" }, //baseImage dimensions
    quality: 0.9,
  },
  fonts: [
    {
      fileName: "",
      fontName: "",
      fontStyle: "",
    },
  ], //[...fonts] add and update from font modal
  layers: [
    {
      layerOperations: {
        type: "", //specifying layer type i.e., image or text
        name: "",
        value: "",
        src: "", //image or blob source path
        dynamic: true, //to define static or dynamic for image only
        positions: { x: 100, y: 100 }, //image or text position in x and y axis in pixels
        dimensions: { w: 30, h: 30 }, //image's width and height in pixels
        size: 200, // in pixels to define text height
        fontFamily: "Nunito",
        color: "#eee", //say black as default color
        style: "normal", //default value
        align: "center", //default value
      },
    },
  ],
})

export const addLayer = () => {
  for (let t = 1; t < $editorStore.layers.layerOperations[t].length; t++) {
    if (($editorStore.layers.layerOperations.type = "text")) {
    }
  }
}
