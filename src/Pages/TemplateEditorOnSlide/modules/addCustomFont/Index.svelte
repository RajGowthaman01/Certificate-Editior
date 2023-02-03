<script>
  import { createEventDispatcher } from "svelte"
  import LeftArrow from "../../svg/leftArrow.svelte"
  import RightArrow from "../../svg/rightArrow.svelte"
  import Tooltip from "../../shared/tooltip.svelte"
  import CustomFonts from "./components/customFonts.svelte"
  import CheckFont from "./components/checkFont.svelte"
  import Tick from "../../svg/tick.svelte"
  import Mark from "../../svg/mark.svelte"
  const dispatch = createEventDispatcher()
  let disabled = true
  let blob
  let Previous = false
  let FontComponent = CustomFonts
  // const fontPreview = () => {
  //   FontComponent = CheckFont
  // }
  const getBlobUrl = (e) => {
    FontComponent = CheckFont
    blob = e.detail
  }
</script>

<div class="flex flex-col">
  <div class="relative flex w-[400px] flex-col p-5 rounded-t-md bg-[#1E1E1E]">
    <svelte:component
      this={FontComponent}
      {Previous}
      on:enableArrow={() => {
        disabled = false
      }}
      on:File={getBlobUrl}
      {blob}
    />
  </div>
  {#if FontComponent == CustomFonts}
    <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
      <div class="flex items-center justify-end gap-5 text-textGray">
        <button {disabled} on:click={() => (Previous = true)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tooltip="back" top={true} /></div>
          <LeftArrow />
        </button>

        <button {disabled} on:click={() => (FontComponent = CheckFont)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tooltip="forward" top={true} /></div>
          <RightArrow />
        </button>
      </div>
    </div>
  {:else}
    <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
      <div class="flex items-center justify-end gap-5 text-textGray">
        <button
          on:click={() => {
            FontComponent = CustomFonts
            disabled = true
          }}
          class="final-card group"
        >
          <div class="hidden group-hover:block"><Tooltip tooltip="Delete" top={true} /></div>
          <Mark />
        </button>
        <button on:click={() => dispatch("hideFontModal")} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tooltip="Save" top={true} /></div>
          <Tick />
        </button>
      </div>
    </div>
  {/if}
</div>

<!-- </div> -->
<style lang="postcss">
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue disabled:cursor-not-allowed;
  }
</style>
