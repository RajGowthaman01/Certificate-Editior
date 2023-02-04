<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let fontLink = "https://fonts.googleapis.com/css?family=Abril Fatface"
  $: dispatch("FontLink", fontLink)
</script>

<textarea bind:value={fontLink} />

<style lang="postcss">
  textarea {
    @apply h-full w-full resize-none rounded-md border-none bg-[#134EEC] text-sm font-medium leading-relaxed tracking-wider text-white focus:border-primary_blue focus:ring-primary_blue;
  }
</style>
