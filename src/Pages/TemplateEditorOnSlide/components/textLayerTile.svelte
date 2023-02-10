<script>
  import { createEventDispatcher } from "svelte"
  import EyeClose from "../svg/eyeClose.svelte"
  import Eye from "../svg/eye.svelte"
  import Tooltip from "../shared/tooltip.svelte"
  import Text from "../svg/text.svelte"
  import ChevronRight from "../svg/chevronRight.svelte"

  let textEditSection = false
  const dispatch = createEventDispatcher()
  let editSection = false
  let active = true

  const openEdit = () => {
    editSection = !editSection
    textEditSection = false
  }
</script>

<div class:active class=" border-b border-black relative flex justify-between bg-primary px-4 ">
  <div class="flex items-center gap-3 py-2">
    <button on:click={() => (active = !active)} on:click={openEdit} on:click={() => dispatch("hideText")}>
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

  <div class="flex items-center">
    <button class:hidden={editSection} type="button" class="group relative flex h-8 w-8 items-center justify-center rounded-md" on:click>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => dispatch("hideTextProp")}>
        <div class="z-20 hidden group-hover:block">
          <Tooltip tooltip="Edit Text" top={true} />
        </div>
        <div class="relative flex stroke-[3px]">
          <ChevronRight />
        </div>
      </span>
    </button>
  </div>
</div>
