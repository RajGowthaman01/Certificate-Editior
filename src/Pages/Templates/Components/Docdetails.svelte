<script>
  import { slide } from "svelte/transition"
  import { linear } from "svelte/easing"
</script>

<div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
  <div class="w-3/4">
    <p class="text-xs tracking-wider leading-relaxed text-textGray font-medium">Details related to the document</p>
  </div>
  <div class="w-3/4 flex items-center justify-center  gap-2">
    <label for="Issuer" class="w-1/4 text-sm text-Analytics-primarytext font-medium tracking-wider">Document Type</label>
    <input type="text" id="Issuer" placeholder="Enter document type" />
  </div>
  <div class="w-3/4 flex items-center justify-center gap-2">
    <label for="Issuer" class="w-1/4 text-sm text-Analytics-primarytext font-medium tracking-wider">Fieldname</label>
    <input type="text" id="Issuer" placeholder="Field value" />
  </div>
</div>

<style lang="postcss">
  input {
    @apply h-10 w-3/4 rounded-md border-2 border-Analytics-sidebar bg-transparent text-sm  font-bold text-Analytics-primarytext placeholder:text-xs placeholder:text-Analytics-secondarytext focus:border-Analytics-iconcolor focus:outline-none focus:ring-Analytics-iconcolor;
  }
</style>
