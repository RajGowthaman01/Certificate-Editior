<script>
  import { editorStore } from "../../../Stores/stores"
  import NextPage from "../../../svg/nextPage.svelte"
  import PrevPage from "../../../svg/prevPage.svelte"
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  let active = true
  let pagination = true
  let name = ""

  editorStore.update((data) => {
    data.name = name
    console.log(data)
    return data
  })
</script>

<h1 class="mb-4 pt-8 pl-8 text-4xl text-primary_blue dark:text-blue-400">
  File
  <br />
  Name
</h1>
<div class="mt-7 grid grid-cols-2 items-center 2xl:mt-16">
  <div class=" pr-8 pl-8 text-secondaryGray dark:text-primaryGray">
    <p class="text-sm">
      Enter Your desired <strong>File Name</strong>
      . You cannot change your File Name once you confirm.
    </p>
  </div>

  <div class="relative mx-auto w-2/3">
    <div class="w-full text-center">
      <div class="group w-full items-center rounded-md">
        <input type="text" bind:value={$editorStore.baseImage.name} class="block w-full max-w-lg rounded-md border-gray-300 text-secondaryGray shadow-sm focus:border-primary_blue focus:ring-primary_blue dark:border-primary_blue dark:bg-secondary dark:text-heading dark:focus:bg-secondary sm:max-w-xs sm:text-sm" />
      </div>
    </div>
    <div class="inline-flex items-center gap-1 justify-center">
      <p class="text-red-600 text-lg ">*</p>
      <div class="text-sm text-primary_blue">Mandatory field</div>
    </div>
  </div>
</div>

<div class:hidden={!pagination} class="absolute inset-x-0 bottom-8 mx-auto flex items-center ">
  <div class="mx-auto flex">
    <nav class="flex flex-row items-center gap-4 md:justify-center">
      <button
        title="prev page"
        on:click={() => {
          dispatch("Component", 0)
        }}
      >
        <PrevPage />
      </button>
      <button
        class="pagination"
        title="Page 1"
        on:click={() => {
          dispatch("Component", 0)
        }}
      />
      <button
        class="pagination"
        class:active
        title="Page 2"
        on:click={() => {
          dispatch("Component", 1)
        }}
      />
      <button
        class="pagination {$editorStore.baseImage.name ? '' : 'pointer-events-none'}"
        title="Page 3"
        on:click={() => {
          dispatch("Component", 2)
        }}
      />
      <button
        class={$editorStore.baseImage.name ? "" : "pointer-events-none"}
        title="next page"
        on:click={() => {
          dispatch("Component", 2)
        }}
      >
        <NextPage />
      </button>
    </nav>
  </div>
</div>

<style lang="postcss">
  .active {
    @apply bg-primary_blue;
  }
</style>
