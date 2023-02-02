<script>
  export let value, color, stat, icon
</script>

<div class="group col-span-1 flex justify-between bg-Analytics-sidebar p-4 border-l-4 {color} transition-all ease-in-out hover:bg-{color}">
  <div class="flex flex-col justify-between">
    <h4 class="font-mono text-3xl font-medium tracking-wider text-white">{stat}</h4>
    <h2 class="text-sm font-medium tracking-wider text-white">{value}</h2>
  </div>
  <div class="flex items-center">
    <svelte:component this={icon} />
  </div>
</div>

<style lang="postcss">
  .iconcolor {
    @apply border-l-Analytics-iconcolor;
  }
  .card2 {
    @apply border-l-Analytics-card2;
  }
  .card3 {
    @apply border-l-Analytics-card3;
  }
  .card4 {
    @apply border-l-Analytics-card4;
  }
</style>
