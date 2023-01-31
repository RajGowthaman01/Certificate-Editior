<script>
  import LeftArrow from "../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  import Tooltip from "../../Components/Tooltip.svelte"
  import CustomFonts from "./Components/CustomFonts.svelte"
</script>

<div class="flex flex-col">
  <div class="relative flex w-[400px] flex-col rounded-md bg-white p-5 dark:bg-[#1E1E1E]">
    <CustomFonts />
  </div>

  <div class="rounded-b-md border-t-2 border-lightGray bg-darkGray px-5 py-1.5">
    <div class="flex items-center justify-end gap-5 text-textGray">
      <button class="final-card group">
        <div class="hidden group-hover:block"><Tooltip tip="Left Arrow" /></div>
        <LeftArrow />
      </button>
      <button class="final-card group">
        <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>
        <RightArrow />
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
</style>
