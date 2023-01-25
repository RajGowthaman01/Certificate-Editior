<script>
  export let tip = "tool Tip",
    position = "Top"
</script>

{#if position == "Top"}
  <div
    class="text-xs text-black before:absolute before:left-1/2 before:-top-3 before:z-10 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-black before:px-2 before:py-1.5 before:text-place_white before:content-[attr(data-tip)] after:absolute after:left-1/2 after:-top-3 after:z-10 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-black after:border-l-transparent after:border-b-transparent after:border-r-transparent"
    data-tip={tip}
  />
{/if}

{#if position == "left"}
  <div
    class="text-xs text-black before:absolute before:-right-3 before:top-1/2 before:z-10 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-black before:px-2 before:py-1.5 before:text-white before:content-[attr(data-tip)]  after:absolute after:-right-[0.8rem] after:top-1/2 after:z-10 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-black after:border-l-transparent after:border-b-transparent after:border-t-transparent"
    data-tip={tip}
  />
{/if}
