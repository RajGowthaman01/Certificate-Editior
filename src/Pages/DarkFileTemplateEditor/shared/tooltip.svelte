<script>
  export let tooltip = "toolTip"
  export let top = false,
    left = false,
    bottom = false
</script>

{#if top}
  <div class="tooltipCommon before:left-1/2 before:-top-3  before:-translate-x-1/2 before:-translate-y-full  before:bg-black before:px-2 before:py-1.5  after:absolute after:left-1/2 after:-top-3 after:-translate-x-1/2 after:border-t-black after:border-l-transparent" data-tip={tooltip} />
{/if}

{#if left}
  <div class="tooltipCommon before:-left-3 before:top-1/2  before:-translate-x-full before:-translate-y-1/2  before:bg-black before:px-3 before:py-2  after:absolute after:-left-[0.8rem] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:border-l-black  after:border-t-transparent " data-tip={tooltip} />
{/if}
{#if bottom}
  <div class="tooltipCommon before:left-1/2 before:-bottom-3 before:-translate-x-1/2 before:translate-y-full  before:bg-gray-700 before:px-2 before:py-1.5 before:text-white  after:invisible after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:border-b-black after:border-l-transparent after:border-t-transparent" data-tip={tooltip} />
{/if}

<style lang="postcss">
  .tooltipCommon {
    @apply text-xs text-black before:absolute before:z-50 before:w-max before:max-w-xs before:rounded-md before:bg-black before:text-white before:content-[attr(data-tip)] after:z-50 after:h-0 after:w-0 after:border-8 after:border-b-transparent after:border-r-transparent hover:before:visible hover:after:visible;
  }
</style>
