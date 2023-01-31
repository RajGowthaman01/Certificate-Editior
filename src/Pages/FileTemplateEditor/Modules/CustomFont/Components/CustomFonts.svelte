<script>
  import { tweened } from "svelte/motion"
  import DragAndDrop from "./DragAndDrop.svelte"
  import Button2 from "./Button2.svelte"
  import Button1 from "./Button1.svelte"
  import TextArea from "./TextArea.svelte"
  let width1 = 40
  let height1 = 36
  let width2 = 40
  let height2 = 36
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
    width1 = 90
    height1 = 160
    PasteSec = false
  }
  const expandPaste = () => {
    activePasteComponent = TextArea
    width2 = 90
    height2 = 160
    uploadSec = false
  }
  $: tweenedA.set(width1)
  $: tweenedB.set(height1)
  $: tweenedC.set(width2)
  $: tweenedD.set(height2)
</script>

<div>
  <h1 class="pb-3 text-lg font-medium text-textGray">Custom Font</h1>
  <p class="pb-12 text-base font-normal leading-relaxed tracking-wide text-textGray">
    Choose <span class="text-base font-medium text-textGray">PASTE</span>
    if you have custom font link.Otherwise choose
    <span class="text-base font-medium text-textGray">UPLOAD</span>
    to upload your custom font file.
  </p>
  {#if uploadSec}
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <div class="absolute right-5 bottom-5" style="width:{$tweenedA}%; height:{$tweenedB}px">
      <svelte:component this={activeUploadComponent} on:click={expandUpload} />
    </div>
  {/if}
  {#if PasteSec}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="absolute left-5 bottom-5" style="width:{$tweenedC}%; height:{$tweenedD}px">
      <svelte:component this={activePasteComponent} on:click={expandPaste} />
    </div>
  {/if}
</div>
