<script>
  import SignerOverlay from "./modules/SignerOverlay.svelte"
  import SignerOverlay2 from "./modules/SignerOverlay2.svelte"
  import SignerOverlay3 from "./modules/SignerOverlay3.svelte"
  import SignerOverlay4 from "./modules/SignerOverlay4.svelte"
</script>

<SignerOverlay />

<style global lang="postcss">
  .w-0\.1 {
    width: 0.1rem /* 2px */;
  }

  .btn {
    @apply flex h-8 w-8 items-center justify-center rounded-[0.375rem] bg-[#0d6efd] font-semibold text-white;
  }
</style>
