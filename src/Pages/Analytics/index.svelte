<script>
  import Card from "./Components/Card.svelte"
  import ChartApexcharts from "./Components/Chart-Apexcharts.svelte"
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Emailsent from "../../svgicons/Emailsent.svelte"
  import Emailopen from "../../svgicons/Emailopen.svelte"
  import EmailBounce from "../../svgicons/EmailBounce.svelte"
  import Emaildeliver from "../../svgicons/Emaildeliver.svelte"
  import AnalyticHeader from "./Components/AnalyticHeader.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"

  let activeDropDown = "Monthly",
    currentMonth = "January",
    currentYear = 2023

  const onDateinput = (e) => {
    console.log(e.detail)
    activeDropDown = e.detail.activeDropDown
    currentMonth = e.detail.currentMonth
    currentYear = e.detail.currentYear
  }

  let sections = [
    {
      id: 0,
      Title: "Document Analytics",
      icon: Docicon,
      Content: "Stats related to the Issued , Published , Verified and Downloaded documents",
      active: true,
    },
    {
      id: 1,
      Title: "Email Analytics",
      icon: Emailicon,
      Content: "Stats related to the delivered , sent , bounced and viewed Emails",
      active: false,
    },
    {
      id: 3,
      Title: "SMS Analytics",
      icon: Msgicon,
      Content: "Stats related to the delivered , sent , blocked SMS",
      active: false,
    },
  ]
</script>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <SecondSidebar {sections} title="Analytics" />
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
</main>
