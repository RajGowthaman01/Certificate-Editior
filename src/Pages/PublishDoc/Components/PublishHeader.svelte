<script>
  import Formicon from "../../../svgicons/formicon.svelte"
  import Json from "../../../svgicons/json.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
</script>

<div class="absolute top-0 flex w-full border-b border-b-Analytics-sidebar">
  <div class="flex w-1/4 ml-auto">
    <div class="w-1/2 flex gap-7 items-center justify-center">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          dispatch("displayform")
        }}
      >
        <Formicon class="w-7 h-7 text-Analytics-secondarytext cursor-pointer" />
      </span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click>
        <Json class="w-7 h-7 text-Analytics-secondarytext cursor-pointer" />
      </span>
    </div>
    <div class="w-1/2 ml-auto flex items-center justify-center bg-Analytics-iconcolor py-3">
      <h2>HELP</h2>
    </div>
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
</style>
