import Analytics from "./Pages/Analytics/index.svelte"
import PublishDoc from "./Pages/PublishDoc/index.svelte"
import FileTemplateEditor from "./Pages/FileTemplateEditor/Index.svelte"
import DarkFileTemplateEditor from "./Pages/DarkFileTemplateEditor/index.svelte"
import TemplateEditorOnSlide from "./Pages/TemplateEditorOnSlide/index.svelte"
import SignerOverlay from "./Pages/SignerOverlay/index.svelte"

export default {
  "/": PublishDoc,
  "/Analytics": Analytics,
  "/FileTemplateEditor": FileTemplateEditor,
  "/DarkFileTemplateEditor": DarkFileTemplateEditor,
  "/TemplateEditorOnSlide": TemplateEditorOnSlide,
  "/SignerOverlay": SignerOverlay,
  // The catch-all route must always be last
  "*": Analytics,
}
