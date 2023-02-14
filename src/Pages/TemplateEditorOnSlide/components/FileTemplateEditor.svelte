<script>
  import { afterUpdate, onMount } from "svelte"
  import { fade } from "svelte/transition"
  import { editorStore } from "../Stores/stores"
  import Footer from "./footer.svelte"
  import LayerPanel from "./layerPanel.svelte"
  import IntroCard from "../modules/introCard/index.svelte"
  import Index from "../modules/addCustomFont/Index.svelte"
  import FontList from "../modules/addCustomFont/components/fontList.svelte"

  let editSection
  let modalOverLay = true
  let customFontModal = false
  let fontListModal = false

  afterUpdate(() => {
    const canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d")
    let img = new Image()
    img.onload = function () {
      ctx.font = "40pt Calibri"
      ctx.fillText($editorStore.layerOperations["name"], 10, 10)
      ctx.canvas.width = img.width
      ctx.canvas.height = img.height
      ctx.drawImage(img, 0, 0, img.width, img.height)
    }
    img.src = $editorStore.base.url
  })
</script>

<div class="relative flex h-screen w-screen flex-col overflow-hidden">
  <div class="w-full fixed items-center justify-center border-b-0 border-inherit bg-secondary">
    <div class="h-14 flex items-center" />
  </div>
  <div class="flex w-full flex-row bg-certificateSection">
    <LayerPanel
      on:fontList={() => (fontListModal = true)}
      on:FontModal={() => {
        customFontModal = true
      }}
      {editSection}
    />
    <div class="flex h-screen w-screen items-center justify-center bg-certificateSection">
      <canvas id="canvas" alt="preview image" class="max-w-[1000px] mt-8 overflow-hidden max-h-[80vh] rounded-md 2xl:max-h-[90vh]" />
    </div>
  </div>
  <Footer />
  {#if customFontModal}
    <div out:fade class="absolute inset-0 flex items-center justify-center overflow-hidden bg-topNavSvgBg/70">
      <Index on:hideFontModal={() => (customFontModal = false)} />
    </div>
  {/if}
  {#if modalOverLay}
    <IntroCard on:hideModal={() => (modalOverLay = !modalOverLay)} />
  {/if}

  {#if fontListModal}
    <FontList />
  {/if}
</div>

<style lang="postcss" global>
  .positonHolder {
    @apply ml-1 text-base text-gray-400;
  }
  .Button {
    @apply mx-auto inline-flex cursor-pointer select-none gap-2 rounded-md border border-green-600 py-1 px-2 text-center text-sm font-medium capitalize  text-green-600  hover:bg-green-600 hover:text-white  focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green-600  active:bg-green-600 active:text-white dark:hover:text-white;
  }
  .topnavsvg {
    @apply flex h-8 w-8 items-center justify-center rounded-md border border-green-600 text-green-600 ring-0  hover:bg-green-600 focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green-600 active:bg-transparent active:text-white dark:hover:text-white;
  }
</style>
