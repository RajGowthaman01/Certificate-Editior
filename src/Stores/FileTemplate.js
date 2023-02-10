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

const FileTemplate2 = writable({
  file: File,
  imageURL: "blob:https://app.demo.print2block.in/72d1eabe-65a8-444c-8d01-2044a089d29d",
  width: 100,
  Height: 110,
  text: {
    name: ["certificate", "event", "expiry", "date", "name", "qr"],
    value: ["text", "text", "text", "text", "text", "text"],
    align: ["left", "right", "center", "left", "right", "left"],
    font: ["arial", "Times Tew Roman", "algerian", "serif", "cursive", "mono"],
    color: ["#0000FF", "#FF0000", "	#800080", "#000000", "#FF5733", "#33FF42"],
    size: [12, 14, 16, 18, 20, 22],
    style: ["normal", "bold", "italic", "bold", "normal", "italic"],
    x: [100, 180, 110, 220, 330],
    y: [100, 180, 110, 220, 330],
  },
  image: {
    name: ["logo", "qr"],
    state: ["dynamic", "static"],
    src: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHkDs7O676zooqhjRi1acZ1vo4fGz0bafc_o3O3Uz&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJEZHGyCRYCDi6_bzjfu4wMfDGHU2AieYvw6G_-dp&s"],
    w: [100, 200],
    h: [100, 200],
    x: [48, 56],
    y: [60, 80],
  },
})

export default FileTemplate
