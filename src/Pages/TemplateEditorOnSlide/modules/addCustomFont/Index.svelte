<script>
  import LeftArrow from "../../svg/leftArrow.svelte"
  import RightArrow from "../../svg/rightArrow.svelte"
  import Tooltip from "../../shared/tooltip.svelte"
  import CustomFonts from "./components/customFonts.svelte"
  import CheckFont from "./components/checkFont.svelte"
  // import Tick2 from "../../../../svgIcons/Tick2.svelte"
  // import Delete from "../../../../svgIcons/Delete.svelte"
  import Tick from "../../svg/tick.svelte"
  import Mark from "../../svg/mark.svelte"
  let disabled = true
  let FontComponent = CustomFonts
  const fontPreview = () => {
    FontComponent = CheckFont
  }
</script>

<!-- <div class="absolute w-[600px] rounded-md bg-heading shadow-box_Shadow dark:bg-certificateSection" in:fade out:fade> -->
<div class="flex flex-col">
  <div class="relative flex w-[400px] flex-col p-5 rounded-t-md bg-[#1E1E1E]">
    <svelte:component
      this={FontComponent}
      on:enableArrow={() => {
        disabled = false
      }}
    />
  </div>
  {#if FontComponent == CustomFonts}
    <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
      <div class="flex items-center justify-end gap-5 text-textGray">
        <button {disabled} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="LeftArrow" /></div>
          <LeftArrow />
        </button>

        <button {disabled} on:click={fontPreview} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="RightArrow" /></div>
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
          <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>
          <!-- <Delete stroke="stroke-red-500" /> -->
          <Mark />
        </button>
        <button on:click class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="Save" /></div>
          <!-- <Tick2 /> -->
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
