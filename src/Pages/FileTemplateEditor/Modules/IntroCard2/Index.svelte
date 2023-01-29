<script>
  import Modal from "../../Stores/Modal"
  import RoundedPlus from "../../svgIcons/RoundedPlus.svelte"
  import FileName from "./Components/FileName.svelte"
  import MetaDataTemplate from "./Components/MetaDataTemplate.svelte"
  import UploadFile from "./Components/UploadFile.svelte"
  let sections = [
    {
      id: 0,
      Title: "MetaDataTemplate",
      Component: MetaDataTemplate,
      Active: true,
    },
    {
      id: 1,
      Title: "FileName",
      Component: FileName,
      Active: false,
    },
    {
      id: 2,
      Title: "UploadFile",
      Component: UploadFile,
      Active: false,
    },
  ]
  const changeActiveSection = (id) => {
    console.log(id)
    sections = sections.map((sections) => {
      sections.Active = false
      if (sections.id === id) {
        sections.Active = true
      }
      return sections
    })
    console.log(sections)
  }
</script>

<div class="flex flex-col space-y-4">
  <h1 class="cardHeading">File Template Editor</h1>
  <div class="relative flex aspect-[16/10] w-[720px] flex-col  rounded-md bg-white px-5 pt-1 dark:bg-darkGray">
    {#each sections as sections (sections.id)}
      <div class="space-y-3 border-b  border-textGray/50 pb-4 pt-4 last:border-none">
        <div class="inline-flex w-full items-center justify-center">
          <h1 class="text-base font-bold text-textGray">{sections.Title}</h1>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            on:click={() => {
              changeActiveSection(sections.id)
            }}
            class="ml-auto cursor-pointer"
          >
            <RoundedPlus />
          </span>
        </div>
        {#if sections.Active}
          <svelte:component this={sections.Component} />
        {/if}
      </div>
    {/each}
  </div>

  <div class="mx-auto">
    <button on:click disabled={!$Modal.bloburl} class="inline-block items-center rounded-[0.25rem] bg-[#0069d9] py-1.5 px-3 text-base font-normal tracking-wide text-white ring-[#92C7FF] hover:bg-[#134EEC] focus:ring-2 disabled:cursor-not-allowed disabled:bg-[#0D82FF]">Confirm</button>
  </div>
</div>

<style global lang="postcss">
  p {
    @apply text-sm font-normal text-textGray;
  }
  .cardHeading {
    @apply text-center text-2xl font-bold text-textGray;
  }
  h4 {
    @apply text-sm font-bold text-textGray;
  }
  h5 {
    @apply text-sm font-thin text-textGray;
  }
</style>
