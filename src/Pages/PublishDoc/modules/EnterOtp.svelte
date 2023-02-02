<script>
  import LoadingScreen from "../Components/loadingScreen.svelte"
  export let loadScreen = false
  setTimeout(() => {
    loadScreen = false
  }, 1000)
</script>

<div class="pb-5 space-y-3" id="OTP">
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm font-semibold">OTP</span>
      </div>
      <input type="text" class="pl-12 w-full block rounded-md border-lightGray bg-lightGray focus:bg-darkGray focus:border-primary_blue focus:ring-primary_blue text-white sm:text-sm" />
    </div>
    <button class="btn" on:click={() => (loadScreen = true)}>Continue</button>
  {/if}
</div>
