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

<!-- <div class="absolute inset-0 z-10 bg-black/75 grid grid-cols-12 h-full">
    <div class="col-span-3 flex">
      <div class="flex w-2/12 flex-col justify-center" />
      <div class="w-10/12 flex flex-col text-white items-center justify-center gap-5">
        <div class="h-7">
          <h1>Publish Doc</h1>
        </div>
        <div class="h-7">
          <h1>Settings icon</h1>
        </div>
        <div class="h-7">
          <h1>Analytics icon</h1>
        </div>
        <div class="h-7">
          <h1>History icon</h1>
        </div>
        <div class="h-7">
          <h1>Template icon</h1>
        </div>
      </div>
    </div>
  </div> -->
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
    @apply block h-10 w-3/4 rounded-md border-none bg-lightGray text-sm text-white focus:ring-2  focus:ring-primary_blue;
  }
  .svg-nav {
    @apply h-7 w-7 flex-shrink-0 stroke-secondarytext;
  }
  p {
    @apply text-xs font-medium leading-relaxed tracking-wider text-secondarytext;
  }
  h1 {
    @apply text-base font-medium tracking-wider text-white;
  }
  h2 {
    @apply text-lg font-medium tracking-wider text-white;
  }
  label {
    @apply text-sm font-medium tracking-wider text-white;
  }
  input::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  .active {
    @apply border-l-4 border-r border-l-iconcolor bg-primary;
  }
</style>
