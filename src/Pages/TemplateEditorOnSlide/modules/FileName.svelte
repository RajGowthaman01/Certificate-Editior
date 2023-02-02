<script>
  import { createEventDispatcher } from "svelte"
  import NextPage from "../svg/nextPage.svelte"
  import PrevPage from "../svg/prevPage.svelte"
  const dispatch = createEventDispatcher()
  let active = true
  let pagination = true
  let fileName = ""
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
        <input type="text" bind:value={fileName} name="first-name" id="first-name" autocomplete="given-name" class="block w-full max-w-lg rounded-md border-gray-300 text-secondaryGray shadow-sm focus:border-primary_blue focus:ring-primary_blue dark:border-primary_blue dark:bg-secondary dark:text-heading dark:focus:bg-secondary sm:max-w-xs sm:text-sm" />
      </div>
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
        class="pagination {fileName ? '' : 'pointer-events-none'}"
        title="Page 3"
        on:click={() => {
          dispatch("Component", 2)
        }}
      />
      <button
        class={fileName ? "" : "pointer-events-none"}
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
