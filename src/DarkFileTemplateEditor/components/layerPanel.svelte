<script>
  import ImageLayerTile from "./imageLayerTile.svelte"
  import TextLayerTile from "./textLayerTile.svelte"
  import ImagePreview from "./imagePreview.svelte"
</script>

<div class="flex h-screen min-w-[330px] flex-col border-r border-black bg-certificateSection " style="box-shadow:30px 0px 5px -5px rgb(0,0,0)">
  <ImagePreview />
  <div class="flex py-2 px-4">
    <div class="flex font-medium text-heading">Layers</div>
  </div>
  <div class="overflow-y-auto overflow-x-hidden	">
    <div class="mb-20 flex  flex-col">
      <!-- {#each Array(30) as _, index (index)} -->
      <ImageLayerTile />
      <TextLayerTile />
      <!-- {/each} -->
    </div>
  </div>
</div>
