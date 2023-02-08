<script>
  import Delete from "../svg/delete.svelte"
  import TickRounded from "../svg/tickRounded.svelte"
  let blobURL
</script>

<div class="flex min-h-screen flex-col justify-center overflow-hidden bg-[#949494] py-6">
  <div class="mx-auto w-5/12 bg-white shadow-box_Shadow ring-1 ring-gray-900/5 sm:rounded-md">
    <div class="relative flex h-[458px] w-full items-center gap-2 rounded-md bg-[#353535]">
      <img src={blobURL} alt="" class="relative aspect-auto h-full w-full overflow-hidden rounded-md" />
      <div class="absolute bottom-4 mx-auto flex w-full  flex-wrap items-center justify-between px-10">
        <div class="flex text-2xl font-bold text-primary_blue">Upload Image</div>
        <div class="flex items-center gap-2 pr-0">
          <Delete />
          <TickRounded />
        </div>
      </div>
    </div>
  </div>
</div>
