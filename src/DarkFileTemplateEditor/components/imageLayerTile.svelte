<script>
  import EyeClose from "../svg/eyeClose.svelte"
  import Eye from "../svg/eye.svelte"
  import Tooltip from "../shared/tooltip.svelte"
  let editSection = false
  import ArrowDown from "../svg/arrowDown.svelte"
  import ArrowUp from "../svg/arrowUp.svelte"
  import Image from "../svg/image.svelte"
  import ImagePropertyPanel from "./imagePropertyPanel.svelte"
  export let imageUploadedSection = false
  let textEditSection
  let imageUploaded = true
  let active = true
  const openEdit = () => {
    editSection = !editSection
    imageUploadedSection = false
    imageUploaded = !imageUploaded
  }
  const editUpload = () => {
    console.log("edit upload opened")
    imageUploadedSection = !imageUploadedSection
    imageUploaded = false
  }
</script>

<div class:active class="flex justify-between border-b border-black bg-primary px-4 ">
  <div class="flex items-center gap-3 py-2">
    <button on:click={() => (active = !active)} on:click={openEdit}>
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

  <div class:hidden={editSection} class="flex items-center">
    <button type="button" class="group relative flex h-8 w-8 items-center justify-center rounded-md transition duration-500 ease-in-out hover:translate-y-1" on:click={editUpload} on:click={() => (textEditSection = false)}>
      <span>
        {#if imageUploadedSection}
          <div class="z-20 hidden group-hover:block">
            <Tooltip tooltip="Hide Edit" left={true} />
          </div>
          <div class="relative flex">
            <ArrowUp />
          </div>
        {:else}
          <div class="z-20 hidden group-hover:block">
            <Tooltip tooltip="Edit" left={true} />
          </div>
          <ArrowDown />
        {/if}
      </span>
    </button>
  </div>
</div>
<ImagePropertyPanel {imageUploadedSection} {imageUploaded} />

<!-- <TextPropertyPanel /> -->
<style global>
  .active {
    @apply bg-secondary;
  }
</style>
