<script>
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import HistoryHeader2 from "./Components/HistoryHeader2.svelte"
  import Pagination from "./Components/Pagination.svelte"
  import Table3 from "./Components/Table3.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"

  let sections = [
    {
      id: 0,
      Title: "Document History",
      icon: Docicon,
      Content: "This option supports the stats related to the Published documents",
      active: true,
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
    <!-- <AnalyticHeader /> -->
    <!-- <HistoryHeader /> -->
    <HistoryHeader2 />
    <div class="p-4">
      <!-- <Table /> -->
      <!-- <Table2 /> -->
      <Table3 />
    </div>
    <Pagination />
  </div>
</main>
