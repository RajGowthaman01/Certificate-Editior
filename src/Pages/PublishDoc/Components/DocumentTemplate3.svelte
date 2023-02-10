<script>
  import Editicon from "../../../svgicons/Editicon.svelte"
  import EditTick from "../../../svgicons/EditTick.svelte"
  import Leftarrow from "../../../svgicons/Leftarrow.svelte"
  import RightArrow from "../../../svgicons/RightArrow.svelte"
  import DropdownArrow from "../../FileTemplateEditor/svgIcons/DropdownArrow.svelte"
  let DocType = ["Sample1", "Sample3", "Certificate of appreciation", "Certificate of Completion", "Document Ride", "Bluespire"]
  let activeDocType = "Sample1"
  let dropDown = false
  let readonly = true
  let activeElement = "span"
  let sections = [
    {
      id: 1,
      readonly: true,
      value: "Sample1",
      Active: true,
    },
    {
      id: 2,
      readonly: true,
      value: "Sample3",
      Active: false,
    },
    {
      id: 3,
      readonly: true,
      value: "Certificate of appreciation",
      Active: false,
    },
    {
      id: 4,
      readonly: true,
      value: "Certificate of Completion",
      Active: false,
    },
    {
      id: 5,
      readonly: true,
      value: "Document Ride",
      Active: false,
    },
    {
      id: 6,
      readonly: true,
      value: "Bluespire",
      Active: false,
    },
  ]

  const changeActive = (id) => {
    sections = sections.map((sections) => {
      sections.Active = false
      if (sections.id === id) {
        sections.Active = true
      }
      return sections
    })
  }

  const changeIcon = (id) => {
    sections = sections.map((sections) => {
      sections.readonly = true
      if (sections.id === id) {
        sections.readonly = false
      }
      return sections
    })
  }
  const changeEditIcon = (id) => {
    sections = sections.map((sections) => {
      if (sections.id === id) {
        sections.readonly = true
      }
      return sections
    })
    console.log(sections)
  }
</script>

<div class="col-span-2 flex items-center flex-col space-y-7">
  <h1 class="text-4xl font-medium text-Analytics-secondarytext">Document Template</h1>
  <p class="text-xs w-2/5 text-center  font-normal leading-relaxed tracking-wider text-Analytics-primarytext">Choose the Document Template from the available options in the dropdown which you already created in the settings page.</p>
  <div class="group relative w-3/4  flex items-center justify-center">
    {#each sections as sections (sections.id)}
      {#if sections.Active}
        <button
          on:click={() => {
            dropDown = !dropDown
          }}
          class="flex h-12 w-1/2 items-center justify-between rounded-md border-2 border-Analytics-sidebar bg-Analytics-secondary px-3 text-sm font-bold text-Analytics-primarytext focus:border-Analytics-iconcolor focus:outline-none focus:ring-Analytics-iconcolor"
        >
          {sections.value}
          <DropdownArrow />
        </button>
      {/if}
    {/each}

    <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-14 z-10 w-full rounded-md overflow-hidden border-2 border-Analytics-sidebar  font-bold text-Analytics-primarytext">
      {#each sections as sections (sections.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => changeActive(sections.id)} class="relative w-full group">
          <input bind:value={sections.value} readonly={sections.readonly} class=" px-2 w-full py-1.5 cursor-pointer focus:outline-none {sections.Active ? 'bg-Analytics-primary border-l-4 border-Analytics-iconcolor' : 'bg-Analytics-secondary border-l-4 border-l-transparent'}" />
          {#if sections.Active}
            <div class="absolute bottom-2 right-2 cursor-pointer">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              {#if sections.readonly}
                <span on:click={() => changeIcon(sections.id)}><Editicon /></span>
              {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span
                  on:click={() => {
                    changeEditIcon(sections.id)
                  }}
                >
                  <EditTick />
                </span>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
