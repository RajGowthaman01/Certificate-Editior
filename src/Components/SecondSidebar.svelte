<script>
  import Searchicon from "../svgicons/Searchicon.svelte"
  import Docicon from "../svgicons/Docicon.svelte"
  import Emailicon from "../svgicons/Emailicon.svelte"
  import Msgicon from "../svgicons/msgicon.svelte"
</script>

<div class="relative w-10/12 bg-secondary shadow-3xl">
  <div class="absolute inset-0 flex h-15 items-center justify-between border-b border-sidebar">
    <h1 class="pl-4 font-medium text-primarytext">Analytics</h1>
    <span class="pr-4"><Searchicon /></span>
  </div>
  <div class="mt-14 flex border-b border-l-4 border-l-transparent border-sidebar px-4 py-4">
    <div class="flex items-center justify-center">
      <Docicon />
    </div>
    <div class="space-y-1 pl-4">
      <h1>Document Analytics</h1>
      <p>Stats related to the Issued , Published , Verified and Downloaded documents</p>
    </div>
  </div>
  <div class="flex border-l-4 border-b border-sidebar border-l-iconcolor bg-primary px-4 py-4 shadow-3xl">
    <div class="flex items-center justify-center">
      <Emailicon />
    </div>
    <div class="space-y-1 pl-4">
      <h1>Email Analytics</h1>
      <p>Stats related to the delivered , sent , bounced and viewed Emails</p>
    </div>
  </div>
  <div class="flex border-b border-sidebar border-l-4 border-l-transparent px-4 py-4">
    <div class="flex items-center justify-center">
      <Msgicon />
    </div>
    <div class="space-y-1 pl-4">
      <h1>SMS Analytics</h1>
      <p>Stats related to the delivered , sent , blocked SMS</p>
    </div>
  </div>
</div>
