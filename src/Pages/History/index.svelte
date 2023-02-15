<script>
  import Navbar from "../../Components/Navbar.svelte"
  import Pagination from "./Components/Pagination.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import HistoryHeader5 from "./Components/HistoryHeader5.svelte"
  import Table4 from "./Components/Table4.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  let sections = [
    {
      id: 0,
      Title: "Document History",
      icon: Docicon,
      Content: "This option supports the Document History",
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
    <HistoryHeader5 />
    <div class="p-4">
      <Table4 />
    </div>
    <Pagination />
  </div>
</main>
