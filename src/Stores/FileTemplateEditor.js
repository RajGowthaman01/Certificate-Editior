import { writable } from "svelte/store"

const FileTemplate = writable({
  certificate: {
    CanvasImage: { src: "", w: "", h: "" },
    Name: { type: "text", value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    CertificateNo: { type: "text", value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Event: { type: "text", value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Date: { type: "text", value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Signatory: { type: "text", value: "text", align: "center", color: "#ff0000", font: "Arial", size: "173", style: "normal", x: "1838", y: "1212" },
    Logo: [{ dynamic: "false", h: 444, type: "image", src: "/assets/1593269039961-logo.png", w: 555, x: 2688, y: 1909 }],
    QR: [{ dynamic: "false", h: 444, type: "image", src: "/assets/1593269039961-logo.png", w: 555, x: 2688, y: 1909 }],
  },
})

export default FileTemplate
