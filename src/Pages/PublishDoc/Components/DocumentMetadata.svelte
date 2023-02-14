<div class="space-y-1 w-3/4 border border-Analytics-sidebar p-4 rounded-md max-h-[488px] overflow-y-auto">
  <div class="border-b border-b-Analytics-sidebar flex flex-col gap-1">
    <h1 class="text-base text-white font-medium tracking-wider">Receiver Details</h1>
    <p class="text-xs text-Analytics-secondarytext font-medium tracking-wider pb-3">Details related to the client who receives the document</p>
  </div>
  <div class="w-full space-y-2">
    <label for="Issuer" class="text-sm text-white font-medium tracking-wider">Issued to</label>
    <input type="text" id="Issuer" placeholder="Enter issuer name" />
  </div>
  <div class="w-full space-y-2 border-b border-b-Analytics-sidebar pb-4">
    <label for="receiverField" class="text-sm text-white font-medium tracking-wider">Fieldname</label>
    <input type="text" id="receiverField" />
  </div>
  <div class="border-b border-b-Analytics-sidebar flex flex-col gap-1">
    <h1 class="text-base text-white font-medium tracking-wider">Document Details</h1>
    <p class="text-xs text-Analytics-secondarytext font-medium tracking-wider pb-3">Details related to the document</p>
  </div>
  <div class="w-full space-y-2">
    <label for="Issuer" class="text-sm text-white font-medium tracking-wider">Document Type</label>
    <input type="text" id="Issuer" placeholder="Enter Document type" />
  </div>
  <div class="w-full space-y-2 border-b border-b-Analytics-sidebar pb-4">
    <label for="receiverField" class="text-sm text-white font-medium tracking-wider">Fieldname</label>
    <input type="text" id="receiverField" />
  </div>
  <div class="border-b border-b-Analytics-sidebar flex flex-col gap-1">
    <h1 class="text-base text-white font-medium tracking-wider">Signatory Details</h1>
    <p class="text-xs text-Analytics-secondarytext font-medium tracking-wider pb-3">Details related to the perspn who is authorised to issue this document</p>
  </div>
  <div class="w-full space-y-2">
    <label for="Issuer" class="text-sm text-white font-medium tracking-wider">Signatory</label>
    <input type="text" id="Issuer" placeholder="Enter signatory name" />
  </div>
  <div class="w-full space-y-2 border-b border-b-Analytics-sidebar pb-4">
    <label for="receiverField" class="text-sm text-white font-medium tracking-wider">Fieldname</label>
    <input type="text" id="receiverField" />
  </div>
  <div class="border-b border-b-Analytics-sidebar flex flex-col gap-1">
    <h1 class="text-base text-white font-medium tracking-wider">Optional Details</h1>
    <p class="text-xs text-Analytics-secondarytext font-medium tracking-wider pb-3">Optional Details such as Expiry date and document title</p>
  </div>
  <div class="w-full space-y-2">
    <label for="Issuer" class="text-sm text-white font-medium tracking-wider">Date expired</label>
    <input type="text" id="Issuer" placeholder="Enter expiry date" />
  </div>
  <div class="w-full space-y-2 border-b border-b-Analytics-sidebar pb-4">
    <label for="receiverField" class="text-sm text-white font-medium tracking-wider">Document Title</label>
    <input type="text" id="receiverField" placeholder="Enter document title" />
  </div>
</div>

<style lang="postcss">
  input {
    @apply h-10 w-full rounded-md border-2 border-Analytics-sidebar bg-transparent text-sm  font-bold text-Analytics-primarytext placeholder:text-Analytics-secondarytext focus:border-Analytics-iconcolor focus:outline-none focus:ring-Analytics-iconcolor;
  }
</style>
