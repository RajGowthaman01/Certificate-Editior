<script>
  import Modal from "../../Stores/Modal"
  import LeftArrow from "../../svgIcons/LeftArrow.svelte"
  import RightArrow from "../../svgIcons/RightArrow.svelte"
  import { createEventDispatcher } from "svelte"
  let imgHeight, imgWidth
  const dispatch = createEventDispatcher()
  const previousComponent = () => {
    dispatch("previous")
  }
  const nextComponent = () => {
    dispatch("closeModal")
  }
  setTimeout(() => {
    imgHeight = document.querySelector("#displayImage").naturalHeight
    imgWidth = document.querySelector("#displayImage").naturalWidth
    console.log(document.querySelector("#displayImage"))
    console.log(imgHeight)
    console.log(imgWidth)
  }, 500)
</script>

<div class="absolute inset-0 left-28 flex flex-col  justify-center space-y-10">
  <h1 class="text-4xl font-bold text-gray1 dark:text-white">Confirm design</h1>
  <p class="text-base font-normal text-gray2">
    Choose your Base Design Image to upload.
    <br />
    You cannot change it after your confirmation.
  </p>
</div>
<!-- svelte-ignore a11y-img-redundant-alt -->

<div class="child-div absolute inset-y-0 -right-[125px] flex h-full items-center justify-center">
  <div class="flex max-h-[630px] w-[660px] justify-center">
    <img id="displayImage" src={$Modal.bloburl} alt="preview image" class="rounded-md" />
  </div>
</div>

<div class="absolute bottom-10 left-28 flex cursor-pointer gap-14">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={previousComponent}>
    <LeftArrow />
  </span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={nextComponent}>
    <RightArrow />
  </span>
</div>
