<script>
  import { createEventDispatcher } from "svelte"
  import ImageLayerTile from "./imageLayerTile.svelte"
  import TextLayerTile from "./textLayerTile.svelte"
  import ImagePreview from "./imagePreview.svelte"
  import ImagePropertyPanel from "./imagePropertyPanel.svelte"
  import TextPropertyPanel from "./textPropertyPanel.svelte"
  import { imageStore, textStore, editorStore, createLayerOperations } from "../Stores/stores"
  const dispatch = createEventDispatcher()
  // import Save from "../svg/save.svelte"
  import Text from "../svg/text.svelte"
  import Image from "../svg/image.svelte"
  import QrCode from "../svg/qrCode.svelte"

  let imageUploadedSection = false
  let textEditSection = false
  let activeComponent
  let text,
    image,
    type = "",
    i
  let component

  const addImage = () => {
    imageStore.update((imageStore) => [...imageStore, text])
  }
  const addText = () => {
    textStore.update((textStore) => [...textStore, image])
  }

  const sleep = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }

  const addLayerTile = (type) => {
    sleep(500)
    for (let i = 0; i < $editorStore.layerOperations.length; i++) {
      // await sleep(500)
      if (type == "image") {
        component = ImageLayerTile
        createLayerOperations(($editorStore.layerOperations[i].type = type), ($editorStore = $editorStore))
        $editorStore.layerOperations = [...$editorStore.layerOperations]
        console.log($editorStore.layerOperations[i].type)
        return type
      } else if (type == "text") {
        component = TextLayerTile
        createLayerOperations(($editorStore.layerOperations[i].type = type), ($editorStore = $editorStore))
        $editorStore.layerOperations = [...$editorStore.layerOperations]
        console.log($editorStore.layerOperations[i].type)

        return type
      }
      console.log($editorStore)
    }
  }
</script>

<div class="flex h-[screen] min-w-[330px] flex-col border-r border-black bg-certificateSection">
  <ImagePreview />
  <!-- <div class="inline-flex w-full pt-2 px-4 shadow-md hover:shadow-lg focus:shadow-lg" role="group">
    <button on:click={() => dispatch("fontList")} class="buttonGroup text-center  justify-center rounded-md w-full">Font Details</button>
  </div> -->
  <div class="flex py-2 px-4">
    <div class="flex font-medium text-heading">Layers</div>
  </div>
  <!-- button groups -->
  <div class="flex items-center justify-center mx-auto">
    <div class="inline-flex w-full pb-4 pt-2 shadow-md hover:shadow-lg focus:shadow-lg" role="group">
      <button on:click={addText} type="button" class="rounded-l gap-1 px-3 buttonGroup border-r border-blue-400">
        <span class="text-heading">
          <QrCode />
        </span>
        QrCode
      </button>
      <!-- {#if $editorStore.layerOperations.type === "image"} -->
      <button
        on:click={() => {
          addLayerTile((type = "image"))
        }}
        type="button"
        class="px-5 py-2.5 gap-1 buttonGroup"
      >
        <Image />
        Image
      </button>
      <!-- {:else if $editorStore.layerOperations.type === "text"} -->
      <button
        on:click={() => {
          addLayerTile((type = "text"))
        }}
        type="button"
        class="rounded-r px-6 py-2.5 buttonGroup border-l-blue-400"
      >
        <span class="h-5 w-5 fill-heading">
          <Text />
        </span>
        Text
      </button>
      <!-- {/if} -->
    </div>
  </div>
  <div class="pb-96 max-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
    <!-- {#each Array(15) as _, index (index)} -->
    {#each $imageStore as store}
      <ImageLayerTile on:hideImageProp={() => (imageUploadedSection = !imageUploadedSection)} on:hideImage={() => (imageUploadedSection = false)} on:click={() => (activeComponent = ImagePropertyPanel)} />
    {/each}
    {#each $textStore as store}
      <TextLayerTile on:hideTextProp={() => (textEditSection = !textEditSection)} on:hideText={() => (textEditSection = false)} on:click={() => (activeComponent = TextPropertyPanel)} />
    {/each}
    {#each $editorStore.layerOperations as type}
      <!-- {#if (type = "image")}
        <ImageLayerTile on:hideImageProp={() => (imageUploadedSection = !imageUploadedSection)} on:hideImage={() => (imageUploadedSection = false)} on:click={() => (activeComponent = ImagePropertyPanel)} />
      {:else if (type = "text")}
        <TextLayerTile on:hideTextProp={() => (textEditSection = !textEditSection)} on:hideText={() => (textEditSection = false)} on:click={() => (activeComponent = TextPropertyPanel)} />
      {/if} -->
      <svelte:component this={component} />
    {/each}
    <!-- {/each} -->
  </div>
</div>

<div class="flex flex-col">
  {#if activeComponent}
    <svelte:component this={activeComponent} on:FontModal {imageUploadedSection} {textEditSection} />
  {/if}
</div>

<style lang="postcss">
  .buttonGroup {
    @apply inline-flex items-center bg-primary_blue py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800;
  }
</style>
