<script>
  import Navbar from "../../Components/Navbar.svelte"
  import PublishHeader from "../PublishDoc/Components/PublishHeader.svelte"
  import PublishSidebar from "../PublishDoc/Components/PublishSidebar.svelte"
</script>

<svelte:head>
  <title>Publish Document</title>
</svelte:head>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <PublishSidebar />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <PublishHeader />
  </div>
</main>
