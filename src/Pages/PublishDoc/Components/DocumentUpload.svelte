<script>
  import UploadIcon from "../../../svgicons/UploadIcon.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  const createBloburl = async () => {
    let DocUpload = document.getElementById("DocUpload")
    let formData = new FormData(DocUpload)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    dispatch("File", File)
  }
</script>

<form enctype="multipart/form-data" id="DocUpload" class="relative h-52 w-4/5 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-Analytics-secondarytext bg-Analytics-secondary">
  <input on:change={createBloburl} type="file" name="DocUpload" class="absolute inset-0 opacity-0" accept="image/*,.pdf" />
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <UploadIcon />
    <p class="text-xs text-Analytics-secondarytext">Drag and Drop or Click here to Upload a File</p>
    <button class="rounded-md text-xs text-Analytics-primarytext">PNG, JPG, GIF up to 10MB</button>
  </div>
</form>
