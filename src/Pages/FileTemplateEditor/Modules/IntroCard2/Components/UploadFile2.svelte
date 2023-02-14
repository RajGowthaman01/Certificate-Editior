<script>
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  import { linear } from "svelte/easing"
  import { slide } from "svelte/transition"
  let blobUrl
  let formData
  let uploadImageHide = false
  let uploadHide = false
  let imgWidth = 0,
    imgHeight = 0,
    KB = 0
  const uploadImage = () => {
    console.log("uploadImage")
    let image = document.getElementById("imageUpload")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    blobUrl = URL.createObjectURL(File)
    KB = Math.floor(File.size / 1000).toFixed(1)
    console.log(blobUrl)
    console.log(File)
    // dispatch("uploadFile")
    // Modal.update((data) => {
    //   data.bloburl = blobUrl
    //   return data
    // })
    uploadImageHide = true
    uploadHide = false

    setTimeout(() => {
      imgHeight = document.getElementById("UploadImage").naturalHeight
      // imgHeight = document.querySelector("img").naturalHeight
      imgWidth = document.getElementById("UploadImage").naturalWidth
    }, 200)
  }
  const uploadHideShow = () => {
    uploadHide = !uploadHide
    uploadImageHide = false
  }
</script>

<div class="flex flex-col space-y-3 py-4">
  <div class="inline-flex w-full items-center justify-center">
    <h1 class="text-base font-bold text-textGray">UploadFile</h1>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={uploadHideShow} class="ml-auto cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-8 w-8 stroke-textGray">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
  </div>
  {#if uploadHide}
    <div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
      <p class="w-3/4 text-sm font-normal text-textGray">Select the MetaData Template from which key values imported for autocompleting Name fills</p>
      <form enctype="multipart/form-data" id="imageUpload" class="relative mt-3 flex h-44 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray2 bg-white dark:bg-lightGray">
        <input on:change={uploadImage} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept="image/*" />
        <div class="flex h-full flex-col items-center justify-center gap-2">
          <UploadIcon />
          <p class="text-sm text-gray1 dark:text-textGray">Drag and Drop or Click here to Upload a File</p>
          <button class="rounded-md text-xs text-gray1 dark:text-textGray">PNG, JPG, GIF up to 10MB</button>
        </div>
      </form>
    </div>
  {/if}
  {#if uploadImageHide}
    <div transition:slide={{ duration: 500, easing: linear }} class="flex items-center gap-5">
      <div class="flex justify-start">
        <img id="UploadImage" src={blobUrl} alt="selected img" class="h-36 rounded-md object-contain" />
      </div>
      <div class="flex flex-col justify-center space-y-3">
        <div class="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-textGray">
          <p class="font-bold">File Name</p>
          <p class="overflow-hidden text-ellipsis whitespace-nowrap font-thin">
            {File.name}
          </p>
        </div>
        <div class="text-sm text-textGray">
          <p class="font-bold">Resolution</p>
          <p class="flex items-center font-thin">
            {imgWidth}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {imgHeight} px
          </p>
        </div>
        <div class="text-sm text-textGray">
          <p class="font-bold">Size</p>
          <p class="font-thin">
            {KB}KB
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>
