<script>
  import { tweened } from "svelte/motion"
  import PublishHeader from "./Components/PublishHeader.svelte"
  import DocumentUpload from "./Components/DocumentUpload.svelte"
  import DocumentTemplate2 from "./Components/DocumentTemplate2.svelte"
  import DocumentId from "./Components/DocumentID.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"
  import Navbar from "../../Components/Navbar.svelte"
  import DocumentPreview from "./Components/DocumentPreview.svelte"
  import DocumentMetadata from "./Components/DocumentMetadata.svelte"
  import SignerOverlay from "../SignerOverlay/index.svelte"

  let activeID = 1
  let width = 20
  let File, KB, MB, imgHeight, imgWidth, pages
  const tweenedA = tweened(0)
  $: tweenedA.set(width)

  let publishSections = [
    {
      id: 1,
      Title: "Document Template",
      Content: "Choose the Document Template from the available options in the dropdown which you already created in the settings page.",
      Component: DocumentTemplate2,
      Active: true,
    },
    {
      id: 2,
      Title: "Document ID",
      Content: "If you already have any document IDs continue with that ID. Otherwise generate new document id.",
      Component: DocumentId,
      Active: false,
    },
    {
      id: 3,
      Title: "Document Upload",
      Content: "Choose the Document to Upload to preview and for publishing and other processess",
      Component: DocumentUpload,
      Active: false,
    },
    {
      id: 4,
      Title: "Document Preview",
      Content: "The uploaded Document is previewed here.Please make sure that and move to document metadata section",
      Component: DocumentPreview,
      Active: false,
    },
    {
      id: 5,
      Title: "Document Metadata",
      Content: "The uploaded Document is previewed here.Please make sure that and move to document metadata section",
      Component: DocumentMetadata,
      Active: false,
    },
  ]

  let sections = [
    {
      id: 0,
      Title: "Single Document Publishing",
      icon: Docicon,
      Content: "This option supports single document publishing",
      active: true,
    },
    {
      id: 1,
      Title: "Bulk Upload",
      icon: Msgicon,
      Content: "If you want to upload multiple documents at once, prefer this option",
      active: false,
    },
    {
      id: 3,
      Title: "Document Status",
      icon: Emailicon,
      Content: "Stats related to the status of the Document Id whether its pending or published",
      active: false,
    },
    {
      id: 4,
      Title: "Revoke Document",
      icon: Msgicon,
      Content: "Revoke any document that is already published",
      active: false,
    },
  ]

  const changeActiveComponent = (id) => {
    publishSections = publishSections.map((publishSections) => {
      publishSections.Active = false
      if (publishSections.id === id) {
        publishSections.Active = true
        activeID = id
        width = id * 20
        console.log(width)
      }
      return publishSections
    })
  }

  const dispatchFile = (e) => {
    File = e.detail
    KB = (File.size / 1024).toFixed(2)
    if (KB > 1000) {
      MB = (KB / 1024).toFixed(2)
      KB = ""
    }
    changeActiveComponent(activeID + 1)
  }

  const getResolution = (e) => {
    imgHeight = e.detail.imgHeight
    imgWidth = e.detail.imgWidth
  }
</script>

<svelte:head>
  <title>Publish Document</title>
</svelte:head>

