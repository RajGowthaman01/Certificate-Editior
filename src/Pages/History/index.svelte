<script>
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import AnalyticHeader from "../Analytics/Components/AnalyticHeader.svelte"
  import Table from "./Components/Table.svelte"

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

<svelte:head>
  <title>History</title>
</svelte:head>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <SecondSidebar {sections} title="History" />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <AnalyticHeader />
    <div class="mt-12">
      <Table />
    </div>
  </div>
</main>
