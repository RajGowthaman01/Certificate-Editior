import FileTemplateEditor from "./Pages/FileTemplateEditor/Index.svelte"
import PublishDoc from "./Pages/PublishDoc/index.svelte"
import Analytics from "./Pages/Analytics/index.svelte"
import SignerOverlay from "./Pages/SignerOverlay/index.svelte"
import History from "./Pages/History/index.svelte"

// export default {
//   "/": PublishDoc,
//   "/Publish/*": PublishDoc,
//   "/Analytics": Analytics,
//   "/FileTemplateEditor": FileTemplateEditor,
//   "/History": History,
//   // "/DarkFileTemplateEditor": DarkFileTemplateEditor,
//   // "/TemplateEditorOnSlide": TemplateEditorOnSlide,
//   "/SignerOverlay": SignerOverlay,
//   // The catch-all route must always be last
//   "*": Analytics,
// }

// export default {
//   "/p2b": MainPage,
//   "/p2b/*": MainPage,
//   "/FileTemplateEditor": FileTemplateEditor,
// }

export default {
  "/Publish": PublishDoc,
  "/Analytics": Analytics,
  "/FileTemplateEditor": FileTemplateEditor,
  "/History": History,
  "/SignerOverlay": SignerOverlay,
  // The catch-all route must always be last
  "*": Analytics,
}
