<script>
  import Docicon from "../../../svgicons/Docicon.svelte"
  import Msgicon from "../../../svgicons/msgicon.svelte"
  import Emailicon from "../../../svgicons/Emailicon.svelte"

  let sections = [
    {
      id: 0,
      Title: "Single Document Publishing",
      icon: Docicon,
      Content: "This option supports single document publishing",
      active: true,
    },
    {
      id: 1,
      Title: "Bulk Upload",
      icon: Msgicon,
      Content: "If you want to upload multiple documents at once, prefer this option",
      active: false,
    },
    {
      id: 3,
      Title: "Document Status",
      icon: Emailicon,
      Content: "Stats related to the status of the Document Id whether its pending or published",
      active: false,
    },
    {
      id: 4,
      Title: "Revoke Document",
      icon: Msgicon,
      Content: "Revoke any document that is already published",
      active: false,
    },
  ]

  const changeActiveBar = (id) => {
    sections = sections.map((sections) => {
      sections.active = false
      if (sections.id === id) {
        sections.active = true
      }
      return sections
    })
  }
</script>

<div class="relative w-10/12 bg-Analytics-secondary shadow-3xl">
  <div class="absolute top-0 flex px-5 py-3  w-full items-center justify-between border-b border-Analytics-sidebar">
    <h2>Publish Documents</h2>
  </div>
  <div class="mt-12">
    {#each sections as sections (sections.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => changeActiveBar(sections.id)} class="flex border-l-4 border-b cursor-pointer select-none {sections.active ? 'active shadow-3xl' : 'border-l-transparent'} border-Analytics-sidebar px-4 py-3">
        <div class="flex items-center justify-center">
          <svelte:component this={sections.icon} />
        </div>
        <div class="space-y-1 pl-4">
          <h4>{sections.Title}</h4>
          <p class="text-Analytics-secondarytext">{sections.Content}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  h4 {
    @apply text-sm font-medium tracking-wider text-white;
  }
  p {
    @apply text-xs font-medium leading-normal tracking-wider;
  }
  h2 {
    @apply text-base font-medium tracking-wider text-white;
  }
  .active {
    @apply border-l-Analytics-iconcolor bg-Analytics-primary;
  }
</style>
