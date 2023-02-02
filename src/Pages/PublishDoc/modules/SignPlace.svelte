<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let toggleSwitchPosition = true
  const toggleSwitch = () => {
    toggleSwitchPosition = !toggleSwitchPosition
  }
  const signDoc = () => {
    dispatch("ShowImg")
  }
  let pageNos = [1, 2, 3, 4, 5, 6],
    PageNoDiv = false
  $: InputValue = "Select Page No"
  const showPageNo = () => {
    PageNoDiv = !PageNoDiv
  }
  const BindPageNoValue = (pageNo) => {
    InputValue = pageNo
    PageNoDiv = !PageNoDiv
  }
</script>

<div class="pb-5 space-y-3">
  <div class="flex flex-col justify-between items-start gap-3">
    <div class="relative w-full mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-textGray w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <button on:click={() => BindPageNoValue("Select Page No")} class="w-full rounded-md border-2 border-lightGray bg-lightGray py-2 px-3 text-start text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue focus:bg-darkGray">{InputValue}</button>
    </div>
    {#if PageNoDiv}
      <div class="flex flex-col border-2 py-0.5 border-primary_blue ring-primary_blue text-white w-full rounded-md">
        {#each pageNos as pageNo}
          <button on:click={() => BindPageNoValue(pageNo)} class="hover:bg-lightGray pb-0.5 rounded-sm border-b border-lightGray px-3 text-start">{pageNo}</button>
        {/each}
      </div>
    {/if}
    <button on:click={signDoc} class="btn w-20">Sign</button>
  </div>
  <div class="flex items-center justify-start">
    <button on:click={toggleSwitch} class="w-9 mr-2 h-5 rounded-full p-1 bg-lightGray flex {toggleSwitchPosition ? 'justify-start' : 'justify-end'} items-center">
      <div class="w-3 h-3 rounded-full bg-primary_blue" />
    </button>
    {#if toggleSwitchPosition}
      <span class="text-thin text-textGray mb-1">Horizontaly Lock</span>
    {:else}
      <span class="text-thin text-textGray mb-1">Vertically Lock</span>
    {/if}
  </div>
</div>
