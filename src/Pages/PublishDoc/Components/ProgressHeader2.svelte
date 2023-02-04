<script>
  import Docicon from "../../../svgicons/Docicon.svelte"

  let sections = [
    {
      id: 1,
      Content: "Document Template",
      icon: Docicon,
      Active: true,
    },
    {
      id: 2,
      Content: "Document ID",
      icon: Docicon,
      Active: true,
    },
    {
      id: 3,
      Content: "Document Upload",
      icon: Docicon,
      Active: true,
    },
    {
      id: 4,
      Content: "Document MetaData",
      icon: Docicon,
      Active: false,
    },
    {
      id: 5,
      Content: "Sign Document",
      icon: Docicon,
      Active: false,
    },
    {
      id: 6,
      Content: "Publish Document",
      icon: Docicon,
      Active: false,
    },
    {
      id: 7,
      Content: "Preview Document",
      icon: Docicon,
      Active: false,
    },
  ]

  const changeActiveStep = (id) => {
    sections = sections.map((sections) => {
      sections.Active = false
      if (sections.id === id) {
        sections.Active = true
      }
      return sections
    })
  }
</script>

<div class="flex flex-col">
  <div class="grid grid-cols-7">
    <!-- <div class="col-span-2 bg-Analytics-sidebar w-2/5 h-2" /> -->
    {#each sections as sections (sections.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => changeActiveStep(sections.id)} class="col-span-1 first:border-l border-Analytics-sidebar select-none cursor-pointer px-3 py-[30px] items-center {sections.Active ? 'active' : 'inactive'}">
        <!-- <div class="flex gap-3">
          <div class="flex items-center">
            <svelte:component this={sections.icon} />
          </div> -->
        <!-- <div class="flex flex-col gap-1"> -->
        <!-- <h1>Step {sections.id}</h1> -->
        <h2>{sections.Content}</h2>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  /* h1 {
    @apply text-base font-medium text-Analytics-primarytext;
  } */
  h2 {
    @apply text-sm font-medium;
  }
  .active {
    @apply border-b-4 border-b-Analytics-iconcolor bg-Analytics-primary text-Analytics-iconcolor;
  }
  .inactive {
    @apply border-b-4 border-b-Analytics-sidebar bg-Analytics-secondary text-Analytics-secondarytext;
  }
</style>
