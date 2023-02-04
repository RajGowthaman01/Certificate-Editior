<script>
  export let Previous
  import { tweened } from "svelte/motion"
  import DragAndDrop from "./DragAndDrop.svelte"
  import Button2 from "./Button2.svelte"
  import Button1 from "./Button1.svelte"
  import TextArea from "./TextArea.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let width1 = 50 // upload
  let height1 = 36 //upload
  let width2 = 50 //pastelink
  let height2 = 36 //pastelink
  const tweenedA = tweened(width1) //tweened(20)
  const tweenedB = tweened(height1) //tweened(20)
  const tweenedC = tweened(width2) //tweened(20)
  const tweenedD = tweened(height2) //tweened(20)
  let uploadSec = true
  let PasteSec = true
  let activePasteComponent = Button1
  let activeUploadComponent = Button2
  const expandUpload = () => {
    activeUploadComponent = DragAndDrop
    width1 = 100
    height1 = 160
    width2 = 0
    height2 = 0
    PasteSec = false
    // dispatch("enableArrow")
  }
  const expandPaste = () => {
    console.log("paste")
    activePasteComponent = TextArea
    width2 = 100
    height2 = 160
    width1 = 0
    height1 = 0
    uploadSec = false
    dispatch("enableArrow")
  }
  $: {
    tweenedA.set(width1)
    console.log(width1)
  }
  $: tweenedB.set(height1)
  $: tweenedC.set(width2)
  $: tweenedD.set(height2)

  $: if (Previous) {
    width1 = 50 // upload
    height1 = 36 //upload
    width2 = 50 //pastelink
    height2 = 36 //pastelink
    activePasteComponent = Button1
    activeUploadComponent = Button2
    PasteSec = true
    uploadSec = true
    dispatch("Previous")
  }
</script>

<h1 class="pb-3 text-lg font-medium text-textGray">Custom Font</h1>
<p>
  {#if activePasteComponent == Button1 && activeUploadComponent == Button2}
    Choose <span>PASTE</span>
    if you have custom font link.Otherwise choose
    <span>UPLOAD</span>
    to upload your custom font file.
  {:else if activePasteComponent == TextArea}
    If you have any custom font URL, Paste that custom font link here. Otherwise Import any custom font link and paste it here.
  {:else if activeUploadComponent == DragAndDrop}
    If you have any custom font file, Drag and Drop that custom file here. Otherwise Download any Custom Font file and upload here.
  {/if}
</p>

<div class="flex {activePasteComponent == Button1 && activeUploadComponent == Button2 ? 'gap-5' : ''}">
  <div style="width:{$tweenedC}%; height:{$tweenedD}px">
    {#if PasteSec}
      <svelte:component this={activePasteComponent} on:click={expandPaste} on:FontLink />
    {/if}
  </div>
  <div style="width:{$tweenedA}%; height:{$tweenedB}px">
    {#if uploadSec}
      <svelte:component this={activeUploadComponent} on:click={expandUpload} on:File />
    {/if}
  </div>
</div>

<style lang="postcss">
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
  span {
    @apply text-base font-medium text-textGray;
  }
  p {
    @apply pb-3 text-base font-normal leading-relaxed tracking-wide text-textGray;
  }
</style>
