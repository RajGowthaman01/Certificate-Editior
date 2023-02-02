<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let toggleSwitchPosition = true
  const toggleSwitch = () => {
    toggleSwitchPosition = !toggleSwitchPosition
  }
  const signDoc = () => {
    dispatch("ShowImg")
  }
</script>

<div class="pb-5 space-y-3">
  <div class="flex flex-col justify-between items-start gap-3">
    <div class="flex items-center justify-center">
      <button on:click={toggleSwitch} class="w-9 mr-2 h-5 rounded-full p-1 bg-lightGray flex {toggleSwitchPosition ? 'justify-start' : 'justify-end'} items-center">
        <div class="w-3 h-3 rounded-full bg-primary_blue" />
      </button>
      {#if toggleSwitchPosition}
        <span class="text-thin text-textGray mb-1">Horizontaly Lock</span>
      {:else}
        <span class="text-thin text-textGray mb-1">Vertically Lock</span>
      {/if}
    </div>
    <button on:click={signDoc} class="btn w-20">Sign</button>
  </div>
</div>
