<script>
  import Router from "svelte-spa-router"
  import routes from "./routes"
  // const changeNav = (value) => {
  //   nav = nav.filter((nav) => nav != value)
  //   nav = [activeNav, ...nav]
  //   activeNav = value
  // }
</script>

<Router {routes} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .tg-backdrop {
    pointer-events: none !important;
  }
  .tg-dialog .animate-position {
    background: white !important;
  }
  .spanLabelName {
    @apply select-none text-sm font-bold text-textGray group-focus-within:text-primary_blue;
  }
  .label-div {
    @apply absolute inset-y-0 left-3 flex items-center;
  }
  /* .inputbox {
    @apply block h-10 w-3/4 rounded-md border-none bg-lightGray text-sm text-white focus:ring-2 focus:ring-primary_blue;
  } */
  /* p {
    @apply block h-10 w-3/4 rounded-md border-none bg-lightGray text-sm text-white focus:ring-2  focus:ring-primary_blue;
  } */
  .svg-nav {
    @apply h-6 w-6 flex-shrink-0 stroke-Analytics-secondarytext;
  }
  .cardHeading {
    @apply text-center text-2xl font-bold text-textGray;
  }
  label {
    @apply text-sm font-medium tracking-wider text-white;
  }
</style>
