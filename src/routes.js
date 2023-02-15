import FileTemplateEditor from "./Pages/FileTemplateEditor/Index.svelte"
import PublishDoc from "./Pages/PublishDoc/index.svelte"
import Analytics from "./Pages/Analytics/index.svelte"
import History from "./Pages/History/index.svelte"
import Templates from "./Pages/Templates/index.svelte"
import TemplateEditorOnSlide from "./Pages/TemplateEditorOnSlide/index.svelte"
import DarkFileTemplateEditor from "./Pages/DarkFileTemplateEditor/index.svelte"
import SignerOverlay from "./Pages/SignerOverlay/index.svelte"
import LoadingScreen from "./Pages/LoadingScreen/index.svelte"

export default {
  "/Publish": PublishDoc,
  "/Analytics": Analytics,
  "/FileTemplateEditor": FileTemplateEditor,
  "/History": History,
  "/Templates": Templates,
  "/TemplateEditorOnSlide": TemplateEditorOnSlide,
  "/DarkFileTemplateEditor": DarkFileTemplateEditor,
  "/TemplateEditorOnSlide": TemplateEditorOnSlide,
  "/LoadingScreen": LoadingScreen,

  // The catch-all route must always be last
  "*": Analytics,
}
