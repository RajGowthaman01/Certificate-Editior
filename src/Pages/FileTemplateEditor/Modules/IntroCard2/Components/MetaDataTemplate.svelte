<script>
  import DropdownArrow from "../../../svgIcons/DropdownArrow.svelte"
  import { linear } from "svelte/easing"
  import { slide } from "svelte/transition"

  let DocType = [
    "Sample1",
    "Sample3",
    "Certificate of appreciation",
    "Certificate of Completion",
    "Document Ride",
    "Bluespire",
  ]
  let activeDocType = "Sample1"
  let dropDown = false
  let metaDataHide = true
  const metaHideShow = () => {
    metaDataHide = !metaDataHide
  }
</script>

<div class="space-y-3 border-b border-textGray/50 pb-4">
  <div class="inline-flex w-full items-center justify-center">
    <h1 class="text-base font-bold text-textGray">Meta Data Template</h1>

    <span on:click={metaHideShow} class="ml-auto cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="h-8 w-8 stroke-textGray"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  </div>
  {#if metaDataHide}
    <div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
      <p class="w-3/4 text-sm font-normal text-textGray">
        Select the MetaData Template from which key values imported for
        autocompleting Name fills.
      </p>
      <div class="group relative flex w-full pb-2">
        <button
          on:click={() => {
            dropDown = !dropDown
          }}
          class="flex h-12 w-3/4 items-center justify-between rounded-md border-2 border-gray2 bg-white px-3 text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue dark:bg-darkGray"
        >
          {activeDocType}
          <DropdownArrow />
        </button>

        <div
          class="{dropDown
            ? 'flex flex-col'
            : 'hidden'} absolute top-14 w-3/4 rounded-md border-2 border-primary_blue font-bold text-textGray"
        >
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
  {/if}
</div>

<style lang="postcss">
  .option-class {
    @apply w-full rounded-md border-b-2 bg-darkGray px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
</style>
