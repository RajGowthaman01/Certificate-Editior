<script>
  import Index from "./FileTemplateEditor/index.svelte"
</script>

<main>
  <Index />
</main>

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
</style>
