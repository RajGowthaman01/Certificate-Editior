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

<div class="w-full border-b border-b-Analytics-sidebar">
  <div class="w-1/3 grid-cols-2 grid">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onFilter} class="col-span-1 flex items-center justify-center bg-Analytics-addbtn py-3">
      <h2>FILTER</h2>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={onSearch} class="col-span-1 flex items-center justify-center bg-Analytics-iconcolor py-3">
      <h2>SEARCH</h2>
    </div>
  </div>
</div>
<div class="px-4 overflow-hidden">
  {#if filter}
    <div class="flex w-full border border-Analytics-sidebar mt-4">
      <button
        class="relative flex w-1/3 items-center border-r border-Analytics-sidebar p-2.5"
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

      <div class="flex w-1/3 border-r border-r-Analytics-sidebar">
        <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium border-none placeholder:text-Analytics-primarytext placeholder:text-base" placeholder="Start date" />
      </div>
      <div class="flex w-1/3">
        <input onfocus="(this.type = 'date')" type="text" class="w-full bg-transparent text-sm text-Analytics-primarytext font-medium border-none placeholder:text-Analytics-primarytext placeholder:text-base" placeholder="End date" />
      </div>
    </div>
  {/if}
  {#if search}
    <div class="flex w-full border border-Analytics-sidebar">
      <input type="text" class="w-full bg-transparent text-sm p-3 text-white font-medium  border-none placeholder:text-Analytics-primarytext placeholder:text-base" placeholder="Search" />
    </div>
  {/if}
</div>

<style lang="postcss">
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
  /* .active {
    @apply border-l-4 border-r border-l-Analytics-iconcolor bg-Analytics-primary;
  } */
  input::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
</style>
