<script>
  import Downarrow from "../../svgicons/Downarrow.svelte"
  import Card from "./Components/Card.svelte"
  import ChartApexcharts from "./Components/Chart-Apexcharts.svelte"
  import ChartChartjs from "./Components/Chart-Chartjs.svelte"
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Emailsent from "../../svgicons/Emailsent.svelte"
  import Emailopen from "../../svgicons/Emailopen.svelte"
  import EmailBounce from "../../svgicons/EmailBounce.svelte"
  import Emaildeliver from "../../svgicons/Emaildeliver.svelte"
  import AnalyticHeader from "./Components/AnalyticHeader.svelte"

  let activeDropDown = "Monthly",
    currentMonth = "January",
    currentYear = 2023

  const onDateinput = (e) => {
    console.log(e.detail)
    activeDropDown = e.detail.activeDropDown
    currentMonth = e.detail.currentMonth
    currentYear = e.detail.currentYear
  }
</script>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <SecondSidebar />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary py-6">
    <AnalyticHeader on:Dateinput={onDateinput} />
    <div class="mt-14 flex flex-col gap-4 pr-4 pb-4">
      <ChartApexcharts {activeDropDown} {currentMonth} {currentYear} />
      <!-- <ChartChartjs {activeDropDown} {currentMonth} {currentYear} /> -->
    </div>
    <div class="grid grid-cols-4 gap-4 pr-4 pl-6">
      <Card value="Email Sent" icon={Emailsent} stat={100} color="iconcolor" />
      <Card value="Email Opened" icon={Emailopen} stat={93} color="card2" />
      <Card value="Email Bounced" icon={EmailBounce} stat={23} color="card3" />
      <Card value="Email Delivered" icon={Emaildeliver} stat={8} color="card4" />
    </div>
  </div>
  <!-- <div class="absolute inset-0 z-10 bg-black/75 grid grid-cols-12 h-full">
    <div class="col-span-3 flex">
      <div class="flex w-2/12 flex-col justify-center items-center gap-5">
        <div class="w-7 h-7 rounded-full border-2" />
        <div class="w-7 h-7 rounded-full border-2" />
        <div class="w-7 h-7 rounded-full border-2" />
        <div class="w-7 h-7 rounded-full border-2" />
        <div class="w-7 h-7 rounded-full border-2" />
      </div>
      <div class="w-10/12 flex flex-col text-white items-start justify-center gap-5">
        <div class="h-7">
          <h1>Publish Doc</h1>
        </div>
        <div class="h-7">
          <h1>Settings icon</h1>
        </div>
        <div class="h-7">
          <h1>Analytics icon</h1>
        </div>
        <div class="h-7">
          <h1>History icon</h1>
        </div>
        <div class="h-7">
          <h1>Template icon</h1>
        </div>
      </div>
    </div>
  </div> -->
</main>
