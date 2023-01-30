<script>
  import Deleteicon from "../svgicons/Deleteicon.svelte"
  import Editicon from "../svgicons/Editicon.svelte"
  export let value = "Sample"
  export let color = "sidebar"
  export let stat = 100
</script>

<!--card1-->
<div class="bg-{color} group col-span-1 flex justify-between border-l-4 border-card2 p-4 transition-all ease-in-out hover:bg-card2">
  <div class="flex flex-col justify-between">
    <h4 class="font-mono text-3xl font-medium tracking-wider text-white">{stat}</h4>
    <h2 class="text-sm font-medium tracking-wider text-white">{value}</h2>
  </div>
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-secondarytext group-hover:fill-white" viewBox="0 0 24 24">
      <path fill="secondarytext" d="m4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z" />
    </svg>
  </div>
</div>

<!--card2-->
<!-- <div class="group col-span-1 flex-col justify-between bg-{color} border-l-4 border-card2 p-4 transition-all ease-in-out hover:bg-card2">
  <div class="flex flex-col justify-between">
    <h4 class="font-mono text-3xl font-medium tracking-wider text-white">{stat}</h4>
  </div>
  <div class="flex items-center gap-2">
    <h2 class="text-sm font-medium tracking-wider text-white">{value}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-secondarytext" viewBox="0 0 24 24">
      <path fill="secondarytext" d="m4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z" />
    </svg>
  </div>
</div> -->
