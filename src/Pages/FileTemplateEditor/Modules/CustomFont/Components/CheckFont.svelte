<script>
  import Tooltip from "../../../Components/Tooltip.svelte"
  import DropdownArrow from "../../../svgIcons/DropdownArrow.svelte"
  import LeftArrow from "../../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../../svgIcons/RightArrow.svelte"
  export let customFont
  let DocType = ["Normal", "Bold", "Italic"]
  let activeDocType = "Normal"
  let dropDown = false
  let option = "p"
</script>

<div class="flex flex-col gap-5">
  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Check Font</h1>

    <svelte:element
      this={option}
      on:dblclick={() => {
        option = "textarea"
      }}
      class="h-40 w-full resize-none rounded-md p-2 font-{customFont} text-sm font-medium leading-relaxed tracking-wider  text-textGray dark:bg-lightGray"
    >
      Lorem ipsum dolor sipisicing elit. Labore,, numquam. Quasi, nulla. Qui, reiciendis maxime nesciunt necessitatibus qu numquam. Quasi, nulla. Qui, reiciendis maxime nesciunt necessitatibus quae omnis laborum assumenda deleniti voluptatem modi...
    </svelte:element>
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Name</h1>
    <input type="text" class="h-[38px] w-full rounded-md border-none bg-lightGray text-sm font-bold text-textGray focus:border-primary_blue focus:ring-primary_blue dark:bg-lightGray" value="Roboto" />
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Style</h1>
    <div class="group relative  flex h-full w-full">
      <button
        on:click={() => {
          dropDown = !dropDown
        }}
        class="flex h-[38px] w-full items-center justify-between rounded-md  bg-white px-3 text-sm font-bold text-textGray focus:border focus:border-primary_blue focus:outline-none focus:ring-primary_blue dark:bg-lightGray"
      >
        {activeDocType}
        <DropdownArrow />
      </button>

      <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-12 z-10 w-full overflow-hidden rounded-md border border-primary_blue font-bold text-textGray">
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

  <!-- <div class="ml-auto flex gap-5 pt-12">
    <button class=" inline-block w-20 items-center rounded-[0.25rem] bg-[#134EEC] py-1.5 text-base font-normal tracking-wide  text-white  ring-[#92C7FF] focus:ring-2 disabled:cursor-not-allowed disabled:bg-[#0D82FF]">Save</button>
    <button class=" inline-block w-20 items-center rounded-[0.25rem]  bg-red-600 py-1.5  text-base font-normal tracking-wide  text-white ring-[#f96363] hover:bg-red-700 focus:ring-2 disabled:cursor-not-allowed disabled:bg-[#0D82FF]">Cancel</button>
  </div> -->
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

<style lang="postcss">
  .option-class {
    @apply w-full border-b border-darkGray/50 bg-lightGray px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
</style>
