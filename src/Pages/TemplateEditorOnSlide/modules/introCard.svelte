<script>
  import MetadataTemplate from "../modules/MetadataTemplate.svelte"
  import FileName from "../modules/FileName.svelte"
  import { fade } from "svelte/transition"
  import Tooltip from "../shared/tooltip.svelte"
  import { createEventDispatcher } from "svelte"
  import OverlappingImageUpload from "./overlappingImageUpload.svelte"

  const dispatch = createEventDispatcher()
  let modalOverLay = true
  let darkMode = false
  let value = 0
  let components = [MetadataTemplate, FileName, OverlappingImageUpload]

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
  const toggleLightDark = () => {
    darkMode = !darkMode
    window.document.body.classList.toggle("dark")
  }
</script>

<div class:hidden={!modalOverLay} class="absolute flex h-screen w-screen items-center justify-center bg-topNavSvgBg/80 dark:bg-black/70 sm:p-5">
  {#if darkMode}
    <button on:click={toggleLightDark} class="absolute top-10 right-10 rounded-lg bg-gray-500 py-1 px-2 capitalize text-white focus:outline-none">darkMode</button>
  {:else}
    <button on:click={toggleLightDark} class="absolute top-10 right-10 rounded-lg bg-white py-1 px-2 capitalize text-gray-800   focus:outline-none ">lightMode</button>
  {/if}
  <div class="relative aspect-[15/7] w-[700px] rounded-md bg-heading shadow-box_Shadow dark:bg-certificateSection 2xl:aspect-[16/8] 2xl:w-[800px]" in:fade out:fade>
    <!-- {#if Close} -->
    <button class=" group absolute top-8 right-8 cursor-pointer" on:click={() => (modalOverLay = !modalOverLay)}>
      <div class="z-20 hidden group-hover:block">
        <Tooltip tooltip="Close" top={true} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-red-600 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <svelte:component this={components[value]} on:hideModal on:Component={dispatchComponent} />
  </div>
</div>

<!-- {/if} -->
<style lang="postcss" global>
  .pagination {
    @apply h-4 w-4 rounded-full bg-gray-300 text-xs hover:bg-primary_blue hover:text-white focus:bg-primary_blue focus:outline-none active:scale-125 dark:bg-primary md:flex;
  }
</style>
