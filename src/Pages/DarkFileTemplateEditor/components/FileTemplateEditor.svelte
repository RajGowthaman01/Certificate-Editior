<script>
  import Footer from "./footer.svelte"
  import LayersSection from "./layerPanel.svelte"
  import Image from "../svg/image.svelte"
  import Save from "../svg/save.svelte"
  import Index from "../modules/introCard.svelte"

  let editSection
  let modalOverLay = true
</script>

<div class="relative flex h-screen w-screen flex-col overflow-hidden">
  <div class="bg-secondary h-14 w-full items-center justify-center border-b-0 border-inherit py-2">
    <div class="justify-right flex">
      <div class="flex">
        <div class="left-0 top-0 grid min-w-[330px] max-w-[330px] grid-cols-3 justify-end ">
          <button class="Button">
            <Save /> Save
          </button>
          <button class="Button">
            <span class="font-serif">A</span>
            Text
          </button>
          <button class="Button">
            <Image />Image
          </button>
        </div>
      </div>
      <div class="flex w-[330px] flex-row items-center justify-between gap-8 border-l border-gray-700 px-8" />
    </div>
  </div>
  <div class="bg-certificateSection flex w-full flex-row">
    <LayersSection {editSection} />
    <div class="bg-certificateSection flex h-screen w-screen" />
  </div>
  <Footer />
  <!-- <DarkCard {modalOverLay} /> -->
  {#if modalOverLay}
    <Index on:hideModal={() => (modalOverLay = !modalOverLay)} />
  {/if}
</div>

<style lang="postcss" global>
  .positonHolder {
    @apply ml-1 text-base text-gray-400;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .Button {
    @apply mx-auto inline-flex cursor-pointer select-none gap-2 rounded-md border border-green-600 py-1 px-2 text-center text-sm font-medium capitalize  text-green-600  hover:bg-green-600 hover:text-white focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green-600  active:bg-green-600 active:text-white dark:hover:text-white;
  }
  .topnavsvg {
    @apply flex h-8 w-8 items-center justify-center rounded-md border border-green-600 text-green-600 ring-0  hover:bg-green-600 focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green-600 active:bg-transparent active:text-white dark:hover:text-white;
  }
</style>
