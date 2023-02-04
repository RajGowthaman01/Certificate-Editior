<script>
  import { onMount } from "svelte"
  import DropdownArrow from "../../../svgIcons/DropdownArrow.svelte"
  export let blob

  let DocType = ["Normal", "Bold", "Italic"]
  let activeDocType = "Normal"
  let dropDown = false
  let option = "p"
  let customFont
  onMount(() => {
    if (blob) {
      customFont = document.getElementById("CustomFonts")
      console.log("custoim font is", customFont)
      console.log("bloburl is ", blob)
      // // let blob1 = blob.replace("blob:", "")
      // let newElement = document.createElement("style")
      // newElement.appendChild(
      //   document.createTextNode(`@font-face {
      //   font-family: "myfont";
      //   src: url(data:font/truetype;charset=utf-8;base64,${localStorage.getItem("base64")}) format("truetype");
      // }`)
      // )
      // document.head.appendChild(newElement)
      let newElement = document.createElement("style")
      newElement.appendChild(
        document.createTextNode(`@font-face {
        font-family: "myfont";
        src: url(${blob}) format("truetype");
      }`)
      )
      document.head.appendChild(newElement)
      customFont.style["fontFamily"] = "myfont"
    }
  })
</script>

<div class="flex flex-col gap-3">
  <div class="h-48">
    <h1 class="pb-2 text-lg font-medium text-textGray">Font Preview</h1>

    <svelte:element
      this={option}
      id="CustomFonts"
      on:dblclick={() => {
        option = "textarea"
      }}
    >
      The lesson here breaks down all of the pieces that go into building a strong narrative paragraph. When you have mastered this lesson, you will be able to describe things that happened to you, or your memories, in writing in English.
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
        class="flex h-[38px] w-full  items-center justify-between rounded-md  bg-white px-3 text-sm font-bold text-textGray focus:border focus:border-primary_blue focus:outline-none focus:ring-primary_blue dark:bg-lightGray"
      >
        {activeDocType}
        <DropdownArrow />
      </button>

      <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute -top-28 z-10 w-full overflow-hidden rounded-md border border-primary_blue font-bold text-textGray">
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
    @apply h-40 w-full  rounded-md bg-[#1E1E1E] px-3 py-2 text-sm font-medium leading-relaxed tracking-wider text-textGray;
  }
</style>
