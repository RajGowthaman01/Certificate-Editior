<script>
  import Downarrow from "../../../svgicons/Downarrow.svelte"
  let dropDown3 = false
  let activeDropDown
  let filter = false
  let search = false
  const onFilter = () => {
    filter = true
    search = false
  }
  const onSearch = () => {
    search = true
    filter = false
  }
</script>

<div class="px-4 pt-4 flex gap-3">
  {#if filter}
    <div class="flex w-11/12 gap-3">
      <button
        class="relative flex w-1/3 items-center border border-Analytics-sidebar px-4"
        on:click={() => {
          dropDown3 = true
        }}
      >
        <button class="text-Analytics-primarytext font-medium">{activeDropDown ? activeDropDown : "Status"}</button>
        <div class="ml-auto flex items-center">
          <Downarrow />
        </div>
        <div class="absolute top-[48px] left-0 z-10 flex w-full flex-col items-start bg-Analytics-secondary {dropDown3 ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown3 = false)}>
          <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {activeDropDown == 'Active' ? 'border-l-4 border-l-Analytics-iconcolor bg-Analytics-primary border' : 'border-l-4 border-l-transparent'}" on:click={() => (activeDropDown = "Active")}>Active</button>
          <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {activeDropDown == 'Revoked' ? 'border-l-4 border-l-Analytics-iconcolor bg-Analytics-primary border' : 'border-l-4 border-l-transparent'}" on:click={() => (activeDropDown = "Revoked")}>Revoked</button>
          <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {activeDropDown == 'All' ? 'border-l-4 border-l-Analytics-iconcolor bg-Analytics-primary border' : 'border-l-4 border-l-transparent'}" on:click={() => (activeDropDown = "All")}>All</button>
        </div>
      </button>
      <div class="flex w-1/3 border border-Analytics-sidebar">
        <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium border border-Analytics-sidebar placeholder:text-Analytics-primarytext border-none placeholder:text-base" placeholder="Start date" />
      </div>
      <div class="flex w-1/3">
        <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium border border-Analytics-sidebar placeholder:text-Analytics-primarytext  placeholder:text-base" placeholder="End date" />
      </div>
    </div>
  {/if}
  {#if search}
    <div class="flex w-11/12 border border-Analytics-sidebar">
      <input type="text" class="w-full bg-transparent text-sm text-white font-medium border border-Analytics-sidebar placeholder:text-Analytics-primarytext placeholder:text-base" placeholder="Search" />
    </div>
  {/if}
  <div class="gap-3 w-1/12 ml-auto flex justify-center items-center flex-shrink-0">
    <button on:click={onSearch} class=" w-full text-white flex justify-center items-center  border-0 py-2  focus:outline-none hover:bg-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
    <button on:click={onFilter} class=" w-full text-white flex justify-center items-center  border-0 py-2 focus:outline-none hover:bg-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    </button>
  </div>
</div>

<style lang="postcss">
  /* .active {
    @apply border-l-4 border-r border-l-Analytics-iconcolor bg-Analytics-primary;
  } */
  input::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>
