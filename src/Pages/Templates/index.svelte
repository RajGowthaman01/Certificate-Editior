<script>
  import Navbar from "../../Components/Navbar.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import PublishHeader from "../PublishDoc/Components/PublishHeader.svelte"
  import Metadata2 from "./Components/Metadata2.svelte"
  import RoundedPlus from "../FileTemplateEditor/svgIcons/RoundedPlus.svelte"
  import ReceiverDetails from "./Components/ReceiverDetails.svelte"
  import Docdetails from "./Components/Docdetails.svelte"
  import Issuerdetails from "./Components/Issuerdetails.svelte"
  import DownArrow from "../../svgicons/DownArrow.svelte"
  import UpArrow1 from "../../svgicons/UpArrow1.svelte"
  import DownArrow1 from "../../svgicons/DownArrow1.svelte"

  let sections = [
    {
      id: 0,
      Title: "Document Metadata",
      icon: Docicon,
      Content: "This option supports the view and edit the document metadata fields",
      active: true,
    },
  ]
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

  let templateSections = [
    {
      id: 0,
      Title: "Receiver Details",
      Component: ReceiverDetails,
      Active: true,
    },
    {
      id: 1,
      Title: "Document Details",
      Component: Docdetails,
      Active: false,
    },
    {
      id: 2,
      Title: "Issuer Details",
      Component: Issuerdetails,
      Active: false,
    },
    {
      id: 3,
      Title: "Add Section",
      icon: RoundedPlus,
      Active: false,
    },
  ]
  const changeActiveSection = (id) => {
    console.log(id)
    templateSections = templateSections.map((templateSections) => {
      templateSections.Active = false
      if (templateSections.id === id) {
        templateSections.Active = true
      }
      return templateSections
    })
    console.log(templateSections)
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
  <div class="relative col-span-9 h-full bg-Analytics-primary flex items-center justify-center w-full">
    <PublishHeader />

    <div class="flex flex-col space-y-4 w-full items-center h-full justify-start pt-20">
      <div class="relative flex w-4/5 flex-col rounded-md  p-4">
        {#each templateSections as sections (sections.id)}
          <div class="space-y-2 border-b border-textGray/50 pb-4 pt-4 first:pt-0 last:border-none last:pb-0">
            <div class="inline-flex w-full items-center justify-center">
              <h1 class="text-sm font-bold text-Analytics-secondarytext">{sections.Title}</h1>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              {#if sections.Title != "Add Section"}
                <span class="ml-auto cursor-pointer" on:click={() => changeActiveSection(sections.id)}>
                  <svelte:component this={sections.Active ? UpArrow1 : DownArrow} class="h-6 w-6 stroke-Analytics-secondarytext" />
                </span>
              {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="ml-auto cursor-pointer" on:click={() => changeActiveSection(sections.id)}>
                  <RoundedPlus class="h-6 w-6 stroke-Analytics-secondarytext" />
                </span>
              {/if}
            </div>
            {#if sections.Active}
              <svelte:component this={sections.Component} />
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- <TemplateHeader on:click={() => (activeComponent = Metadatajson)} on:displayform={() => (activeComponent = Metadata2)} /> -->
    <!-- <svelte:component this={activeComponent} on:dispatchData={getData} {data} /> -->
    <!-- 
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
    </div> -->
  </div>
</main>

<style lang="postcss">
  /* .footer-btn {
    @apply w-full py-3 text-base font-medium tracking-wider text-white;
  } */
</style>
