<script>
  import Downarrow from "../../../svgicons/Downarrow.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let dropDown = false
  let dropDown2 = false
  let dropDown3 = false
  let activeDropDown = "Monthly"
  let currentMonth = "January"
  let currentYear = 2023

  let years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const selectMonth = (month) => {
    currentMonth = month
  }
  const selectYear = (year) => {
    currentYear = year
  }

  $: dispatch("Dateinput", { activeDropDown: activeDropDown, currentMonth: currentMonth, currentYear: currentYear })
</script>

<div class="absolute top-0 flex w-full border-b border-Analytics-sidebar">
  <button
    class="relative flex w-1/4 items-center border-r border-Analytics-sidebar px-4"
    on:click={() => {
      dropDown3 = true
    }}
  >
    <h2>{activeDropDown}</h2>
    <div class="ml-auto flex items-center">
      <Downarrow />
    </div>
    <div class="absolute top-[48px] left-0 z-10 flex w-full flex-col items-start bg-Analytics-secondary {dropDown3 ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown3 = false)}>
      <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {activeDropDown == 'Monthly' ? 'active' : ''}" on:click={() => (activeDropDown = "Monthly")}>Monthly</button>
      <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {activeDropDown == 'Yearly' ? 'active' : ''}" on:click={() => (activeDropDown = "Yearly")}>Yearly</button>
    </div>
  </button>
  <button class="relative flex w-1/4 items-center border-r border-Analytics-sidebar px-4" on:click={() => (dropDown2 = true)}>
    <h2 class="font-mono">{currentYear}</h2>
    <div class="ml-auto flex items-center">
      <Downarrow />
    </div>
    <div class="absolute top-[48px] left-0 z-10 flex h-72 w-full flex-col items-start overflow-auto bg-Analytics-secondary {dropDown2 ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown2 = false)}>
      {#each years as year}
        <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {currentYear == year ? 'active' : ''}" on:click={() => selectYear(year)}>{year}</button>
      {/each}
    </div>
  </button>
  <button class="relative flex w-1/4 items-center px-4" on:click={() => (dropDown = true)}>
    {#if activeDropDown == "Monthly"}
      <h2>{currentMonth}</h2>
      <div class="ml-auto flex items-center">
        <Downarrow />
      </div>
      <div class="absolute top-[48px]  left-0 z-10 flex h-72 w-full flex-col items-start overflow-auto bg-Analytics-secondary {dropDown ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown = false)}>
        {#each months as month}
          <button class="flex w-full items-center justify-between border-b border-Analytics-sidebar px-4 py-4 text-white {currentMonth == month ? 'active' : ''}" on:click={() => selectMonth(month)}>
            {month}
          </button>
        {/each}
      </div>
    {/if}
  </button>
  <div class="grid w-1/4 grid-cols-2 border-r border-r-Analytics-sidebar">
    <div class="col-span-1 flex items-center justify-center border-r border-r-Analytics-sidebar bg-Analytics-addbtn py-3">
      <h2>FILTER</h2>
    </div>
    <div class="col-span-1 flex items-center justify-center bg-Analytics-iconcolor py-3">
      <h2>SEARCH</h2>
    </div>
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
  .active {
    @apply border-l-4 border-r border-l-Analytics-iconcolor bg-Analytics-primary;
  }
</style>
