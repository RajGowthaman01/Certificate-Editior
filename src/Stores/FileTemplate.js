import { writable } from "svelte/store"
const FileTemplate = writable({
  CanvasImage: { file: File, src: "", w: "", h: "" },
  text: {
    Name: { value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    certificateNumber: { value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Event: { value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Date: { value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Signatory: { value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
  },
  image: {
    logo: { dynamic: "false", h: 444, src: "/assets/1593269039961-logo.png", w: 555, x: 2688, y: 1909 },
    Qr: { dynamic: "false", h: 444, src: "/assets/1593269039961-logo.png", w: 555, x: 2688, y: 1909 },
  },
})
export default FileTemplate
