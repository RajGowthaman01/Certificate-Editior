<script>
  import BasicImageCard from "./Components/BasicImageCard.svelte"
  import ImageEditorMenu from "./Components/ImageEditorMenu.svelte"
  import TextEditorMenu from "./Components/TextEditorMenu.svelte"
  import IntroCard2 from "./Modules/IntroCard2/Index.svelte"
  let show = true
  const hideModal = () => {
    show = false
  }
</script>

<main
  class="dark relative flex h-screen overflow-hidden bg-darkGray font-nunito"
>
  <div class="h-full w-85 space-y-3 overflow-y-auto bg-[#1E1E1E] p-4">
    <BasicImageCard />
    <TextEditorMenu />
    <ImageEditorMenu />
  </div>
  {#if show}
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#000000cc]"
    >
      <!-- svelte-ignore missing-declaration -->
      <!-- <IntroCard1 on:closeModal={hideModal} on:click={hideModal} /> -->
      <IntroCard2 />
      <!-- <Modal8 on:click={success} /> -->
    </div>
  {/if}
</main>