<main class="grid h-screen grid-cols-12">
  <div class="col-span-3 flex">
    <Navbar />
    <SecondSidebar {sections} title="Publish Documents" />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <PublishHeader />
    <div class="h-full col-span-9 grid grid-cols-2">
      {#each publishSections as section (section.id)}
        {#if section.Active}
          <!-- <div class="col-span-1 flex items-start justify-center h-full flex-col pl-10">
            <h1>{section.Title}</h1>
            <p class="pt-4">{section.Content}</p>
            {#if section.id == 4}
              <div class="flex gap-3 items-center pt-3">
                <img src={File.type == "application/pdf" ? "assets/images/pdficon.png" : "assets/images/imageicon.png"} alt="pdfIcon" />
                <div class="flex flex-col gap-1">
                  <h4 class="text-base font-medium text-Analytics-secondarytext">{File.name}</h4>
                  <div class="flex gap-4">
                    <h4 class="text-xs font-medium text-Analytics-secondarytext">{KB ? `${KB}KB` : `${MB}MB`}</h4>
                    <h4 class="text-xs font-medium text-Analytics-secondarytext">
                      {File.type == "application/pdf" ? `${pages} Pages` : `${imgWidth} x ${imgHeight} px`}
                    </h4>
                  </div>
                </div>
              </div>
            {/if}
          </div> -->
          <SignerOverlay />
          <svelte:component this={section.Component} {File} on:File={dispatchFile} on:resolution={getResolution} on:pages={(e) => (pages = e.detail)} />
        {/if}
      {/each}
    </div>
    <div class="absolute bottom-24 mb-2 w-full">
      <div class="relative h-2 w-full bg-Analytics-secondary">
        <div class="absolute h-2 inset-0 bg-Analytics-iconcolor" style="width:25%" />
      </div>
    </div>

    <div class="absolute bottom-14 flex w-full">
      <div class="flex w-1/4">
        <div class="w-1/2 flex items-center justify-center border-r border-r-Analytics-sidebar py-3 cursor-pointer">
          <h2>CANCEL</h2>
        </div>
      </div>

      <div class="flex w-1/4 ml-auto">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-full flex items-center justify-center border-l border-l-Analytics-sidebar py-3 cursor-pointer" on:click={() => changeActiveComponent(activeID - 1)}>
          <h2>BACK</h2>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-full flex items-center justify-center bg-Analytics-iconcolor py-3 cursor-pointer" on:click={() => changeActiveComponent(activeID + 1)}>
          <h2>PROCEED</h2>
        </div>
      </div>
    </div>
    <div class="absolute bottom-12 w-full opacity-25">
      <div class="relative h-2 w-full bg-Analytics-secondary">
        <div class="absolute h-2 inset-0 bg-Analytics-iconcolor" style="width:{$tweenedA}%" />
      </div>
    </div>

    <div class="absolute bottom-0 flex w-full opacity-25">
      <div class="flex w-1/4">
        <div class="w-1/2 flex items-center justify-center border-r border-r-Analytics-sidebar py-3 cursor-pointer">
          <h2>CANCEL</h2>
        </div>
      </div>

      <div class="flex w-2/4 ml-auto">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-1/3 flex items-center justify-center border-l border-l-Analytics-sidebar py-3 cursor-pointer" on:click={() => changeActiveComponent(activeID - 1)}>
          <h2>BACK</h2>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-1/3 flex items-center justify-center border-l border-l-Analytics-sidebar py-3 cursor-pointer bg-Analytics-addbtn" on:click={() => changeActiveComponent(activeID - 1)}>
          <h2>SIGN</h2>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-1/3 flex items-center justify-center bg-Analytics-iconcolor py-3 cursor-pointer" on:click={() => changeActiveComponent(activeID + 1)}>
          <h2>PROCEED</h2>
        </div>
      </div>
    </div>

    <!-- <div class="absolute flex justify-center w-full inset-x-0 bottom-3">
      <div class="flex items-center space-x-5">
        svelte-ignore a11y-click-events-have-key-events
        <span class={activeID == 1 ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"} on:click={() => changeActiveComponent(activeID - 1)}><Leftarrow /></span>
        {#each publishSections as sections (sections.id)}
          svelte-ignore a11y-click-events-have-key-events
          <div on:click={() => changeActiveComponent(sections.id)} class={sections.Active ? "dots-active" : "dots"} />
        {/each}
        svelte-ignore a11y-click-events-have-key-events
        <span class={activeID == 5 ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"} on:click={() => changeActiveComponent(activeID + 1)}><RightArrow /></span>
      </div>
    </div> -->
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-4xl font-medium text-Analytics-secondarytext;
  }
  p {
    @apply w-3/4 text-xs font-normal leading-relaxed tracking-wider text-Analytics-primarytext;
  }
  .dots-active {
    @apply block h-4 w-4 cursor-pointer rounded-full bg-Analytics-iconcolor hover:bg-indigo-900;
  }
  .dots {
    @apply block h-4 w-4 cursor-pointer rounded-full bg-Analytics-sidebar hover:bg-indigo-900;
  }
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
</style>
