<script>
  import Logo from "../../svgicons/logo.svelte"
  import Pdicon from "../../svgicons/Pdicon.svelte"
  import Settingsicon from "../../svgicons/settingsicon.svelte"
  import Analyticicon from "../../svgicons/Analyticicon.svelte"
  import Historyicon from "../../svgicons/Historyicon.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"
  import Templateicon from "../../svgicons/Templateicon.svelte"
  import Searchicon from "../../svgicons/Searchicon.svelte"
  import Downarrow from "../../svgicons/Downarrow.svelte"
  import Card from "../../Components/Card.svelte"
  import Card2 from "../../Components/Card2.svelte"
  import Card3 from "../../Components/Card3.svelte"
  import Card4 from "../../Components/Card4.svelte"
  import ChartApexcharts from "./Components/Chart-Apexcharts.svelte"
  import ChartChartjs from "./Components/Chart-Chartjs.svelte"

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
</script>

<main class="grid h-screen grid-cols-12">
  <div class="col-span-3 flex h-full w-full">
    <div class="relative flex w-2/12 flex-col justify-center bg-sidebar">
      <div class="absolute top-0 w-full flex items-center justify-center bg-iconcolor px-3 py-2">
        <Logo />
      </div>
      <div class="flex flex-col items-center justify-center gap-5">
        <a href="#/"><Pdicon /></a>
        <a href="#/"><Settingsicon /></a>
        <a href="#/Analytics" class="bg-primary p-2"><Analyticicon /></a>
        <a href="#/"><Historyicon /></a>
        <a href="#/"><Templateicon /></a>
      </div>
    </div>
    <div class="relative w-10/12 bg-secondary shadow-3xl">
      <div class="absolute top-0 flex px-3 py-4  w-full items-center justify-between border-b border-sidebar">
        <h1 class="pl-4 font-medium text-primarytext">Analytics</h1>
        <span class="pr-4"><Searchicon /></span>
      </div>
      <div class="mt-14 flex border-b border-sidebar px-4 py-4">
        <div class="flex items-center justify-center">
          <Docicon />
        </div>
        <div class="space-y-1 pl-4">
          <h1>Document Analytics</h1>
          <p>Stats related to the Issued , Published , Verified and Downloaded documents</p>
        </div>
      </div>
      <div class="flex border-l-4 border-b border-sidebar border-l-iconcolor bg-primary px-4 py-4 shadow-3xl">
        <div class="flex items-center justify-center">
          <Emailicon />
        </div>
        <div class="space-y-1 pl-4">
          <h1>Email Analytics</h1>
          <p>Stats related to the delivered , sent , bounced and viewed Emails</p>
        </div>
      </div>
      <div class="flex border-b border-sidebar px-4 py-4">
        <div class="flex items-center justify-center">
          <Msgicon />
        </div>
        <div class="space-y-1 pl-4">
          <h1>SMS Analytics</h1>
          <p>Stats related to the delivered , sent , blocked SMS</p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative col-span-9 h-full bg-primary">
    <div class="absolute top-0 flex w-full border-b border-sidebar">
      <button
        class="relative flex w-1/4 items-center border-r border-sidebar px-4"
        on:click={() => {
          dropDown3 = true
        }}
      >
        <h2 class="text-white">{activeDropDown}</h2>
        <div class="ml-auto flex items-center">
          <Downarrow />
        </div>
        <div class="absolute top-[60px] left-0 z-10 flex w-64 flex-col items-start bg-secondary {dropDown3 ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown3 = false)}>
          <button class="flex w-full items-center justify-between border-b border-sidebar px-4 py-4 text-white {activeDropDown == 'Monthly' ? 'active' : ''}" on:click={() => (activeDropDown = "Monthly")}>Monthly</button>
          <button class="flex w-full items-center justify-between border-b border-sidebar px-4 py-4 text-white {activeDropDown == 'Yearly' ? 'active' : ''}" on:click={() => (activeDropDown = "Yearly")}>Yearly</button>
        </div>
      </button>
      <button class="relative flex w-1/4 items-center border-r border-sidebar px-4" on:click={() => (dropDown2 = true)}>
        <h2 class="font-mono">{currentYear}</h2>
        <div class="ml-auto flex items-center">
          <Downarrow />
        </div>
        <div class="absolute top-[60px] left-0 z-10 flex h-72 w-64 flex-col items-start overflow-auto bg-secondary {dropDown2 ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown2 = false)}>
          {#each years as year}
            <button class="flex w-full items-center justify-between border-b border-sidebar px-4 py-4 text-white {currentYear == year ? 'active' : ''}" on:click={() => selectYear(year)}>{year}</button>
          {/each}
        </div>
      </button>
      <button class="relative flex w-1/4 items-center px-4" on:click={() => (dropDown = true)}>
        {#if activeDropDown == "Monthly"}
          <h2>{currentMonth}</h2>
          <div class="ml-auto flex items-center">
            <Downarrow />
          </div>
          <div class="absolute top-[60px] left-0 z-10 flex h-72 w-64 flex-col items-start overflow-auto bg-secondary {dropDown ? 'block' : 'hidden'}" on:mouseleave={() => (dropDown = false)}>
            {#each months as month}
              <button class="flex w-full items-center justify-between border-b border-sidebar px-4 py-4 text-white {currentMonth == month ? 'active' : ''}" on:click={() => selectMonth(month)}>
                {month}
              </button>
            {/each}
          </div>
        {/if}
      </button>

      <div class="grid w-1/4 grid-cols-2 border-r border-sidebar">
        <div class="col-span-1 flex items-center justify-center border-r border-sidebar bg-addbtn py-4">
          <h5 class="text-base font-medium tracking-widest text-white">FILTER</h5>
        </div>
        <div class="col-span-1 flex items-center justify-center bg-iconcolor py-4">
          <h5 class="text-base font-medium tracking-widest text-white">EXPORT</h5>
        </div>
      </div>
    </div>
    <div class="mt-14 flex flex-col gap-4 py-4">
      <ChartApexcharts {activeDropDown} {currentMonth} {currentYear} />
      <!-- <ChartChartjs {activeDropDown} {currentMonth} {currentYear} /> -->
    </div>
    <div class="grid grid-cols-4 gap-4 px-4 pt-6">
      <Card value="Email Sent" />
      <Card2 value="Email Opened" stat={93} />
      <Card3 value="Email Bounced" stat={23} />
      <Card4 value="Email Delivered" stat={8} />
    </div>
  </div>
</main>
