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
    KB
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
      imgHeight = document.getElementById("upload").naturalHeight
      // imgHeight = document.querySelector("img").naturalHeight
      imgWidth = document.getElementById("upload").naturalWidth
    }, 200)
  }
  const chooseDiffFile = () => {
    upload = true
  }
</script>

<div transition:slide={{ duration: 500, easing: linear }}>
  {#if upload}
    <div class="w-3/4">
      <p>Select the MetaData Template from which key values imported for autocompleting Name fills</p>
    </div>

    <form enctype="multipart/form-data" id="imageUpload" class="relative mt-3 flex h-44 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray2 bg-white dark:bg-lightGray">
      <input on:change={uploadImage} type="file" name="uploadimageSec" class="absolute inset-0 opacity-0" accept="image/*" />
      <div class="flex h-full flex-col items-center justify-center gap-2">
        <UploadIcon />
        <p>Drag and Drop or Click here to Upload a File</p>
        <h6 class="text-xs font-normal text-gray1 dark:text-textGray">PNG, JPG, GIF up to 10MB</h6>
      </div>
    </form>
  {:else}
    <div class="flex items-center gap-5">
      <div class="group relative flex justify-start">
        <img id="upload" src={blobUrl} alt="selected img" class="h-36 rounded-md object-contain" />

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={chooseDiffFile} class="absolute inset-0 hidden items-center justify-center bg-[#000000cc] group-hover:flex">
          <span class="rounded-full border p-2">
            <Delete stroke="stroke-white" />
          </span>
        </div>
      </div>

      <div class="flex flex-col justify-center space-y-3">
        <div>
          <h4>File Name</h4>
          <h5>{$Modal.fileName}</h5>
        </div>

        <div>
          <h4>Resolution</h4>
          <h5 class="flex items-center">
            {imgWidth}
            <Int />
            {imgHeight} px
          </h5>
        </div>

        <div>
          <h4>Size</h4>
          <h5>{KB} KB</h5>
        </div>
      </div>
    </div>
  {/if}
</div>
