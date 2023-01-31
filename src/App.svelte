<script>
  import Router from "svelte-spa-router"
  import routes from "./routes"
  const changeNav = (value) => {
    nav = nav.filter((nav) => nav != value)
    nav = [activeNav, ...nav]
    activeNav = value
  }
</script>

<Router {routes} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .spanLabelName {
    @apply select-none text-sm font-bold text-textGray group-focus-within:text-primary_blue;
  }

  .label-div {
    @apply absolute inset-y-0 left-3 flex items-center;
  }
  .inputbox {
    @apply block h-10 w-3/4 rounded-md border-none bg-lightGray text-sm text-white focus:ring-2 focus:ring-primary_blue;
  }
  p {
    @apply text-sm font-normal text-textGray;
  }
  .cardHeading {
    @apply text-center text-2xl font-bold text-textGray;
  }
  h4 {
    @apply text-sm font-bold text-textGray;
  }
  h5 {
    @apply text-sm font-thin text-textGray;
  }
  @layer base {
    @font-face {
      font-family: "Roboto";
      src: url("/Fonts/Roboto-LightItalic.ttf") format("truetype");
    }
  }
</style>
