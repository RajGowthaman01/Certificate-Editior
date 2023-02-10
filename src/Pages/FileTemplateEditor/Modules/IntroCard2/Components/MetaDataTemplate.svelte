<script>
  import DropdownArrow from "../../../svgIcons/DropdownArrow.svelte"
  import { linear } from "svelte/easing"
  import { slide } from "svelte/transition"

  let DocType = ["Sample1", "Sample3", "Certificate of appreciation", "Certificate of Completion", "Document Ride", "Bluespire"]
  let activeDocType = "Sample1"
  let dropDown = false
</script>

<div transition:slide={{ duration: 500, easing: linear }} class="space-y-2">
  <div class="w-3/4">
    <p class="text-xs tracking-wider leading-relaxed text-textGray font-medium">Select the MetaData Template From which key values imported for autocompleting Name fills.</p>
  </div>
  <div class="group relative flex w-full">
    <button
      on:click={() => {
        dropDown = !dropDown
      }}
      class="flex h-[38px] w-2/3 items-center justify-between rounded-md border-2 border-gray2 bg-white px-3 text-sm font-bold  text-textGray shadow-sm focus:border-primary_blue  focus:ring-primary_blue dark:bg-darkGray"
    >
      {activeDocType}
      <DropdownArrow />
    </button>

    <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-14 w-3/4 rounded-md border-2 border-primary_blue font-bold text-textGray">
      {#each DocType as DocType}
        <option
          on:click={() => {
            activeDocType = DocType
            dropDown = false
          }}
          class="option-class dark:border-gray1"
        >
          {DocType}
        </option>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .option-class {
    @apply w-full rounded-md border-b-2 bg-darkGray px-3 py-1 text-sm font-bold text-textGray hover:text-primary_blue;
  }
</style>
