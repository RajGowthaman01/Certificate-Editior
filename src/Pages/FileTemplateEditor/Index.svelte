<script>
  import { slide, fade } from "svelte/transition"
  import BasicImageCard from "./Components/BasicImageCard.svelte"
  import ImageEditorMenu from "./Components/ImageEditorMenu.svelte"
  import TextEditorMenu from "./Components/TextEditorMenu.svelte"
  import IntroCard2 from "./Modules/IntroCard2/Index.svelte"
  import IntroCard1 from "./Modules/IntroCard1/Index.svelte"
  import Dark from "./svgIcons/Dark.svelte"
  let show = true
  const hideModal = () => {
    show = false
  }
</script>

<main class="dark relative flex h-screen overflow-hidden bg-darkGray font-nunito">
  <div class="h-full w-85 space-y-3 overflow-y-auto bg-[#1E1E1E] p-4">
    <BasicImageCard />
    <TextEditorMenu />
    <ImageEditorMenu />
  </div>
  {#if show}
    <div out:fade class="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#000000cc]">
      <!-- <div class="justify-start self-start">
        <Dark />
      </div> -->
      <IntroCard1 on:closeModal={hideModal} on:click={hideModal} />
      <!-- <IntroCard2 on:click={hideModal} /> -->
    </div>
  {/if}
</main>
