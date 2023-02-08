<script>
  import { onMount } from "svelte"
  import { editorStore } from "../../../Stores/stores"
  import DropDownIcon from "../../../svg/dropDownIcon.svelte"
  export let blob, fontName
  let customFont
  let styles = ["normal", "bold", "italic", "underline"]
  let selectedStyle = "normal"
  let dropDown = false
  let option = "p"

  /**
   * dropdown section for close event trigger
   */
  let container
  /**
   * @function- to close the dropdown by clicking on any point on window
   * @param e - an event targetting opened dropdown
   */
  const onWindowClick = (e) => {
    if (container.contains(e.target) == false) dropDown = false
  }

  onMount(() => {
    if (blob) {
      customFont = document.getElementById("customFont")
      let styleElem = document.getElementById("styles")
      styleElem.appendChild(
        document.createTextNode(
          `@font-face {
           font-family:${fontName};
           src: url(${blob}) format("truetype"); 
           }`
        )
      )
      document.head.appendChild(styleElem)
    }
  })

  $: fw = selectedStyle.includes("bold") ? 700 : 400 //making text bolder
  $: fs = selectedStyle.includes("italic") ? "italic" : "normal" //making text italic
  $: td = selectedStyle.includes("underline") ? "underline" : "none" //making text underlined
</script>

<svelte:window on:click={onWindowClick} />
<div class="flex flex-col gap-3">
  <div class="h-48">
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Preview</h1>

    <div id="customFont" style="font-family: {fontName}">
      <svelte:element
        this={option}
        on:dblclick={() => {
          option = "textarea"
        }}
        id="customFont"
        style="
		      font-weight: {fw};
		      font-style: {fs};
		      text-decoration: {td};"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </svelte:element>
    </div>
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Name</h1>
    <input type="text" bind:value={fontName} class="h-[38px] w-full rounded-md border-none bg-lightGray text-sm font-bold text-textGray focus:border-primary_blue focus:ring-primary_blue dark:bg-lightGray" />
  </div>

  <div>
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Style</h1>
    <div bind:this={container} class="group rounded-md relative flex h-full w-full">
      <button
        on:click={() => {
          dropDown = !dropDown
        }}
        class="flex h-[38px] w-full items-center justify-between rounded-md  px-3 text-sm font-bold text-textGray focus:border focus:border-primary_blue focus:outline-none focus:ring-primary_blue bg-lightGray "
      >
        {selectedStyle}
        <span class="fill-textGray">
          <DropDownIcon />
        </span>
      </button>

      <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-12 z-10 w-full overflow-hidden rounded-md border border-primary_blue font-bold text-textGray">
        {#each styles as style}
          <option
            on:click={() => {
              selectedStyle = style
              dropDown = false
            }}
            class="option-class dark:border-gray1"
          >
            {style}
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
