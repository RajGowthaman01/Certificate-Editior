<script>
  import Index from "./Pages/FileTemplateEditor/Index.svelte"
  import Index2 from "./Pages/DarkFileTemplateEditor/Index.svelte"
  let showIndex = false,
    showIndex1 = false,
    showBtn = true
  $: if (showIndex || showIndex1) {
    showBtn = false
  }
</script>

<main>
  {#if showBtn}
    <div class="mx-auto flex h-screen w-2/4 items-center justify-between">
      <button on:click={() => (showIndex = true)} class="rounded-md bg-blue-500 px-2 py-1 font-semibold text-white">KARTHI</button>
      <button on:click={() => (showIndex1 = true)} class="rounded-md bg-blue-500 px-2 py-1 font-semibold text-white">VENKATESH</button>
    </div>
  {/if}
  {#if showIndex}
    <Index />
  {/if}
  {#if showIndex1}
    <h1>VENKATESH</h1>
    <Index2 />
  {/if}
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
