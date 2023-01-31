<script>
  import { createEventDispatcher } from "svelte/internal"
  import { fade } from "svelte/transition"
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  let customFontLinks = ""
  const dispatch = createEventDispatcher()
  const customFontFiles = () => {
    console.log("customFonts")
    let FontInput = document.getElementById("customFonts")
    let formData = new FormData(FontInput)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    console.log(File)
  }
  const addCustomFonts = () => {
    console.log("addCustomFonts")
    let custom = customFontLinks.split("=")
    console.log(custom)
    loadLibrary()
    dispatch("customFont", custom[1])
  }
  const loadLibrary = async () => {
    return new Promise((resolve) => {
      let element = document.createElement("link")
      element.rel = "stylesheet"
      element.href = customFontLinks
      console.log(element)
      document.head.appendChild(element)

      element.onload = async function () {
        resolve()
      }
    })
  }
</script>

<form enctype="multipart/form-data" id="customFonts" class="relative h-full cursor-pointer flex-col items-center rounded-md dark:bg-green-600">
  <input on:change={customFontFiles} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept=".ttf" />
  <div transition:fade={{ duration: 1500 }} class="flex h-full flex-col items-center justify-center gap-2">
    <UploadIcon />
    <p class="text-sm text-gray1 dark:text-white">Drag and Drop or Click here to Upload a File</p>
    <button class="rounded-md text-xs text-gray1 dark:text-white">Choose only .ttf Files upto 10 MB.</button>
  </div>
</form>
