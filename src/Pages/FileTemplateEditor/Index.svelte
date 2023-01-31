<script>
  import { slide, fade } from "svelte/transition"
  import BasicImageCard from "./Components/BasicImageCard.svelte"
  import ImageEditorMenu from "./Components/ImageEditorMenu.svelte"
  import TextEditorMenu from "./Components/TextEditorMenu.svelte"
  import IntroCard2 from "./Modules/IntroCard2/Index.svelte"
  import CustomFont from "./Modules/CustomFont/Index.svelte"
  import Dark from "./svgIcons/Dark.svelte"
  let showIntroCard = false
  const hideModal = () => {
    showIntroCard = false
  }
  let showFontModal = false
  const fontModal = () => {
    showFontModal = true
  }
</script>

<main class="dark relative flex h-screen overflow-hidden bg-darkGray">
  <div class="h-full w-85 space-y-3 overflow-y-auto bg-[#1E1E1E] p-4">
    <BasicImageCard />
    <TextEditorMenu on:click={fontModal} />
    <ImageEditorMenu />
  </div>
  {#if showIntroCard}
    <div out:fade class="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#000000cc]">
      <!-- <div class="justify-start self-start">
        <Dark />
      </div> -->
      <!-- <IntroCard1 on:closeModal={hideModal} on:click={hideModal} /> -->
      <IntroCard2 on:click={hideModal} />
    </div>
  {/if}
  {#if showFontModal}
    <div out:fade class="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#000000cc]">
      <CustomFont />
    </div>
  {/if}
</main>
