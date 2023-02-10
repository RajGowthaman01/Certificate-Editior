<script>
  import { createEventDispatcher } from "svelte"
  import InitIcon from "../svg/InitIcon.svelte"
  const dispatch = createEventDispatcher()

  $: signClr = ["#242424"]
  const getClr = () => {
    console.log(signClr)
  }
  const initOTP = () => {
    dispatch("init")
  }
</script>

<div class="min-h-[250px] flex justify-between flex-col">
  <div class="flex gap-3 relative">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-8 rounded-md mr-10 border-2 border-lightGray" style="background-color: {signClr}; border" viewBox="0 0 640 512">
      <path
        fill="white"
        d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3l-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32h-83.6l18-53.9c3.8-11.3.9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4l-122.4 36.8c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5v-72c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24h40.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z"
      />
    </svg>
    <input on:input={getClr} bind:value={signClr} type="color" class="absolute right-0 w-7 top-0 h-7 rounded-full z-10 opacity-0" />
    <img class="w-7 h-7 rounded-full absolute right-0 top-0" src="https://img.favpng.com/7/23/16/color-wheel-rgb-color-model-color-gradient-complementary-colors-png-favpng-6qVjQ1RxkyK30g6yUQuZiLpQp.jpg" alt="colour circle" />
  </div>
  <div class="w-full flex justify-end">
    <button on:click={initOTP} class="btn">
      <InitIcon />
    </button>
  </div>
</div>
