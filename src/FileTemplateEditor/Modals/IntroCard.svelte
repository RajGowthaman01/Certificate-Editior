<script>
  import Close from "../svgIcons/Close.svelte"
  import Filename from "./Modules/Filename.svelte"
  import Metadata from "./Modules/Metadata.svelte"
  import Preview from "./Modules/Preview.svelte"
  import Uploadfile from "./Modules/Uploadfile.svelte"
  import { fade } from "svelte/transition"
  let Components = [Metadata, Filename, Uploadfile, Preview]
  let activeComponent = Metadata
  const nextComponent = () => {
    let index = Components.findIndex((Components) => {
      return Components == activeComponent
    })
    index < 3 ? index++ : (index = 0)
    activeComponent = Components[index] //activeComponent = Filename
  }
  const previousComponent = () => {
    let index = Components.findIndex((Components) => {
      return Components == activeComponent
    })
    index--
    activeComponent = Components[index] //activeComponent = Filename
  }
</script>

<div class="parent-div relative flex h-3/4 w-full flex-col justify-between rounded-md bg-white p-10 dark:bg-darkGray xl:w-[1024px]" out:fade={{ duration: 1000 }}>
  <span class="ml-auto flex {activeComponent == Preview ? 'invisible' : 'block'}">
    <Close on:click />
  </span>
  <svelte:component this={activeComponent} on:click={nextComponent} on:uploadFile={nextComponent} on:closeModal on:previous={previousComponent} />
  <!-- <Filename on:click={nextComponent}/> -->
</div>
