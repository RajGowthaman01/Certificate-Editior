<script>
  import EyeClose from "../svg/eyeClose.svelte"
  import Eye from "../svg/eye.svelte"
  import Tooltip from "../shared/tooltip.svelte"
  import Image from "../svg/image.svelte"
  let editSection = false
  import UploadSection from "./imagePropertyPanel.svelte"
  import ArrowDown from "../svg/arrowDown.svelte"
  import ArrowUp from "../svg/arrowUp.svelte"
  import Edit from "../svg/edit.svelte"
  import TextPropertyPanel from "./textPropertyPanel.svelte"
  import Text from "../svg/text.svelte"
  export let textEditSection = false
  let imageUploadedSection
  let active = true

  const openEdit = () => {
    editSection = !editSection
    textEditSection = false
  }
  const editUpload = () => {
    textEditSection = !textEditSection
  }
</script>

<div class:active class="shadow-b relative flex justify-between bg-primary px-4 shadow-lg ">
  <div class="flex items-center gap-3 py-2">
    <button on:click={() => (active = !active)} on:click={openEdit} on:click={() => (imageUploadedSection = !imageUploadedSection)}>
      {#if editSection}
        <EyeClose />
      {:else}
        <Eye />
      {/if}
    </button>
    <span class="h-5 w-5 fill-heading">
      <Text />
    </span>
    <div class="text-heading">Text</div>
  </div>

  <div class:hidden={editSection} class="flex items-center">
    <button type="button" class="group relative flex h-8 w-8 items-center justify-center rounded-md transition duration-500 ease-in-out hover:translate-y-1" on:click={editUpload}>
      <span>
        {#if textEditSection}
          <div class="z-50 hidden overflow-x-visible group-hover:block">
            <Tooltip tooltip="Hide Edit" top={true} />
          </div>
          <div class="relative flex">
            <ArrowUp />
          </div>
        {:else}
          <div class="z-20 hidden group-hover:block">
            <Tooltip tooltip="Edit" top={true} />
          </div>
          <ArrowDown />
        {/if}
      </span>
    </button>
  </div>
</div>
<TextPropertyPanel {textEditSection} />
