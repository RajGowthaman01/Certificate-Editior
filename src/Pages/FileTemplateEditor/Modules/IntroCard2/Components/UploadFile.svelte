<script>
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  import { linear } from "svelte/easing"
  import { slide } from "svelte/transition"
  let blobUrl
  let formData
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
  let uploadHide = false
  const uploadHideShow = () => {
    uploadHide = !uploadHide
  }
</script>

<div class="flex flex-col space-y-3 py-4">
  <div class="inline-flex w-full items-center justify-center">
    <h1 class="text-base font-bold text-textGray">UploadFile</h1>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={uploadHideShow} class="ml-auto cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="h-8 w-8 stroke-textGray"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  </div>
  {#if uploadHide}
    <div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
      <p class="w-3/4 text-sm font-normal text-textGray">
        Select the MetaData Template from which key values imported for
        autocompleting Name fills
      </p>
      <form
        enctype="multipart/form-data"
        id="imageUpload"
        class="relative mt-3 flex h-44 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray2 bg-white dark:bg-lightGray"
      >
        <input
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
  {/if}
</div>
