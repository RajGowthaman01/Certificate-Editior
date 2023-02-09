<div class="flex gap-2 items-center justify-center min-h-[250px] w-full pb-5">
  <div class="w-5 h-5 bg-darkGray wave9 rounded-full" />
  <div class="w-5 h-5 bg-darkGray wave9 rounded-full" />
  <div class="w-5 h-5 bg-darkGray wave9 rounded-full" />
</div>

<style>
  .wave9 {
    animation: wave9 1s linear infinite;
  }
  .wave9:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave9:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave9:nth-child(4) {
    animation-delay: 0.3s;
  }
  @keyframes wave9 {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
