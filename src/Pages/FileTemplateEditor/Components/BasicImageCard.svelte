<script>
  import Tooltip from "./Tooltip.svelte"
  import BackInt from "../svgIcons/BackInt.svelte"
  import ChooseFile from "../svgIcons/ChooseFile.svelte"
  let color = ["#313866", "#50409A", "#964AC2", "#FF7DBF", "#DD4470", "#B6F7FC", "#8C99A2"]
  let uploadImg = true
  let blobUrl

  let KB = 0,
    File,
    imgHeight = 0,
    imgWidth = 0
  let previewImage, files
  $: if (files) {
    console.log(files)

    KB = Math.floor(files[0].size / 1000).toFixed(1)
    console.log(KB)
    blobUrl = URL.createObjectURL(files[0])
    console.log(blobUrl)
    uploadImg = false
    setTimeout(() => {
      imgHeight = previewImage.naturalHeight
      imgWidth = previewImage.naturalWidth
    }, 500)
  }
</script>

<div class="w-75 space-y-2 rounded-md bg-darkGray p-4">
  <div class="group relative rounded-md w-full">
    <div class="labeltext">NAME</div>
    <input type="text" class="pl-16 dark:bg-lightGray input1" />
  </div>
  {#if uploadImg}
    <div class="relative flex h-24 flex-col items-center gap-2 rounded-md bg-lightGray p-2">
      <form id="formImage">
        <input bind:files type="file" name="userImage" class="absolute top-0 left-0 py-12 opacity-0" accept="image/*" />
      </form>
      <ChooseFile />
      <div class="flex flex-col items-center justify-center">
        <p class="text-sm text-white">
          Upload Image <span>or drag and drop</span>
        </p>
        <span class="rounded-md px-2 py-0.5 text-xs text-textGray">PNG, JPG, GIF up to 10MB</span>
      </div>
    </div>
  {:else}
    <div class="flex h-24 items-center justify-between gap-2 rounded-md bg-lightGray p-2">
      <div class="flex w-full gap-3">
        <img bind:this={previewImage} src={blobUrl} alt="previewImage" class="h-20 w-20 rounded-md" />
        <div class="w-full space-y-2">
          <div class="flex items-center justify-between">
            <h3 class="mt-1 text-sm font-bold text-white">{files[0].name}</h3>
            <button
              on:click={() => {
                files = ""
                uploadImg = true
              }}
              class="group relative flex items-start justify-end rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-primary_blue"
            >
              <div class="hidden group-hover:block"><Tooltip tip="Back" /></div>
              <BackInt />
            </button>
          </div>
          <div class="rounded-md text-xs font-bold text-textGray">
            {imgHeight} x {imgWidth}px
          </div>
          <div class="rounded-md text-xs font-bold text-textGray">{KB}KB</div>
        </div>
      </div>
    </div>
    <div class="flex -space-x-3">
      {#each color as colors}
        <button class="inline-block h-12 w-12 rounded-full" style:background={colors} />
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .labeltext {
    @apply absolute left-3 top-2.5 select-none text-sm font-bold text-textGray group-focus-within:text-primary_blue;
  }
  .input1 {
    @apply block h-10 w-full rounded-md border-none text-sm text-white focus:ring-2 focus:ring-primary_blue;
  }
</style>
