<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  import pdfSigning from "../../SignerOverlay/Stores/pdfSigning.js"
  import { slide, fade } from "svelte/transition"
  import NextIcon from "../../SignerOverlay/svg/NextIcon.svelte"
  import SelectPlacement from "../../SignerOverlay/svg/SelectPlacement.svelte"
  import InputDownArrow from "../../SignerOverlay/svg/InputDownArrow.svelte"

  const toggleSwitch = () => {
    pdfSigning.update((data) => {
      data.signPlacement.horizontal = !data.signPlacement.horizontal
      return data
    })
  }

  let pageNos = [1, 2, 3, 4, 5, 6, 7, 8],
    PageNoDiv = false
  const BindPageNoValue = (pageNo) => {
    PageNoDiv = !PageNoDiv
    pdfSigning.update((data) => {
      data.signPlacement.pageNo = pageNo
      return data
    })
  }

  let toggleSwitchWithText = false
  const signDoc = () => {
    toggleSwitchWithText = !toggleSwitchWithText
  }

  const Next = () => {
    dispatch("init")
  }
</script>

<div class="space-y-3 h-32">
  <div class="flex flex-col h-full justify-between items-start gap-3">
    <div class="w-full relative">
      <div class="relative w-full mt-1 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <InputDownArrow />
        </div>
        <button on:click={() => (PageNoDiv = !PageNoDiv)} class="w-full rounded-md border-2 border-lightGray bg-darkGray py-2 px-3 text-start text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue focus:bg-lightGray">{$pdfSigning.signPlacement.pageNo == 0 ? "Select Page Number" : $pdfSigning.signPlacement.pageNo}</button>
      </div>
      {#if PageNoDiv}
        <div transition:slide class="absolute top-12 z-20 mt-1 h-40 overflow-y-auto flex flex-col border-2 py-0.5 border-primary_blue ring-primary_blue text-white w-full rounded-md">
          {#each pageNos as pageNo}
            <button on:click={() => BindPageNoValue(pageNo)} class="hover:bg-darkGray bg-lightGray pb-0.5 rounded-sm border-b border-darkGray px-3 text-start">{pageNo}</button>
          {/each}
        </div>
      {/if}
      {#if toggleSwitchWithText}
        <div transition:slide class="flex mt-3 items-center justify-start">
          <button on:click={toggleSwitch} class="w-9 mr-2 h-5 rounded-full p-1 bg-darkGray flex {$pdfSigning.signPlacement.horizontal ? 'justify-start' : 'justify-end'} items-center">
            <div class="w-3 h-3 rounded-full bg-primary_blue" />
          </button>
          <span class="text-thin text-textGray mb-1 transition-all transform ease-in-out duration-1000">{$pdfSigning.signPlacement.horizontal ? "Horizontaly Lock" : "vertically Lock"}</span>
        </div>
      {/if}
    </div>

    <div class="flex justify-end gap-2 w-full">
      <button on:click={signDoc} class="btn"><SelectPlacement /></button>
      <!-- <button on:click={() => Next(1)} class="btn">
        <NextIcon />
      </button> -->
    </div>
  </div>
</div>
