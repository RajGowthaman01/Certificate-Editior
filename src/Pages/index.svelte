<script>
  import Router from "svelte-spa-router"
  import { wrap } from "svelte-spa-router/wrap"
  export let params
  console.log(params)
  import Navbar from "../Components/Navbar.svelte"
  import SecondSidebar from "../Components/SecondSidebar.svelte"
  import Docicon from "../svgicons/Docicon.svelte"
  import Msgicon from "../svgicons/msgicon.svelte"
  import Emailicon from "../svgicons/Emailicon.svelte"
  import Contentarea from "./Contentarea.svelte"

  let publishSections = [
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

  let analyticSections = [
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

  const prefix = "/p2b"
  const routes = {
    "/Analytics/": wrap({
      component: SecondSidebar,
      props: {
        sections: analyticSections,
        Title: "Analytics",
      },
    }),
    "/Analytics/*": wrap({
      component: SecondSidebar,
      props: {
        sections: analyticSections,
        Title: "Analytics",
      },
    }),
    "/Publish": wrap({
      component: SecondSidebar,
      props: {
        sections: publishSections,
        Title: "Publish Documents",
      },
    }),
  }
</script>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <Router {routes} {prefix} />
  </div>
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <Contentarea />
  </div>
</main>
