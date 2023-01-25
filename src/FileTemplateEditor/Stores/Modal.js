import { writable } from "svelte/store"
import Metadata from "../Modals/Modules/Metadata.svelte"

const Modal = writable({
  bloburl: "",
  activeComponent: Metadata,
  showModal: true,
})
// blobUrl = ""
export default Modal
