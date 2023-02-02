<script>
  import Docicon from "../svgicons/Docicon.svelte"
  import Emailicon from "../svgicons/Emailicon.svelte"
  import Msgicon from "../svgicons/msgicon.svelte"
</script>

<div class="relative w-10/12 bg-Analytics-secondary shadow-3xl">
  <div class="absolute top-0 flex px-5 py-3  w-full items-center justify-between border-b border-Analytics-sidebar">
    <h2>Analytics</h2>
  </div>
  <div class="mt-14 flex border-b border-l-4 border-transparent border-Analytics-sidebar px-4 py-3">
    <div class="flex items-center justify-center">
      <Docicon />
    </div>
    <div class="space-y-1 pl-4">
      <h4>Document Analytics</h4>
      <p class="text-Analytics-secondarytext">Stats related to the Issued , Published , Verified and Downloaded documents</p>
    </div>
  </div>
  <div class="flex border-l-4 border-b border-Analytics-sidebar border-l-Analytics-iconcolor bg-Analytics-primary px-4 py-3 shadow-3xl">
    <div class="flex items-center justify-center">
      <Emailicon />
    </div>
    <div class="space-y-1 pl-4">
      <h4>Email Analytics</h4>
      <p class="text-Analytics-secondarytext">Stats related to the delivered , sent , bounced and viewed Emails</p>
    </div>
  </div>
  <div class="flex border-b border-l-4 border-transparent border-Analytics-sidebar px-4 py-3">
    <div class="flex items-center justify-center">
      <Msgicon />
    </div>
    <div class="space-y-1 pl-4">
      <h4>SMS Analytics</h4>
      <p class="text-Analytics-secondarytext">Stats related to the delivered , sent , blocked SMS</p>
    </div>
  </div>
</div>

<style lang="postcss">
  h4 {
    @apply text-sm font-medium tracking-wider text-white;
  }
  p {
    @apply text-xs font-medium leading-normal tracking-wider;
  }
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
</style>
