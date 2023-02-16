<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  import { fade } from "svelte/transition"
  import { tweened } from "svelte/motion"
  import PublishHeader from "./Components/PublishHeader.svelte"
  import DocumentUpload from "./Components/DocumentUpload.svelte"
  import DocumentTemplate from "./Components/DocumentTemplate.svelte"
  import DocumentId from "./Components/DocumentID.svelte"
  import SecondSidebar from "../../Components/SecondSidebar.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"
  import Navbar from "../../Components/Navbar.svelte"
  import DocumentPreview from "./Components/DocumentPreview.svelte"
  import DocumentMetadata from "./Components/DocumentMetadata.svelte"
  import SignPlacement from "./Components/SignPlacement.svelte"
  import OtpSection from "./Components/OtpSection.svelte"
  import SelectSignClr from "./Components/SelectSignClr.svelte"
  import SignerDetails from "./Components/SignerDetails.svelte"

  let SignPortion = false
  let activeID = 1
  let width = 12.5,
    width1 = 25
  let File, KB, MB, imgHeight, imgWidth, pages

  const tweenedA = tweened(0)
  $: tweenedA.set(width)
  const tweenedB = tweened(0)
  $: tweenedB.set(width1)

  let publishSections = [
    {
      id: 1,
      Title: "Document Template",
      Content: "Choose the Document Template from the available options in the dropdown which you already created in the settings page.",
      Component: DocumentTemplate,
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
      Title: SignPortion ? "Document Signature" : "Document Preview",
      Content: SignPortion ? "Sign the Document by using the given below steps" : "The uploaded Document is previewed here.Please make sure that and move to document metadata section",
      Component: DocumentPreview,
      Active: false,
    },
    {
      id: 5,
      Title: "Document Metadata",
      Content: "Choose the document Metadata for the uploaded Document.You can also edit and change the metadata fields",
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
    SignPortion = false
    publishSections = publishSections.map((publishSections) => {
      publishSections.Active = false
      if (publishSections.id === id) {
        publishSections.Active = true
        activeID = id
        width = id * 12.5
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

  const ActivateSigncomponent = (id) => {
    SignPortion = true
    publishSections = publishSections.map((publishSections) => {
      if (publishSections.id === id) {
        publishSections.Title = "Document Signature"
        publishSections.Content = "Sign the Document by using the given below steps"
      }
      return publishSections
    })
  }

  let ActiveSignerID = 1
  let SignerSections = [
    {
      id: 1,
      // Content: "Choose the Document Template from the available options in the dropdown which you already created in the settings page.",
      Component: SignerDetails,
      Active: true,
    },
    {
      id: 2,
      // Content: "If you already have any document IDs continue with that ID. Otherwise generate new document id.",
      Component: SignPlacement,
      Active: false,
    },
    {
      id: 3,
      // Content: "Choose the Document to Upload to preview and for publishing and other processess",
      Component: SelectSignClr,
      Active: false,
    },
    {
      id: 4,
      // Content: "The uploaded Document is previewed here.Please make sure that and move to document metadata section",
      Component: OtpSection,
      Active: false,
    },
  ]

  const changeActiveSignerComponent = (id) => {
    SignerSections = SignerSections.map((SignerSections) => {
      SignerSections.Active = false
      if (SignerSections.id === id) {
        SignerSections.Active = true
        ActiveSignerID = id
        width1 = id * 25
      }
      return SignerSections
    })
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
  <div class="relative col-span-9 h-full bg-Analytics-primary border-r border-r-Analytics-sidebar">
    <PublishHeader />
    <div class="h-full col-span-9 grid grid-cols-2 px-4">
      {#each publishSections as section (section.id)}
        {#if section.Active}
          <div class:-mt-10={SignPortion} class="col-span-1 flex items-start justify-center h-full w-full flex-col">
            <div>
              <h1>{section.Title}</h1>
              <p class="pb-4 pt-2">{section.Content}</p>
            </div>
            {#if section.id == 4 && !SignPortion}
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

            {#if SignPortion}
              {#each SignerSections as section (section.id)}
                {#if section.Active}
                  <svelte:component this={section.Component} />
                {/if}
              {/each}
            {/if}
          </div>
          <div class="col-span-1 flex flex-col justify-center items-end">
            <svelte:component this={section.Component} {File} on:File={dispatchFile} {SignPortion} on:resolution={getResolution} on:pages={(e) => (pages = e.detail)} />
          </div>
        {/if}
      {/each}
    </div>

    {#if SignPortion}
      <div class="absolute bottom-24 mb-2 w-full">
        <div class="relative h-2 w-full bg-Analytics-secondary">
          <div class="absolute h-2 inset-0 bg-Analytics-iconcolor" style:width="{$tweenedB}%" />
        </div>
      </div>

      <div class="absolute bottom-14 flex w-full">
        <div class="flex w-1/4">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="w-1/2 flex items-center justify-center border-r border-r-Analytics-sidebar py-3 cursor-pointer" on:click={() => changeActiveComponent(3)}>
            <h2>CANCEL</h2>
          </div>
        </div>

        <div class="flex w-1/4 ml-auto">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class:hidden={ActiveSignerID == 1} class="w-1/2 flex items-center justify-center border-l border-l-Analytics-sidebar py-3 cursor-pointer" on:click={() => changeActiveSignerComponent(ActiveSignerID - 1)}>
            <h2>BACK</h2>
          </div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="w-1/2  flex items-center justify-center ml-auto bg-Analytics-iconcolor py-3 cursor-pointer" on:click={() => changeActiveSignerComponent(ActiveSignerID + 1)}>
            <h2>PROCEED</h2>
          </div>
        </div>
      </div>
    {/if}

    <div class="absolute bottom-12 w-full" class:opacity-25={SignPortion}>
      <div class="relative h-2 w-full bg-Analytics-secondary">
        <div class="absolute h-2 inset-0 bg-Analytics-iconcolor" style="width:{$tweenedA}%" />
      </div>
    </div>

    <div class:opacity-25={SignPortion} class="absolute bottom-0 flex w-full">
      <div class="flex w-1/4">
        <div class="w-1/2 border-r border-r-Analytics-sidebar">
          <button class="footer-btn">CANCEL</button>
        </div>
      </div>

      <div class="flex w-2/4 ml-auto">
        <div class="w-1/3 flex items-center justify-center ml-auto border-l border-l-Analytics-sidebar">
          <button on:click={() => changeActiveComponent(activeID - 1)} disabled={activeID == 1} class="footer-btn">BACK</button>
        </div>
        {#if activeID == 4}
          <div class="w-1/3 border-l border-l-Analytics-sidebar {activeID == 4 ? 'flex' : 'hidden'} bg-Analytics-addbtn">
            <button on:click={() => ActivateSigncomponent(activeID)} class="footer-btn">SIGN</button>
          </div>
        {/if}
        <div class="w-1/3 bg-Analytics-iconcolor">
          <button on:click={() => changeActiveComponent(activeID + 1)} disabled={activeID == 3} class="footer-btn">PROCEED</button>
        </div>
      </div>
    </div>
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
  .footer-btn {
    @apply w-full py-3 text-base font-medium tracking-wider text-white disabled:cursor-not-allowed;
  }
</style>
