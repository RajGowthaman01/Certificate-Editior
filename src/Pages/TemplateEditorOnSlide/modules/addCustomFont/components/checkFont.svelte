<script>
  // import Tooltip from "../../../Components/Tooltip.svelte"
  import DropDownIcon from "../../../svg/dropDownIcon.svelte"
  import DropdownArrow from "../../../svg/dropDownIcon.svelte"
  // import LeftArrow from "../../../svgIcons/LeftArrow.svelte"
  // import RightArrow from "../../../svgIcons/RightArrow.svelte"
  export let customFont
  let readonly = true
  let DocType = ["Normal", "Bold", "Italic"]
  let activeDocType = "Normal"
  let dropDown = false
  let option = "p"
</script>

<div class="flex flex-col gap-3">
  <div class="h-48">
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Preview</h1>

    <svelte:element
      this={option}
      on:dblclick={() => {
        option = "textarea"
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </svelte:element>
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Name</h1>
    <input type="text" class="h-[38px] w-full rounded-md border-none bg-lightGray text-sm font-bold text-textGray focus:border-primary_blue focus:ring-primary_blue dark:bg-lightGray" value="Roboto" />
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Style</h1>
    <div class="group rounded-md relative flex h-full w-full">
      <button
        on:click={() => {
          dropDown = !dropDown
        }}
        class="flex h-[38px] w-full items-center justify-between rounded-md  px-3 text-sm font-bold text-textGray focus:border focus:border-primary_blue focus:outline-none focus:ring-primary_blue bg-lightGray"
      >
        {activeDocType}
        <span class="fill-textGray">
          <DropDownIcon />
        </span>
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
</div>

<style lang="postcss">
  .option-class {
    @apply w-full border-b border-darkGray/50 bg-lightGray px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
  textarea {
    @apply h-40 w-full resize-none rounded-md border border-textGray bg-[#1E1E1E]  text-sm font-medium leading-relaxed tracking-wider text-textGray read-only:border-none focus:border-primary_blue focus:ring-primary_blue;
  }
  p {
    @apply h-40 w-full rounded-md  bg-[#1E1E1E] px-3 py-2 text-sm font-medium leading-relaxed tracking-wider text-textGray;
  }
</style>
