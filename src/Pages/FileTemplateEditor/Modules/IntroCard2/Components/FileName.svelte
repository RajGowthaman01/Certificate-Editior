<script>
  import Modal from "../../../Stores/Modal"
  import { slide } from "svelte/transition"
  import { linear } from "svelte/easing"
</script>

<div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
  <div class="w-3/4">
    <p>Enter Your desired File Name . You cannot change your File Name once you confirm.</p>
  </div>
  <div class="w-full">
    <input type="text" bind:value={$Modal.fileName} class="h-[38px] w-2/3 rounded-md border-2 border-gray2 text-sm font-bold text-textGray shadow-sm focus:border-primary_blue focus:ring-primary_blue dark:bg-darkGray" />
  </div>
</div>
