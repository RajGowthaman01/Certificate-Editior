/**
 * Editor Store Object
 *
 * @typedef {Object} base represents baseImage object and its properties
 * @type {Object}
 * @property {String} name Name of the whole File template
 * @property {String} url BlobUrl of a baseImage
 * @property {Number} w Width of an Image
 * @property {Number} h Height of an image
 * @property {Number} fileSize imageFile size in Kb
 * @property {Number} quality quality of a Canvas
 * @property {String} id mongodb id of template
 * @property {String} name filename from introcard
 *
 */

/**
 * @typedef {object} fontsItem - fonts array
 * @property {String} fontName name of fontfamily
 * @property {String} fileName fileName of the custom fontfamily
 * @property {String} fontStyle font style of the text
 *
 */

/**
 * @typedef {Object} layers type of operation of the layer
 * @property {String} type specifies whether layer is image or text
 * @property {String} name name or purpose of the layer
 * @property {String} value visual representation of the value to be printed on the document
 * @property {String} src bloburl of an image
 * @property {Boolean} dynamic dynamic  is true or false for static image upload
 * @property {Number} w Width of an Image
 * @property {Number} h Height of an image
 * @property {Number} x positions of an Image and Text on canvas in x-axis
 * @property {Number} y positions of an Image and Text on canvas in y-axis
 * @property {Number} size height of the text
 * @property {String} fontFamily font fammily of the text
 * @property {String} color color of the text
 * @property {String} style font style
 * @property {String} align text alignment
 * */
