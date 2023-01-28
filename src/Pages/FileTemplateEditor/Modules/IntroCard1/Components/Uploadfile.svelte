<script>
  import Modal from "../../../Stores/Modal"
  import { createEventDispatcher } from "svelte"
  import LeftArrow from "../../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../../svgIcons/RightArrow.svelte"
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  const dispatch = createEventDispatcher()
  let blobUrl
  let formData
  let inputValue = "Certificate"
  const uploadImage = () => {
    console.log("uploadImage")
    let image = document.getElementById("imageUpload")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    blobUrl = URL.createObjectURL(File)
    console.log(blobUrl)
    dispatch("uploadFile")
    Modal.update((data) => {
      data.bloburl = blobUrl
      return data
    })
  }
  const previousComponent = () => {
    dispatch("previous")
  }
</script>

<div class="grid grid-cols-2 gap-5">
  <div class="ml-20 flex flex-col justify-center gap-10">
    <h1 class="text-4xl font-bold text-gray1 dark:text-white">UploadFile</h1>
    <p class="text-base font-normal text-gray2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae
      dicta! tenetur.
    </p>
  </div>
  <form
    enctype="multipart/form-data"
    id="imageUpload"
    class="ml-20 h-52 w-3/4 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-gray2 bg-white dark:bg-lightGray"
  >
    <input
      bind:value={inputValue}
      on:change={uploadImage}
      type="file"
      name="uploadimageSec"
      class="absolute inset-0 opacity-0"
      accept="image/*"
    />
    <div class="flex h-full flex-col items-center justify-center gap-2">
      <UploadIcon />
      <p class="text-sm text-gray1 dark:text-textGray">
        Drag and Drop or Click here to Upload a File
      </p>
      <button class="rounded-md text-xs text-gray1 dark:text-textGray"
        >PNG, JPG, GIF up to 10MB</button
      >
    </div>
  </form>
</div>

<div class="ml-auto flex cursor-pointer gap-14">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={previousComponent}>
    <LeftArrow />
  </span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class={blobUrl ? "" : "pointer-events-none"} on:click>
    <RightArrow />
  </span>
</div>
