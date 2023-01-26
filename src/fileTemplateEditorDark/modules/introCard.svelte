<script>
  import MetadataTemplate from "../modules/MetadataTemplate.svelte"
  import FileName from "../modules/FileName.svelte"
  import BaseImageUpload from "../modules/BaseImageUpload.svelte"
  import { fade } from "svelte/transition"
  import Tooltip from "../shared/tooltip.svelte"
  import { createEventDispatcher } from "svelte"
  import OverlappingImageUpload from "./overlappingImageUpload.svelte"
  const dispatch = createEventDispatcher()
  let modalOverLay = true
  let components = [MetadataTemplate, FileName, OverlappingImageUpload]
  export let pagination = true
  export let baseImgUpload = false
  // export let current = FileName
  let value = 0
  const dispatchComponent = (e) => {
    console.log(e.detail)
    value = e.detail
    console.log(components.length)
    if (value > components.length - 1) {
      console.log("value")
      dispatch("changeComponent")
      return
    }
  }
  const toggleModal = () => {
    console.log("modal toggled")
    modalOverLay = !modalOverLay
  }
</script>

{#if modalOverLay}
  <div class="absolute flex h-screen w-screen items-center justify-center bg-black/70 sm:p-5">
    <div class="relative aspect-[18/10] w-[960px] rounded-md bg-certificateSection" in:fade out:fade>
      <!-- {#if Close} -->
      <button class=" group absolute top-16 right-16 cursor-pointer" on:click={toggleModal}>
        <div class="z-20 hidden group-hover:block">
          <Tooltip tooltip="Close" top={true} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-rose">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <svelte:component this={components[value]} on:hideModal on:Component={dispatchComponent} />
    </div>
  </div>
{/if}

<style lang="postcss" global>
  .pagination {
    @apply h-4 w-4 rounded-full bg-primary text-xs hover:bg-primaryBlue hover:text-white focus:bg-primaryBlue focus:outline-none active:scale-125 md:flex;
  }
</style>
