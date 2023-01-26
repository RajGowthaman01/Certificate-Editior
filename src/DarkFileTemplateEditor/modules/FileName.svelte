<script>
  import { createEventDispatcher } from "svelte"
  import NextPage from "../svg/nextPage.svelte"
  import PrevPage from "../svg/prevPage.svelte"
  const dispatch = createEventDispatcher()
  let active = true
  let hidden = true
  let pagination = true
</script>

<h1 class="mb-4 pt-16 pl-16 text-4xl text-blue-400">
  File
  <br />
  Name
</h1>
<div class="grid  grid-cols-2">
  <div class=" pr-8 pl-16 text-primaryGray">
    <p class="text-sm">
      Enter Your desired <strong>File Name</strong>
      . You cannot change your File Name once you confirm.
    </p>
  </div>

  <div class="relative mx-auto w-2/3">
    <div class="w-full text-center">
      <div class="group w-full items-center rounded-md">
        <input name="field_name" class="inputValue" type="text" placeholder="" />
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
        class="pagination"
        title="Page 3"
        on:click={() => {
          dispatch("Component", 2)
        }}
      />
      <button
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
  .inputValue {
    @apply w-full rounded-md bg-secondary px-4 py-2 text-sm  uppercase text-heading focus:bg-secondary focus:outline-none focus:ring-1 focus:ring-primaryBlue;
  }
  .active {
    @apply bg-primaryBlue;
  }
</style>
