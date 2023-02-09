<script>
  import Navbar from "../../Components/Navbar.svelte"
  import AnalyticHeader from "../Analytics/Components/AnalyticHeader.svelte"
  import PublishSidebar from "../PublishDoc/Components/PublishSidebar.svelte"
  import Table from "./Table.svelte"
</script>

<svelte:head>
  <title>History</title>
</svelte:head>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <PublishSidebar />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <AnalyticHeader />
    <div class="mt-12">
      <Table />
    </div>
  </div>
</main>
