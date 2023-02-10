import { writable } from "svelte/store"

const pdfSigning = writable({
  /**
   * @typedef {Object} signerDetails - signer details from api call
   * @property {String} companyName - signer company name
   * @property {String} name - signer name
   * @property {String} Designation - signer designation
   * @property {Number} phone - signer contact number
   * @property {String} eMail - signer mail id
   * @property {String} id - signer id
   */
  /**@type {signerDetails} */
  signerDetails: {
    companyName: "Test Company Pvt. Ltd", //company name of the signer
    name: "John Doe", //signer name
    Designation: "Designation", //signer designation
    phone: 9787564310, //signer contact number
    eMail: "john@email.com", //signer mail id
    id: "819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3", //signer id
  },

  /**
   * @property {Number} pageNo - signer selected page number
   * @property {Boolean} horizontal - signer selected page number
   */
  /**@type {signPlacement} */
  signPlacement: {
    pageNo: 0, //selected page number
    horizontal: true, //initally the sign placement is horizontally lock
  },

  /**
   * @typedef {Object} signColor - contain signer selected signatue background colour
   * @property {String} color - signer selected colour
   */
  /**@type {signColor} */
  signColor: {
    color: "#242424", //background colour for the signature
  },
})

export default pdfSigning
