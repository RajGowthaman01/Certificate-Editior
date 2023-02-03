<script>
  import { createEventDispatcher } from "svelte/internal"
  import { scale } from "svelte/transition"
  import UploadIcon from "../../../svg/upload.svelte"

  const dispatch = createEventDispatcher()
  let fontBlob
  const uploadFontFile = () => {
    let FontInput = document.getElementById("customFont")
    let formData = new FormData(FontInput)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    console.log(File)
    fontBlob = URL.createObjectURL(File)
    dispatch("File", fontBlob)
  }
</script>

<form in:scale enctype="multipart/form-data" id="customFont" class="relative h-full cursor-pointer flex-col items-center rounded-md bg-emerald-600">
  <input on:change={uploadFontFile} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept=".ttf" />
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <UploadIcon />
    <p class="text-sm text-gray1 dark:text-white">Drag and Drop or Click here to Upload a File</p>
    <button class="rounded-md text-xs text-gray1 dark:text-white">Choose only .ttf Files upto 10 MB.</button>
  </div>
</form>
