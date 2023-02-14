<script>
  import Downarrow from "../../../svgicons/Downarrow.svelte"
  let dropDown3 = false
  let activeDropDown
</script>

<div class="px-4 pt-4  grid grid-cols-4 gap-3">
  <button
    class="relative col-span-1 flex w-full items-center border border-Analytics-sidebar px-4"
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
  <div class="col-span-1 border border-Analytics-sidebar">
    <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium  placeholder:text-Analytics-primarytext border-none placeholder:text-base" placeholder="Start date" />
  </div>
  <div class="col-span-1 border border-Analytics-sidebar">
    <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium  placeholder:text-Analytics-primarytext border-none  placeholder:text-base" placeholder="End date" />
  </div>
  <div class="col-span-1">
    <button class="w-full text-white flex justify-center items-center tracking-wider bg-Analytics-iconcolor border-0 py-2  focus:outline-none hover:bg-indigo-600">FILTER</button>
  </div>
</div>
<div class="px-4 pt-4  grid grid-cols-4 gap-3">
  <div class="col-span-3 border border-Analytics-sidebar">
    <input type="text" class="w-full bg-transparent text-sm text-white font-medium border-none placeholder:text-Analytics-primarytext placeholder:text-base" placeholder="Search" />
  </div>

  <div class="col-span-1">
    <button class="w-full text-white flex justify-center items-center tracking-wider bg-Analytics-addbtn border-0 py-2 focus:outline-none hover:bg-indigo-600">SEARCH</button>
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
