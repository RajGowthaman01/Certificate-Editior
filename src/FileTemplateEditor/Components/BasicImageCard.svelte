<script>
  import Tooltip from "./Tooltip.svelte"
  import BackInt from "../svgIcons/BackInt.svelte"
  let color = ["#313866", "#50409A", "#964AC2", "#FF7DBF", "#DD4470", "#B6F7FC", "#8C99A2"]
  let uploadImg = true
  let blobUrl

  let KB = 0,
    File,
    imgHeight = 0,
    imgWidth = 0
  let formData
  const uploadImage = () => {
    console.log("uploadImage")
    let image = document.getElementById("formImage")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    console.log(datum)
    File = datum[1]
    console.log(File)
    KB = Math.floor(File.size / 1000).toFixed(1)
    console.log(KB)
    blobUrl = URL.createObjectURL(File)
    console.log(blobUrl)
    uploadImg = false
    setTimeout(() => {
      imgHeight = document.querySelector("#previewImage").naturalHeight
      imgWidth = document.querySelector("#previewImage").naturalWidth
    }, 500)
  }
</script>

<div class="w-75 space-y-2 rounded-md bg-darkGray p-4">
  <div class="group relative rounded-md">
    <div class="label-division2">
      <span class="span-label">NAME</span>
    </div>
    <input type="text" class="pl-16" />
  </div>
  {#if uploadImg}
    <div class="relative flex h-24 flex-col items-center gap-2 rounded-md bg-lightGray p-2">
      <form id="formImage">
        <input on:change={uploadImage} type="file" name="userImage" class="absolute top-0 left-0 py-12 opacity-0" accept="image/*" />
      </form>
      <svg class="h-8 w-8 text-textGray" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="flex flex-col items-center justify-center">
        <p class="text-sm text-white">
          Upload Image <span>or drag and drop</span>
        </p>
        <span class="rounded-md px-2 py-0.5 text-xs text-textGray">PNG, JPG, GIF up to 10MB</span>
      </div>
    </div>
  {:else}
    <!-- <div class="flex items-center justify-between gap-2 rounded-md bg-lightGray px-3 py-2">

      <div class="flex w-full gap-5">
        <img id="previewImage" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="images" class="h-16 w-16 rounded-md" />
        <div class="space-y-1">
          <div class=" text-sm font-bold text-white">image.png</div>
          <div class=" text-xs font-bold text-textGray">1080 x 720 px</div>
          <div class="text-xs font-bold text-textGray">20 KB</div>
        </div>
      </div>
    </div> -->
    <div class="flex h-24 items-center justify-between gap-2 rounded-md bg-lightGray p-2">
      <div class="flex w-full gap-3">
        <img id="previewImage" src={blobUrl} alt="image" class="h-20 w-20 rounded-md" />
        <div class="w-full space-y-2">
          <div class="flex items-center justify-between">
            <h3 class="mt-1 text-sm font-bold text-white">{File.name}</h3>
            <button on:click={() => (uploadImg = true)} class="group relative flex items-start justify-end rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-primary_blue">
              <div class="hidden group-hover:block"><Tooltip tip="Back" /></div>
              <BackInt />
            </button>
          </div>
          <div class="rounded-md text-xs font-bold text-textGray">{imgHeight} x {imgWidth}px</div>
          <div class="rounded-md text-xs font-bold text-textGray">{KB}KB</div>
        </div>
      </div>
    </div>
    <div class="flex -space-x-3">
      {#each color as colors}
        <button class="inline-block h-12 w-12 rounded-full" style="background:{colors}" />
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .span-label {
    @apply select-none text-sm font-bold text-textGray group-focus-within:text-primary_blue;
  }
  .label-division1 {
    @apply relative flex cursor-pointer items-center justify-center rounded-md text-xs hover:bg-zinc-900;
  }
  .label-division2 {
    @apply absolute inset-y-0 left-3 flex items-center;
  }
  input {
    @apply block h-10 w-full rounded-md border-none bg-lightGray text-sm text-white focus:ring-2  focus:ring-primary_blue;
  }
</style>
