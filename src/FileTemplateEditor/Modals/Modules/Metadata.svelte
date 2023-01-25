<script>
  import DropdownArrow from "../../svgIcons/DropdownArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  let DocType = ["Sample1", "Sample3", "Certificate of appreciation", "Certificate of Completion", "Document Ride", "Bluespire"]
  let activeDocType = "Sample1"
  let dropDown = false
</script>

<div class="grid w-full grid-cols-2 gap-5">
  <div class="ml-20 space-y-10">
    <h1 class="text-4xl font-bold text-gray1 dark:text-white">Metadata Template</h1>
    <p class="text-base font-normal text-gray2">Select the MetaData Template from which key values imported for autocompleting Name fills.</p>
  </div>

  <div class="group relative ml-20 flex w-full">
    <button
      on:click={() => {
        dropDown = !dropDown
      }}
      class="flex h-12 w-3/4 items-center justify-between rounded-md border-2 border-gray2 bg-white px-3 text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue dark:bg-darkGray"
    >
      {activeDocType}
      <DropdownArrow />
    </button>

    <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-14 z-10 w-3/4 rounded-md border-2 border-primary_blue font-bold text-textGray">
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
<div class="ml-auto flex cursor-pointer gap-14">
  <span on:click>
    <RightArrow />
  </span>
</div>

<style lang="postcss">
  .option-class {
    @apply w-full rounded-md border-b-2 px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
</style>
