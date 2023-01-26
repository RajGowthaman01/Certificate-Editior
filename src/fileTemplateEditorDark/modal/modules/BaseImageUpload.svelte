<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  import Tooltip from "../shared/tooltip.svelte"
  import DisabledNexPage from "../svg/disabledNexPage.svelte"
  import PrevPage from "../svg/prevPage.svelte"
  import Tick from "../svg/tick.svelte"
  export let baseImgUpload = true
  let PreviewBaseImage = false
  let pagination = true
  let active = true
  // let hidden = true
  let File1
  let blobURL
  let file_Name
  let imgSize = 0
  let formData
  const imageUpload = () => {
    let image = document.getElementById("formImage")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    File1 = datum[1]
    imgSize = Math.floor(File1.size / 1000).toFixed(1)
    console.log(imgSize, "KB")
    blobURL = URL.createObjectURL(File1)
    localStorage.setItem("blobURL", blobURL)
    // let blobURL = localStorage.getItem("blobURL")
    console.log(blobURL)
    PreviewBaseImage = !PreviewBaseImage
    baseImgUpload = !baseImgUpload
    pagination = !pagination
    console.log("draganddrop hidden")
    file_Name = File1.name
    console.log(file_Name)
  }

  export const removeBaseImage = () => {
    PreviewBaseImage = !PreviewBaseImage
    baseImgUpload = true
    pagination = true
  }
</script>

{#if baseImgUpload}
  <div class="flex-col">
    <h1 class="mb-4 pt-16 pl-16 text-4xl text-blue-400">
      Upload <br />
      Image
    </h1>
    <div class="grid  grid-cols-2">
      <div class=" pr-8 pl-16 text-primaryGray">
        <p class="text-sm">
          Choose your <strong>Base Design Image</strong>
          to upload. You cannot change it after your confirmation.
        </p>
      </div>
      <div class="mx-auto flex w-2/3 flex-col items-center justify-center rounded-md">
        <form class="items-center justify-center space-y-2 rounded-md border border-dotted border-primaryGray  text-center" enctype="multipart/form-data" id="formImage" accept="image">
          <div class="flex w-full items-center justify-center ">
            <label class="group flex w-full flex-col rounded-lg p-10 text-center">
              <div class="flex h-full w-full flex-col items-center justify-center space-y-2 text-center">
                <div class="mx-auto flex w-full flex-auto">
                  <svg class="mx-auto h-10 w-10 text-primaryBlue" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="cursor-pointer rounded-md text-sm font-medium  text-secondaryGray">
                  <strong class="text-primaryBlue">Click to Upload</strong>
                  <span>or Drag and Drop</span>
                </p>
                <p class="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input id="file-upload" name="file-upload" type="file" class="sr-only hidden" on:input={imageUpload} />
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <div class:hidden={!pagination} class="absolute inset-x-0 bottom-8 mx-auto flex items-center ">
    <div class="mx-auto flex">
      <nav class="flex flex-row items-center gap-4 md:justify-center">
        <button
          title="prev page"
          on:click={() => {
            dispatch("Component", 1)
          }}
        >
          <PrevPage />
        </button>
        <button
          class="pagination pointer-events-none"
          title="Page 1"
          on:click={() => {
            dispatch("Component", 0)
          }}
        />
        <button
          class="pagination"
          title="Page 2"
          on:click={() => {
            dispatch("Component", 1)
          }}
        />
        <button
          class="pagination"
          title="Page 3"
          class:active
          on:click={() => {
            dispatch("Component", 2)
          }}
        />
        <button class="pointer-events-none cursor-not-allowed" title="prev page">
          <DisabledNexPage />
        </button>
      </nav>
    </div>
  </div>
{/if}

{#if PreviewBaseImage}
  <img src={blobURL} alt="" class="relative h-full w-full object-contain" />
  <div class="absolute bottom-0 mx-auto flex w-full items-center justify-between bg-gradient-to-t from-secondary to-transparent px-16 pb-8 pt-24">
    <div class="flex-col space-y-1 ">
      <div class="text-base font-bold text-heading">Upload Image</div>
      <div class=" text-heading ">
        <p class="text-sm">
          Choose your <strong>Base Design Image</strong>
          to upload. You cannot change it after your confirmation.
        </p>
      </div>
    </div>
    <div class="flex gap-6">
      <button on:click={removeBaseImage} class=" group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring-2 hover:ring-primaryBlue">
        <div class="z-20 hidden group-hover:block">
          <Tooltip tooltip="Choose Different ImageFile" top={true} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-heading hover:text-primaryBlue ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        on:click={() => {
          dispatch("hideModal")
        }}
        class="group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring-2 hover:ring-primaryBlue "
      >
        <div class="z-20 hidden group-hover:block">
          <Tooltip tooltip="Upload Image" top={true} />
        </div>

        <Tick />
      </button>
    </div>
  </div>
{/if}

<style lang="postcss">
  .active {
    @apply bg-primaryBlue;
  }
</style>
