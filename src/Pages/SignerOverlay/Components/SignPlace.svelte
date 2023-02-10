<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  // import NextIcon from "../svg/NextIcon.svelte"
  import { slide, fade } from "svelte/transition"
  // import SelectPlacement from "../svg/SelectPlacement.svelte"
  let toggleSwitchPosition = false
  const toggleSwitch = () => {
    toggleSwitchPosition = !toggleSwitchPosition
  }
  let toggleSwitchWithText = false
  const signDoc = () => {
    toggleSwitchWithText = !toggleSwitchWithText
    // dispatch("ShowImg")
  }
  let pageNos = [1, 2, 3, 4, 5, 6, 7, 8],
    PageNoDiv = false
  $: InputValue = "Select Page No"
  const BindPageNoValue = (pageNo) => {
    InputValue = pageNo
    PageNoDiv = !PageNoDiv
  }

  const Next = () => {
    dispatch("init")
  }
</script>

<div class="space-y-3 min-h-[250px]">
  <div class="flex flex-col min-h-[250px] justify-between items-start gap-3">
    <div class="w-full relative">
      <div class="relative w-full mt-1 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-textGray w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <button on:click={() => BindPageNoValue("Select Page No")} class="w-full rounded-md border-2 border-lightGray bg-darkGray py-2 px-3 text-start text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue focus:bg-lightGray">{InputValue}</button>
      </div>
      {#if PageNoDiv}
        <div transition:slide class="absolute top-12 z-20 mt-1 flex flex-col border-2 py-0.5 border-primary_blue ring-primary_blue text-white w-full rounded-md">
          {#each pageNos as pageNo}
            <button on:click={() => BindPageNoValue(pageNo)} class="hover:bg-darkGray bg-lightGray pb-0.5 rounded-sm border-b border-darkGray px-3 text-start">{pageNo}</button>
          {/each}
        </div>
      {/if}
      {#if toggleSwitchWithText}
        <div transition:slide class="flex mt-3 items-center justify-start">
          <button on:click={toggleSwitch} class="w-9 mr-2 h-5 rounded-full p-1 border-2 border-lightGray flex {toggleSwitchPosition ? 'justify-start' : 'justify-end'} items-center">
            <div class="w-3 h-3 rounded-full bg-primary_blue" />
          </button>
          {#if toggleSwitchPosition}
            <span class="text-thin text-textGray mb-1">Horizontaly Lock</span>
          {:else}
            <span class="text-thin text-textGray mb-1">Vertically Lock</span>
          {/if}
        </div>
      {/if}
    </div>

    <div class="flex justify-end gap-2 w-full">
      <!-- <button on:click={signDoc} class="btn"><SelectPlacement /></button> -->
      <button on:click={() => Next(1)} class="btn">
        <!-- <NextIcon /> -->
      </button>
    </div>
  </div>
</div>
