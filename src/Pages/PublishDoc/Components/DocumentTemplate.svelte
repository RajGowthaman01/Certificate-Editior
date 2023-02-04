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

<div class="col-span-1 flex items-center flex-col space-y-7">
  <h1 class="text-4xl font-medium text-Analytics-secondarytext">Document Template</h1>
  <p class="text-xs w-3/4 pl-14 font-normal leading-relaxed tracking-wider text-Analytics-primarytext">Choose the Document Template from the available options in the dropdown which you already created in the settings page.</p>
</div>
<div class="col-span-1 flex flex-col justify-between h-full w-3/4 items-end">
  <div class="flex flex-col gap-1">
    <h1 class="text-xs text-right font-medium text-Analytics-secondarytext pb-1">Step 1</h1>
    <h1 class="text-sm font-medium text-Analytics-primarytext">Choose Document Template</h1>
  </div>

  <!-- <nav class="flex flex-col gap-4" aria-label="Progress">
    <p class="text-sm text-right text-Analytics-secondarytext font-medium">Step 2 of 4</p>
    <ol class="ml-8 flex items-center space-x-5">
      <li>
        <a href="#" class="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
          <span class="sr-only">Step 1</span>
        </a>
      </li>

      <li>
        <a href="#" class="relative flex items-center justify-center" aria-current="step">
          <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
            <span class="h-full w-full rounded-full bg-indigo-200" />
          </span>
          <span class="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
          <span class="sr-only">Step 2</span>
        </a>
      </li>

      <li>
        <a href="#" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
          <span class="sr-only">Step 3</span>
        </a>
      </li>

      <li>
        <a href="#" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
          <span class="sr-only">Step 4</span>
        </a>
      </li>
    </ol>
  </nav> -->

  <div class="group relative w-3/4">
    {#each sections as sections (sections.id)}
      {#if sections.Active}
        <button
          on:click={() => {
            dropDown = !dropDown
          }}
          class="flex h-12 w-full items-center justify-between rounded-md border-2 border-Analytics-sidebar bg-Analytics-secondary px-3 text-sm font-bold text-Analytics-primarytext focus:border-Analytics-iconcolor focus:outline-none focus:ring-Analytics-iconcolor"
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

        <!-- {#each DocType as DocType}
        svelte-ignore a11y-click-events-have-key-events
        <svelte:element
          this={activeDocType == DocType ? activeElement : "span"}
          on:click={() => {
            activeDocType = DocType
          }}
          class="relative group  w-full px-2 py-1.5 cursor-pointer {activeDocType == DocType ? 'bg-Analytics-primary border-l-4 border-Analytics-iconcolor' : 'bg-Analytics-secondary border-l-4 border-l-transparent'}"
        >
          {DocType}
          {#if activeDocType == DocType}
            <span
              on:click={() => {
                activeElement = "input"
              }}
              class="group-hover:block hidden absolute bottom-0 right-0"
            >
              <svelte:component this={activeElement == "input" ? EditTick : Editicon} />
            </span>
          {/if}
        </svelte:element>
      {/each} -->
        <!-- {#each DocType as DocType}
        svelte-ignore a11y-click-events-have-key-events
        <div class="relative w-full group">
          <input
            on:click={() => {
              activeDocType = DocType
            }}
            value={DocType}
            readonly={activeDocType == DocType ? readonly : true}
            class=" px-2 w-full py-1.5 cursor-pointer focus:outline-none {activeDocType == DocType ? 'bg-Analytics-primary border-l-4 border-Analytics-iconcolor' : 'bg-Analytics-secondary border-l-4 border-l-transparent'}"
          />
          {#if activeDocType == DocType}
            <div class="absolute bottom-2 right-2 cursor-pointer">
              <span on:click={() => (readonly = false)}><Editicon /></span>
            </div>
          {/if}
        </div>
      {/each} -->
      {/each}
    </div>
  </div>
  <div class="flex gap-5">
    <Leftarrow />
    <RightArrow />
  </div>
</div>
