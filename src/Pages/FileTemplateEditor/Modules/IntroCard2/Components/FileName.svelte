<script>
  import { slide } from "svelte/transition"
  import { linear } from "svelte/easing"

  let fileName = "Certificate"
  let FileNameHide = false
  const fileNameHideShow = () => {
    FileNameHide = !FileNameHide
  }
</script>

<div class="space-y-3 border-b border-textGray/50 py-3">
  <div class="inline-flex w-full items-center justify-center">
    <h1 class="text-base font-bold text-textGray">FileName</h1>

    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={fileNameHideShow} class="ml-auto cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="h-8 w-8 stroke-textGray"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  </div>
  {#if FileNameHide}
    <div transition:slide={{ duration: 500, easing: linear }} class="space-y-3">
      <p class="w-3/4 text-sm font-normal text-textGray">
        Select the MetaData Template from which key values imported for
        autocompleting Name fills
      </p>
      <div class="w-full pb-3">
        <input
          type="text"
          bind:value={fileName}
          class="h-12 w-3/4 rounded-md border-2 border-gray2 text-sm font-bold text-textGray shadow-sm focus:border-primary_blue focus:ring-primary_blue dark:bg-darkGray"
          placeholder="Certificate of Appreciation"
        />
      </div>
    </div>
  {/if}
</div>
