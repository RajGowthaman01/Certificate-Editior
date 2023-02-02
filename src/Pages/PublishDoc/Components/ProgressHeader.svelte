<script>
  let sections = [
    {
      id: 1,
      Content: "Choose Document Template",
      Active: true,
    },
  ]
</script>

<div class="flex flex-col">
  <div class="grid grid-cols-5">
    <div class="col-span-1 bg-Analytics-primary px-4 py-5 items-center space-y-1 border-l-4 border-l-Analytics-iconcolor border border-Analytics-sidebar">
      <h1>Step 1</h1>
      <h2>Choose Document Template</h2>
    </div>
    <div class="col-span-1 bg-Analytics-secondary px-4 py-5 space-y-1">
      <h1>Step 2</h1>
      <h2>Document ID</h2>
    </div>
    <div class="col-span-1 bg-Analytics-secondary px-4 py-5 border-l-2 border-Analytics-sidebar space-y-1">
      <h1>Step 3</h1>
      <h2>Document Upload</h2>
    </div>
    <div class="col-span-1 bg-Analytics-secondary px-4 py-5 border-l-2 border-Analytics-sidebar space-y-1">
      <h1>Step 4</h1>
      <h2>Document MetaData</h2>
    </div>
    <div class="col-span-1 bg-Analytics-secondary px-4 py-5 border-l-2 border-Analytics-sidebar space-y-1">
      <h1>Step 5</h1>
      <h2>Publish Document</h2>
    </div>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-base font-medium text-Analytics-primarytext;
  }
  h2 {
    @apply text-xs font-medium text-Analytics-secondarytext;
  }
</style>
