import { writable } from "svelte/store"
import ImageLayerTile from "../components/imageLayerTile.svelte"
import TextLayerTile from "../components/textLayerTile.svelte"
export const imageStore = writable([ImageLayerTile])
export const textStore = writable([TextLayerTile])

export const editorStore = writable({
  /**
   * @typedef {Object} base - represents baseImage object and its properties
   * @type {Object}
   * @property {String} name - Name of the whole File template
   * @property {String} url - BlobUrl of a baseImage
   * @property {Number} w - Width of an Image
   * @property {Number} h - Height of an image
   * @property {Number} fileSize - baseimage size in Kb
   * @property {Number} quality - quality of an  image in Canvas
   * @property {String} id - 24 char alphanumeric id of the fie from database
   * @property {String} name - filename from introcard
   *
   */

  /** @type {base} */
  base: {
    name: "", //current template Name
    url: "", //baseImage Source or blobURL
    dimensions: { w: "", h: "" }, //baseImage dimensions
    fileSize: "", // filesize in kilobytes
    quality: 0.9, //quality of an image in canvas
    template: {
      id: "", //24 char alphanumeric id of the fie from database
      name: "", //filename fom introcard modal
    },
  },

  /**
   * @typedef {object} fonts - fonts array
   * @property {String} fontName name of fontfamily
   * @property {String} fileName fileName of the custom fontfamily
   * @property {String} fontStyle font style of the text
   *
   */

  /** @type {Array<fonts>} */

  fonts: [
    {
      fileName: "", //uploaded custom font filename
      fontName: "", //custom font Name
      fontStyle: "", //font style normal as default
    },
  ],

  /**@type {Array<keySuggestions>} */

  keySuggestions: [], //key values from auto complete in metadata template

  /**
   * @typedef {Object} layerOperations type of operation of the layer
   * @property {String} type specifies whether layer is image or text
   * @property {String} name name or purpose of the layer
   * @property {String} value visual representation of the value to be printed on the document
   * @property {String} src bloburl of an image
   * @property {Boolean} dynamic dynamic  is true or false for static image upload
   * @property {Number} w Width of an Image for image layer
   * @property {Number} h Height of an image for image layer
   * @property {Number} x position of an Image or Text on canvas in x-axis
   * @property {Number} y position of an Image or Text on canvas in y-axis
   * @property {Number} size height of the text
   * @property {String} fontFamily font fammily of the text
   * @property {String} color color of the text
   * @property {String} style font style
   * @property {String} align text alignment
   *
   */

  /** @type {Array<layerOperations>} */
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
