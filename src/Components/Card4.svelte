<script>
  import Deleteicon from "../svgicons/Deleteicon.svelte"
  import Editicon from "../svgicons/Editicon.svelte"
  export let value = "Sample"
  export let color = "sidebar"
  export let stat = 100
</script>

<!--card1-->
<div class="bg-{color} group col-span-1 flex justify-between border-l-4 border-card4 p-4 transition-all ease-in-out hover:bg-card4">
  <div class="flex flex-col justify-between">
    <h4 class="font-mono text-3xl font-medium tracking-wider text-white">{stat}</h4>
    <h2 class="text-sm font-medium tracking-wider text-white">{value}</h2>
  </div>
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-secondarytext group-hover:fill-white" viewBox="0 0 24 24">
      <path fill="secondarytext" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5l-8-5m13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41l-4.75 4.75" />
    </svg>
  </div>
</div>

<!--card2-->
<!-- <div class="col-span-1 h-24 bg-{color} group flex-col justify-between border-l-4 border-card4 p-4 transition-all ease-in-out hover:bg-card4">
  <div class="flex flex-col justify-between">
    <h4 class="font-mono text-3xl font-medium tracking-wider text-white">{stat}</h4>
  </div>
  <div class="flex items-center gap-2">
    <h2 class="text-sm font-medium tracking-wider text-white">{value}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-secondarytext" viewBox="0 0 24 24">
      <path fill="secondarytext" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5l-8-5m13.75 14.16l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41l-4.75 4.75" />
    </svg>
  </div>
</div> -->
