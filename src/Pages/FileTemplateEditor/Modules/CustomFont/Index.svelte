<script>
  import LeftArrow from "../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  import Tooltip from "../../Components/Tooltip.svelte"
  import PasteAndUpload from "./Components/PasteAndUpload.svelte"
  import CheckFont from "./Components/CheckFont.svelte"
  import Tick2 from "../../svgIcons/Tick2.svelte"
  import Delete from "../../svgIcons/Delete.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let disabled = true
  let fontLink = "https://fonts.googleapis.com/css?family=Abril Fatface"
  let FontComponent = PasteAndUpload
  const fontPreview = () => {
    if (fontLink) {
      let linkElem = document.createElement("link")
      linkElem.href = fontLink
      linkElem.rel = "stylesheet"
      document.head.appendChild(linkElem)
      fontName = fontLink.replace("https://fonts.googleapis.com/css?family=", "")
      console.log(fontName)
      FontComponent = CheckFont
      blob = ""
    }
  }
  let Previous = false
  const PrevComponent = () => {
    Previous = true
  }
  let blob
  let fontName
  const getBlobUrl = (e) => {
    FontComponent = CheckFont
    blob = e.detail.bloburl
    fontName = e.detail.fontName
  }
  const getFontLink = (e) => {
    fontLink = e.detail
  }
</script>

<div class="flex flex-col">
  <div class="relative flex w-[400px] flex-col p-5 rounded-t-md bg-white dark:bg-[#1E1E1E]">
    <!-- <CustomFonts />
    <CheckFont /> -->
    <svelte:component
      this={FontComponent}
      on:FontLink={getFontLink}
      {Previous}
      on:Previous={() => {
        Previous = false
      }}
      on:enableArrow={() => {
        disabled = false
      }}
      on:File={getBlobUrl}
      {blob}
      {fontName}
    />
  </div>
  {#if FontComponent == PasteAndUpload}
    <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
      <div class="flex text-textGray">
        <button
          on:click={() => {
            dispatch("delete")
          }}
          class="final-card group"
        >
          <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>
          <Delete stroke="stroke-red-500" />
        </button>
        <div class="ml-auto gap-5 flex">
          <button on:click={PrevComponent} {disabled} class="final-card group">
            <div class="hidden group-hover:block"><Tooltip tip="LeftArrow" /></div>
            <LeftArrow />
          </button>

          <button {disabled} on:click={fontPreview} class="final-card group">
            <div class="hidden group-hover:block"><Tooltip tip="RightArrow" /></div>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  {:else}
    <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
      <div class="flex text-textGray">
        <button
          on:click={() => {
            dispatch("delete")
          }}
          class="final-card group"
        >
          <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>
          <Delete stroke="stroke-red-500" />
        </button>
        <div class="ml-auto gap-5 flex">
          <button
            on:click={() => {
              FontComponent = PasteAndUpload
              disabled = true
            }}
            class="final-card group"
          >
            <div class="hidden group-hover:block"><Tooltip tip="LeftArrow" /></div>
            <LeftArrow />
          </button>

          <button on:click class="final-card group">
            <div class="hidden group-hover:block"><Tooltip tip="Save" /></div>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue disabled:cursor-not-allowed;
  }
</style>
