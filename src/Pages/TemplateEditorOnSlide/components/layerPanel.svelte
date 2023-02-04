<script>
  import ImageLayerTile from "./imageLayerTile.svelte"
  import TextLayerTile from "./textLayerTile.svelte"
  import ImagePreview from "./imagePreview.svelte"
  import ImagePropertyPanel from "./imagePropertyPanel.svelte"
  import TextPropertyPanel from "./textPropertyPanel.svelte"
  import { imageStore, textStore } from "../Stores/stores"
  let imageUploadedSection = false
  let textEditSection = false
  let activeComponent
</script>

<div class="flex h-[screen] min-w-[330px] flex-col border-r border-black bg-certificateSection">
  <ImagePreview />
  <div class="flex py-2 px-4">
    <div class="flex font-medium text-heading">Layers</div>
  </div>
  <div class="overflow-y-auto overflow-x-hidden	">
    <div class="mb-20 flex flex-col ">
      <!-- {#each Array(30) as _, index (index)} -->
      {#each $imageStore as image (image)}
        <ImageLayerTile on:hideImageProp={() => (imageUploadedSection = !imageUploadedSection)} on:hideImage={() => (imageUploadedSection = false)} on:click={() => (activeComponent = ImagePropertyPanel)} />
      {/each}
      {#each $textStore as text (text)}
        <TextLayerTile on:hideTextProp={() => (textEditSection = !textEditSection)} on:hideText={() => (textEditSection = false)} on:click={() => (activeComponent = TextPropertyPanel)} />
      {/each}
      <!-- {/each} -->
    </div>
  </div>
</div>

<div class="flex min-w-[330px] flex-col">
  {#if activeComponent}
    <svelte:component this={activeComponent} on:FontModal {imageUploadedSection} {textEditSection} />
  {/if}
</div>
