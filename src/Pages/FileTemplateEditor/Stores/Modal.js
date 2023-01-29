import { writable } from "svelte/store"

const Modal = writable({
  bloburl: "",
  fileName: "Certificate of Appreciation",
})
export default Modal
