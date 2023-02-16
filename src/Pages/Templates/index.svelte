<script>
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Metadata2 from "./Components/Metadata2.svelte"
  import Metadatajson from "./Components/Metadatajson.svelte"
  import TemplateHeader from "./Components/TemplateHeader.svelte"

  let sections = [
    {
      id: 0,
      Title: "Document Metadata",
      icon: Docicon,
      Content: "This option supports the view and edit the document metadata fields",
      active: true,
    },
  ]
  let activeComponent = Metadata2
  let data = {
    receiver: {
      name: "John Doe",
      location: "Chennai",
      dob: "1990-01-01",
      "candidate id": "CAN/22/1234",
    },
    document: {
      type: "Employee Offer Letter",
      "processed by": "Jane Doe",
      "valid for": "3 months",
      "remuneration offered": "8 LPA",
      "other perks": "Standard",
    },
    issuer: {
      signatory: "Alice Zane, HR Manager",
      "employee id": "EMP/15/4231",
      location: "Chennai",
    },
  }
  const getData = (e) => {
    data = e.detail
  }
</script>

<svelte:head>
  <title>Metadata Template Editor</title>
</svelte:head>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <SecondSidebar {sections} title="Templates" />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary flex items-center justify-center">
    <TemplateHeader on:click={() => (activeComponent = Metadatajson)} on:displayform={() => (activeComponent = Metadata2)} />

    <svelte:component this={activeComponent} on:dispatchData={getData} {data} />

    <div class="absolute bottom-0 flex w-full border-t border-t-Analytics-sidebar">
      <div class="flex w-1/4">
        <div class="w-1/2 border-r border-r-Analytics-sidebar">
          <button class="footer-btn">CANCEL</button>
        </div>
      </div>

      <div class="flex w-1/4 ml-auto">
        <div class="w-1/2 flex items-center justify-center ml-auto border-l border-l-Analytics-sidebar">
          <button class="footer-btn">BACK</button>
        </div>
        <div class="w-1/2 bg-Analytics-iconcolor">
          <button class="footer-btn">PROCEED</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="postcss">
  .footer-btn {
    @apply w-full py-3 text-base font-medium tracking-wider text-white;
  }
</style>
