<script>
  // import NextIcon from "../svg/NextIcon.svelte"
  import LoadingScreen from "./loadingScreen.svelte"
  export let loadScreen = false
  setTimeout(() => {
    loadScreen = false
  }, 1000)
</script>

<div class="space-y-3" id="OTP">
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="flex flex-col min-h-[250px] justify-between">
      <div class="relative rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm font-semibold">OTP</span>
        </div>
        <input type="text" class="pl-12 w-full block rounded-md border-2 border-lightGray focus:bg-lightGray bg-darkGray focus:border-primary_blue focus:ring-primary_blue text-white sm:text-sm" />
      </div>
      <div class="flex w-full justify-end">
        <button class="btn" on:click={() => (loadScreen = true)}>
          <!-- <NextIcon /> -->
        </button>
      </div>
    </div>
  {/if}
</div>
