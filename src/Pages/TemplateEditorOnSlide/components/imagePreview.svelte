<script>
  import { editorStore } from "../Stores/stores"
  let certificate
</script>

<div class="flex flex-col">
  <div class="flex space-x-2 bg-secondary px-4 py-4">
    <div class="baseImage" id="baseImage">
      <img src={$editorStore.base.url} alt="" class="h-24 w-24 rounded-md" />
    </div>

    <div class="space-y-1 w-48">
      <p class="imgProps truncate  ">{$editorStore.base.name}</p>
      <p class="imgProps">{$editorStore.base.dimensions.w} X {$editorStore.base.dimensions.h} px</p>
      <p class="imgProps">{$editorStore.base.fileSize} KB</p>
    </div>
  </div>
</div>

<style lang="postcss">
  .baseImage {
    @apply rounded-md border-none bg-transparent;
  }
  .imgProps {
    @apply text-sm font-medium text-heading;
  }
</style>
