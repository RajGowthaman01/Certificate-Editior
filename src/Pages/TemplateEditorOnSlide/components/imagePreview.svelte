<script>
  import { editorStore } from "../Stores/stores"
  let certificate
</script>

<div class="flex flex-col">
  <div class="flex space-x-2 bg-secondary px-4 py-4">
    <!-- {#if certificate}
      <div class="baseImage" id="baseImage">
        <img src="assets/images/down1.png" alt="" class="aspect-square w-24  rounded-md" />
      </div>
    {:else} -->
    <div class="baseImage" id="baseImage">
      <img src={$editorStore.baseImage.url} alt="" class="aspect-square w-24  rounded-md" />
    </div>
    <!-- {/if} -->
    <div class="mt-4 flex-auto space-y-1 w-12">
      <p class="imgProps truncate ">{$editorStore.baseImage.name}</p>
      <p class="imgProps">{$editorStore.baseImage.dimensions.w} X {$editorStore.baseImage.dimensions.h} px</p>
      <p class="imgProps">Quality: {$editorStore.baseImage.quality}</p>
    </div>
  </div>
</div>

<style lang="postcss">
  .baseImage {
    @apply h-24 w-24 flex-none rounded-md bg-transparent;
  }
  .imgProps {
    @apply text-xs font-medium text-heading;
  }
</style>
