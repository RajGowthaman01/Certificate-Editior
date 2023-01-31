import Analytics from "./Pages/Analytics/index.svelte"
import PublishDoc from "./Pages/PublishDoc/index.svelte"
import FileTemplateEditor from "./Pages/FileTemplateEditor/Index.svelte"

export default {
  "/": PublishDoc,
  "/Analytics": Analytics,
  "/FileTemplateEditor": FileTemplateEditor,
  // The catch-all route must always be last
  "*": Analytics,
}
