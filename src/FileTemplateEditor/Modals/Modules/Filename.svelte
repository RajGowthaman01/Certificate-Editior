<script>
  import LeftArrow from "../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  let fileName = "Certificate"
  const previousComponent = () => {
    dispatch("previous")
  }
</script>

<div class="grid grid-cols-2 gap-5">
  <div class="col-span-1 ml-20 space-y-10">
    <h1 class="text-4xl font-bold text-gray1 dark:text-white">File Name</h1>
    <p class="text-base font-normal text-gray2">Enter Your desired File Name . You cannot change your File Name once you confirm.</p>
  </div>
  <div class="col-span-1 ml-20 w-full">
    <input type="text" bind:value={fileName} class="h-12 w-3/4 rounded-md border-2 border-gray2 text-sm font-bold text-textGray shadow-sm focus:border-primary_blue focus:ring-primary_blue dark:bg-darkGray" placeholder="Certificate of Appreciation" />
  </div>
</div>

<div class="ml-auto flex cursor-pointer gap-14">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={previousComponent}>
    <LeftArrow />
  </span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class={fileName ? "" : "pointer-events-none"} on:click>
    <RightArrow />
  </span>
</div>
