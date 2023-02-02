<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte"
  import Image from "../svg/image.svelte"
  import Save from "../svg/save.svelte"
  import UserUploadImage from "./UserUploadImage.svelte"
  onMount(() => {
    console.log("ImageUpload - onMount")
  })

  onDestroy(() => {
    console.log("ImageUpload - onDestroy")
  })

  beforeUpdate(() => {
    console.log("ImageUpload - beforeUpdate")
  })

  afterUpdate(() => {
    console.log("ImageUpload - afterUpdate")
  })

  export const dispatchComponent = () => {
    console.log("dispatched")
    toolComponent = UserUploadImage
  }
  export let toolComponent = UserUploadImage
  const selectTool = (Component) => {
    toolComponent = Component
  }
</script>

<div class="flex">
  <div class="left-0 top-0 grid min-w-[330px] max-w-[330px] grid-cols-3 justify-end ">
    <a class="Button">
      <Save /> Save
    </a>
    <a class="Button">
      <span class="font-serif">A</span>
      Text
    </a>
    <a class="Button" onclick={() => selectTool(UserUploadImage)}>
      <Image />
      Image
    </a>
  </div>
</div>

<style lang="postcss" global>
  .Button {
    @apply mx-auto cursor-pointer select-none items-center gap-2 rounded-md border border-green py-1 px-2 text-center text-sm font-medium capitalize  text-green  hover:bg-green hover:text-white  focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green  active:bg-green active:text-white dark:hover:text-white;
  }
  .topnavsvg {
    @apply flex h-8 w-8 items-center justify-center rounded-md border border-green text-green ring-0  hover:bg-green focus:border-none focus:text-white focus:outline-none focus:ring focus:ring-green active:bg-transparent active:text-white dark:hover:text-white;
  }
</style>
