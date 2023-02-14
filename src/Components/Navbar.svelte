<script>
  import Analyticicon from "../svgicons/Analyticicon.svelte"
  import Historyicon from "../svgicons/Historyicon.svelte"
  import Logo from "../svgicons/logo.svelte"
  import Pdicon from "../svgicons/Pdicon.svelte"
  import Settingsicon from "../svgicons/settingsicon.svelte"
  import Templateicon from "../svgicons/Templateicon.svelte"
  import Help from "../svgicons/Help.svelte"
  // import { TourGuideClient } from "@sjmc11/tourguidejs" // JS
  import WebTour from "https://unpkg.com/webtour@1.1.0/dist/webtour.min.js"
  const wt = new WebTour()
  const steps = [
    {
      element: "#step_1",
      title: "Publish Page",
      content: "For Document Signing and Publishing",
      placement: "right-start",
    },
    {
      element: "#step_2",
      title: "Settings Page",
      content: "Edit Document Template Here",
      placement: "right-start",
    },
    {
      element: "#step_3",
      title: "Analytics Page",
      content: "Check here the Document Stats",
      placement: "right-start",
    },
    {
      element: "#step_4",
      title: "History Page",
      content: "Click here to view the history page",
      placement: "right-start",
    },
    {
      element: "#step_5",
      title: "Template Page",
      content: "Click here to view the Templates",
      placement: "right-start",
    },
  ]

  wt.setSteps(steps)
  const clickHelper = () => {
    wt.start()
  }

  // const tg = new TourGuideClient({
  //   exitOnClickOutside: false,
  // })

  // const clickHelper = () => {
  //   console.log("help")
  //   tg.start()
  // }
</script>

<!-- <div class="relative flex w-2/12 flex-col justify-center bg-Analytics-sidebar">
  <div class="absolute top-0 w-full flex items-center justify-center bg-iconcolor px-3 py-2">
    <Logo />
  </div>
  <div class="flex flex-col items-center justify-center gap-5">
    <a href="#/" data-tg-tour="Click to view Publish Page" data-tg-order="0"><Pdicon /></a>
    <a href="#/" data-tg-tour="Click to view Settings Page" data-tg-order="1"><Settingsicon /></a>
    <a href="#/Analytics" data-tg-tour="Click to view Analytics Page" data-tg-order="2" class="bg-primary p-2"><Analyticicon /></a>
    <a href="#/" data-tg-tour="Click to view History Page" data-tg-order="3"><Historyicon /></a>
    <a href="#/" data-tg-tour="Click to view Template Page" data-tg-order="99"><Templateicon /></a>
  </div>
  <div class="absolute bottom-0 w-full flex items-center justify-center px-3 py-2">
    <Help on:click={clickHelper} />
  </div>
</div> -->
<div class="relative flex w-2/12 flex-col justify-center bg-Analytics-sidebar">
  <div class="absolute top-0 w-full flex items-center justify-center bg-Analytics-iconcolor px-3 py-2">
    <Logo />
  </div>
  <div class="flex flex-col items-center justify-center gap-5">
    <a href="#/Publish" id="step_1"><Pdicon class="h-6 w-6 flex-shrink-0 stroke-Analytics-secondarytext" /></a>
    <a href="#/FileTemplateEditor" id="step_2"><Settingsicon class="h-6 w-6 flex-shrink-0 stroke-Analytics-secondarytext" /></a>
    <a href="#/Analytics" id="step_3" class="bg-Analytics-primary p-2"><Analyticicon class="h-6 w-6 flex-shrink-0 fill-Analytics-secondarytext" /></a>
    <a href="#/History" id="step_4"><Historyicon class="h-6 w-6 flex-shrink-0 text-Analytics-secondarytext" /></a>
    <a href="#/Templates" id="step_5"><Templateicon class="h-6 w-6 flex-shrink-0 stroke-Analytics-secondarytext" /></a>
  </div>
  <div class="absolute bottom-0 w-full flex items-center justify-center px-3 py-2">
    <Help on:click={clickHelper} />
  </div>
</div>
