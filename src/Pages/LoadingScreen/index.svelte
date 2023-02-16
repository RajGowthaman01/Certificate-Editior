<script>
  import { tweened } from "svelte/motion"
  import { onMount, beforeUpdate, afterUpdate } from "svelte"
  import { quadInOut } from "svelte/easing"
  const tweenedA = tweened(0, {
    duration: 2000,
    easing: quadInOut,
  })
  const tweenedB = tweened(0, {
    duration: 2000,
    easing: quadInOut,
  })
  const onLoadingContent = () => {
    tweenedA.set(100)
    const navigationEntries = performance.getEntriesByType("navigation")[0]
    tweenedB.set(navigationEntries.domContentLoadedEventEnd)
    console.log(navigationEntries.domContentLoadedEventEnd)
    console.log(navigationEntries)
  }
</script>

<svelte:window on:load={onLoadingContent} />
<div class="bg-Analytics-primary relative w-screen h-screen justify-center flex flex-col items-center">
  <div class="w-1/2">
    <div class="border-2 relative border-Analytics-sidebar h-4 w-full rounded-full">
      <div class="bg-Analytics-iconcolor absolute inset-0 w-full rounded-full" style="width:{$tweenedA}%;" />
    </div>
  </div>
  <h1 class="text-Analytics-primarytext">Loading {$tweenedA.toFixed(0)}%</h1>
  <h1 class="absolute bottom-0 right-0 p-5 text-green-500">{$tweenedB.toFixed(2)} ms</h1>
</div>
