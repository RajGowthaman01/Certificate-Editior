<script>
  import LeftArrow from "../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  import Tooltip from "../../Components/Tooltip.svelte"
  import CustomFonts from "./Components/CustomFonts.svelte"
  import CheckFont from "./Components/CheckFont.svelte"
  import Tick2 from "../../svgIcons/Tick2.svelte"
  import Delete from "../../svgIcons/Delete.svelte"
  let disabled = true
  let FontComponent = CustomFonts
  const fontPreview = () => {
    FontComponent = CheckFont
  }
  let Previous = false
  const PrevComponent = () => {
    Previous = true
  }
  let blob
  const getBlobUrl = (e) => {
    FontComponent = CheckFont
    blob = e.detail
  }
</script>

<div class="flex flex-col">
  <div class="relative flex w-[400px] flex-col p-5 rounded-t-md bg-white dark:bg-[#1E1E1E]">
    <!-- <CustomFonts />
    <CheckFont /> -->
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
          <Delete stroke="stroke-red-500" />
        </button>
        <button on:click class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="Save" /></div>
          <Tick2 />
        </button>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue disabled:cursor-not-allowed;
  }
</style>
