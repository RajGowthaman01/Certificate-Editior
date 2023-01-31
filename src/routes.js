import Analytics from "./Pages/Analytics/index.svelte"
import PublishDoc from "./Pages/PublishDoc/index.svelte"
import FileTemplateEditor from "./Pages/FileTemplateEditor/Index.svelte"
import DarkFileTemplateEditor from "./Pages/DarkFileTemplateEditor/index.svelte"

export default {
  "/": PublishDoc,
  "/Analytics": Analytics,
  "/FileTemplateEditor": FileTemplateEditor,
  "/DarkFileTemplateEditor": DarkFileTemplateEditor,
  // The catch-all route must always be last
  "*": Analytics,
}
