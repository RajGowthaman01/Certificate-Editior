<script>
  import DropdownArrow from "../../FileTemplateEditor/svgIcons/DropdownArrow.svelte"
  let DocType = ["Sample1", "Sample3", "Certificate of appreciation", "Certificate of Completion", "Document Ride", "Bluespire"]
  let activeDocType = "Sample1"
  let dropDown = false
</script>

<div class="col-span-1 pl-28 space-y-7">
  <h1 class="text-4xl font-medium text-Analytics-secondarytext">Document Template</h1>
  <p class="text-xs font-normal leading-relaxed tracking-wider text-Analytics-primarytext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores illo ipsum voluptatem mollitia ut labore exercitationem pariatur totam. Iusto.ut labore exercitationem pariatur totam. Iusto.</p>
</div>
<div class="col-span-1 pl-20">
  <div class="group relative w-full">
    <button
      on:click={() => {
        dropDown = !dropDown
      }}
      class="flex h-12 w-3/4 items-center justify-between rounded-md border-2 border-gray2 bg-Analytics-secondary px-3 text-sm font-bold text-textGray focus:border-primary_blue focus:outline-none focus:ring-primary_blue"
    >
      {activeDocType}
      <DropdownArrow />
    </button>

    <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-14 z-10 w-3/4 rounded-md overflow-hidden border-2 border-primary_blue font-bold text-textGray">
      {#each DocType as DocType}
        <option class="option-class border-Analytics-sidebar bg-Analytics-secondary">
          {DocType}
        </option>
      {/each}
    </div>
  </div>
</div>
