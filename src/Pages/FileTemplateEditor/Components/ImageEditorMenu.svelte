<script>
  import BackInt from "../svgIcons/BackInt.svelte"
  import ChooseFile from "../svgIcons/ChooseFile.svelte"
  import Delete from "../svgIcons/Delete.svelte"
  import Info from "../svgIcons/Info.svelte"
  import Link from "../svgIcons/Link.svelte"
  import Maximize from "../svgIcons/Maximize.svelte"
  import Minimize from "../svgIcons/Minimize.svelte"
  import Move from "../svgIcons/Move.svelte"
  import Tooltip from "./Tooltip.svelte"
  import { slide } from "svelte/transition"

  let uploadImg = false
  let textName
  let minimize = false
  let btnName = "DYNAMIC"
  let blobUrl
  let count1 = 0
  let toggleBtn = false,
    KB = 0,
    File,
    imgHeight = 0,
    imgWidth = 0
  let formData
  const uploadImage = () => {
    console.log("uploadImage")
    let image = document.getElementById("form")
    formData = new FormData(image)
    console.log([...formData])
    let datum = [...formData][0]
    File = datum[1]
    KB = Math.floor(File.size / 1000).toFixed(1)
    blobUrl = URL.createObjectURL(File)
    uploadImg = false
    setTimeout(() => {
      imgHeight = document.querySelector("#previewImage").naturalHeight
      imgWidth = document.querySelector("#previewImage").naturalWidth
    }, 500)
  }
  const displayUploadSection = () => {
    toggleBtn = !toggleBtn
    if (toggleBtn) {
      uploadImg = true
      btnName = "STATIC"
    } else {
      uploadImg = false
      btnName = "DYNAMIC"
    }
  }
</script>

<div>
  <div class="w-75 space-y-2 rounded-t-md bg-darkGray p-4">
    <div class="group relative rounded-md">
      <div class="label-division2">
        <span class="span-label">NAME</span>
      </div>
      <input bind:value={textName} type="text" class="pl-16" />
    </div>

    <div class="flex h-10 w-full items-center gap-2 bg-lightGray px-3">
      <span class="group relative">
        <div class="hidden group-hover:block"><Tooltip tip="Info" /></div>
        <Info />
      </span>
      <h1 class="text-sm font-bold text-textGray">{btnName}</h1>
      <button on:click={displayUploadSection} class:justify-end={toggleBtn} class="ml-auto flex h-5 w-12 items-center rounded-full  bg-darkGray py-1 text-textGray focus:outline-none focus:ring-2 focus:ring-primary_blue">
        <button class="h-4 w-6 rounded-full bg-primary_blue text-xs text-white focus:outline-none focus:ring-2 focus:ring-primary_blue" />
      </button>
    </div>
    {#if minimize}
      <div class="space-y-2" transition:slide={{ duration: 500 }}>
        {#if uploadImg}
          <form id="form" enctype="multipart/form-data" class="relative flex h-24 flex-col items-center gap-2 rounded-md bg-lightGray p-2">
            <input on:change={uploadImage} type="file" name="userImage" class="absolute inset-0 opacity-0" accept="image/*" />
            <ChooseFile />
            <div class="flex flex-col items-center justify-center">
              <p class="text-sm text-white">
                Upload Image <span>or drag and drop</span>
              </p>
              <span class="rounded-md px-2 py-0.5 text-xs text-textGray">PNG, JPG, GIF up to 10MB</span>
            </div>
          </form>
        {:else if !uploadImg && btnName == "STATIC"}
          <div class="flex h-24 items-center justify-between gap-2 rounded-md bg-lightGray p-2">
            <div class="flex w-full gap-3">
              <img id="previewImage" src={blobUrl} alt="QRCode" class="h-20 w-20 rounded-md" />
              <div class="w-full space-y-2">
                <div class="flex items-center justify-between">
                  <h3 class="mt-1 text-sm font-bold text-white">{File.name}</h3>
                  <button on:click={() => (uploadImg = true)} class="group relative flex items-start justify-end rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-primary_blue">
                    <div class="hidden group-hover:block">
                      <Tooltip tip="Back" />
                    </div>
                    <BackInt />
                  </button>
                </div>
                <div class="rounded-md text-xs font-bold text-textGray">
                  {imgHeight} x {imgWidth}px
                </div>
                <div class="rounded-md text-xs font-bold text-textGray">
                  {KB}KB
                </div>
              </div>
            </div>
          </div>
        {/if}
        <div class="flex gap-2">
          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">X</span>
            </div>
            <div class="down-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <span on:click={() => (count1 -= 5)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
            <div class="up-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <span on:click={() => (count1 += 5)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </span>
            </div>
            <input type="text" class="px-8" />
          </div>

          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">Y</span>
            </div>
            <div class="down-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 -= 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div class="up-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 += 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <input type="text" class="px-8" />
          </div>
          <button class="icons group">
            <div class="hidden group-hover:block"><Tooltip tip="Move" /></div>
            <Move />
          </button>
        </div>
        <div class="flex gap-2">
          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">W</span>
            </div>
            <div class="down-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 -= 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div class="up-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 += 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <input type="text" class="px-8" />
          </div>

          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">H</span>
            </div>
            <div class="down-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 -= 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div class="up-arrow">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <svg on:click={() => (count1 += 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <input type="text" class="px-8" />
          </div>
          <button class="icons group">
            <div class="hidden group-hover:block"><Tooltip tip="Link" /></div>
            <Link />
          </button>
        </div>
      </div>
    {/if}
  </div>

  <div class="w-75 rounded-b-md border-t-2 border-lightGray bg-darkGray px-4 py-1.5">
    <div class="flex items-center justify-end gap-2 text-textGray">
      {#if minimize}
        <button on:click={() => (minimize = false)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="Minimize" /></div>

          <Minimize />
        </button>
      {:else}
        <button on:click={() => (minimize = true)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="Maximize" /></div>

          <Maximize />
          <div class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 {textName ? 'animate-ping' : ''}" />
        </button>
      {/if}
      <button class="delete group">
        <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>

        <Delete />
      </button>
    </div>
  </div>
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
  .icons {
    @apply relative rounded-md p-2.5 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
  .delete {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-500;
  }
  .down-arrow {
    @apply absolute bottom-1 right-2 hidden items-center group-focus-within:block group-hover:block;
  }
  .up-arrow {
    @apply absolute top-1 right-2 hidden items-center group-focus-within:block group-hover:block;
  }
</style>
