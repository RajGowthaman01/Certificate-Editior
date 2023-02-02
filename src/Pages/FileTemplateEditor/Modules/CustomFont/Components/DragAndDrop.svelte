<script>
  import { createEventDispatcher } from "svelte/internal"
  import { fade } from "svelte/transition"
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  const dispatch = createEventDispatcher()
  let bloburl
  const customFontFiles = () => {
    console.log("customFonts")
    let FontInput = document.getElementById("customFonts")
    let formData = new FormData(FontInput)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    console.log(File)
    bloburl = URL.createObjectURL(File)
    dispatch("File", bloburl)
  }
</script>

<form in:fade={{ duration: 1500 }} enctype="multipart/form-data" id="customFonts" class="relative h-full cursor-pointer flex-col items-center rounded-md dark:bg-emerald-600">
  <input on:change={customFontFiles} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept=".ttf" />
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <UploadIcon />
    <p class="text-sm text-gray1 dark:text-white">Drag and Drop or Click here to Upload a File</p>
    <button class="rounded-md text-xs text-gray1 dark:text-white">Choose only .ttf Files upto 10 MB.</button>
  </div>
</form>
