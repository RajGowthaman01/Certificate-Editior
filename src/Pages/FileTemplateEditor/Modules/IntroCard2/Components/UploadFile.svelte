<script>
  import UploadIcon from "../../../svgIcons/UploadIcon.svelte"
  import { linear } from "svelte/easing"
  import { slide } from "svelte/transition"
  import Delete from "../../../svgIcons/Delete.svelte"
  import Modal from "../../../Stores/Modal"
  import Int from "../../../svgIcons/Int.svelte"
  let upload = true,
    blobUrl,
    formData,
    imgHeight,
    imgWidth,
    KB,
    File
  const uploadImage = () => {
    console.log("uploadImage")
    let image = document.getElementById("imageUpload")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    blobUrl = URL.createObjectURL(File)
    upload = false
    KB = Math.floor(File.size / 1000).toFixed(1)
    console.log(blobUrl)
    Modal.update((data) => {
      data.bloburl = blobUrl
      return data
    })

    setTimeout(() => {
      imgHeight = document.getElementById("UploadImage").naturalHeight
      // imgHeight = document.querySelector("img").naturalHeight
      imgWidth = document.getElementById("UploadImage").naturalWidth
    }, 200)
  }
  const chooseDiffFile = () => {
    upload = true
  }
</script>

<div transition:slide={{ duration: 500, easing: linear }}>
  {#if upload}
    <div class="w-3/4">
      <p class="text-xs tracking-wider leading-relaxed text-textGray font-medium">Select the MetaData Template from which key values imported for autocompleting Name fills</p>
    </div>

    <form enctype="multipart/form-data" id="imageUpload" class="relative mt-3 flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray2 bg-white dark:bg-lightGray">
      <input on:change={uploadImage} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept="image/*" />
      <div class="flex h-full flex-col items-center justify-center gap-2">
        <UploadIcon />
        <p class="text-sm tracking-wider leading-relaxed text-textGray font-medium">Drag and Drop or Click here to Upload a File</p>
        <h6 class="text-xs font-normal text-gray1 dark:text-textGray">PNG, JPG, GIF up to 10MB</h6>
      </div>
    </form>
  {:else}
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
