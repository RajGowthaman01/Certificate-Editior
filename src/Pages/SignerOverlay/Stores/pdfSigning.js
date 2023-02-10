import { writable } from "svelte/store"

const pdfSigning = writable({
  signerDetails: {
    companyName: "Test Company Pvt. Ltd", //company name of the signer
    name: "John Doe", //signer name
    Designation: "Designation", //signer designation
    phone: 9787564310, //signer contact number
    eMail: "john@email.com", //signer mail id
    id: "819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3", //signer id
  },
  signPlacement: {
    pageNo: 0, //selected page number
    horizontal: true, //initally the sign placement is horizontally lock
  },
  signColor: {
    color: "#242424", //background colour for the signature
  },
})

export default pdfSigning
