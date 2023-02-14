<script>
  import { createEventDispatcher } from "svelte"
  import InitIcon from "../../SignerOverlay/svg/InitIcon.svelte"
  import pdfSigning from "../../SignerOverlay/Stores/pdfSigning"
  import Signature from "../../SignerOverlay/svg/Signature.svelte"
  const dispatch = createEventDispatcher()

  const initOTP = () => {
    dispatch("init")
  }
</script>

<div class="h-auto flex justify-between flex-col">
  <div class="flex gap-3 relative">
    <Signature />
    <input bind:value={$pdfSigning.signColor.color} type="color" class="absolute right-0 w-7 top-0 h-7 rounded-full z-10 opacity-0" />
    <img class="w-7 h-7 rounded-full absolute right-0 top-0" src="https://img.favpng.com/7/23/16/color-wheel-rgb-color-model-color-gradient-complementary-colors-png-favpng-6qVjQ1RxkyK30g6yUQuZiLpQp.jpg" alt="colour circle" />
  </div>
  <!-- <div class="w-full flex justify-end">
    <button on:click={initOTP} class="btn">
      <InitIcon />
    </button>
  </div> -->
</div>
