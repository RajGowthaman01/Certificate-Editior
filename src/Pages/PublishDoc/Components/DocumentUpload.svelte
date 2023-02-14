<script>
  import UploadIcon from "../../../svgicons/UploadIcon.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let files
  $: if (files) {
    dispatch("File", files[0])
  }
</script>

<form class="relative h-52 w-3/4 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-Analytics-secondarytext bg-Analytics-secondary">
  <input type="file" bind:files name="DocUpload" class="absolute inset-0 opacity-0" accept="image/*,.pdf" />
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <UploadIcon class="h-10 w-10 rounded-full border-2 border-Analytics-secondarytext p-1 text-Analytics-secondarytext" />
    <p class="text-xs text-Analytics-secondarytext">Drag and Drop or Click here to Upload a File</p>
    <button class="rounded-md text-xs text-Analytics-primarytext">PNG, JPG, GIF up to 10MB</button>
  </div>
</form>
