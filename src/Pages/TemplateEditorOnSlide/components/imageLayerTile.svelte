<script>
  import EyeClose from "../svg/eyeClose.svelte"
  import Eye from "../svg/eye.svelte"
  import Tooltip from "../shared/tooltip.svelte"
  import Image from "../svg/image.svelte"
  export let imageUploadedSection = false
  import { createEventDispatcher } from "svelte"
  import ChevronRight from "../svg/chevronRight.svelte"
  import { toggle_class } from "svelte/internal"

  const dispatch = createEventDispatcher()
  let textEditSection
  let editSection = false
  let imageUploaded = true
  let active = true
  const openEdit = () => {
    editSection = !editSection
    imageUploadedSection = false
    imageUploaded = !imageUploaded
  }
</script>

<div class:active class="flex justify-between border-b border-black bg-primary px-4 ">
  <div class="flex items-center gap-3 py-2">
    <button on:click={() => (active = !active)} on:click={openEdit} on:click={() => dispatch("hideImage")}>
      {#if editSection}
        <EyeClose />
      {:else}
        <Eye />
      {/if}
    </button>
    <div class="text-heading">
      <Image />
    </div>
    <div class="text-heading">Image</div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class:hidden={editSection} class="flex items-center">
    <button id="chevRight" type="button" class="group relative flex h-8 w-8 items-center justify-center" on:click>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => dispatch("hideImageProp")}>
        <div class="z-20 hidden group-hover:block">
          <Tooltip tooltip="Hide Edit" top={true} />
        </div>
        <div class="relative flex stroke-[3px]">
          <ChevronRight />
        </div>
      </span>
    </button>
  </div>
</div>

<style global lang="postcss">
  .active {
    @apply bg-secondary;
  }
</style>
