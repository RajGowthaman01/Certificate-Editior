<script>
  import { createEventDispatcher } from "svelte"
  import { editorStore } from "../../../Stores/stores"
  const dispatch = createEventDispatcher()
  let fontLink = "https://fonts.googleapis.com/css?family=Abril Fatface"
  editorStore.update((data) => {
    data.fonts[0].fileName = fontLink
    console.log(data.fonts)
    return data
  })
  $: dispatch("FontLink", fontLink)
</script>

<textarea bind:value={fontLink} />

<style lang="postcss">
  textarea {
    @apply h-full w-full resize-none rounded-md border-none bg-[#134EEC] text-sm font-medium leading-relaxed tracking-wider text-white focus:border-primary_blue focus:ring-primary_blue;
  }
</style>
