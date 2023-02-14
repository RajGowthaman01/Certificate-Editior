<script>
  import { createEventDispatcher } from "svelte"

  import { customHorizontalSlide } from "../scripts/customTransition"
  import AlighRight from "../svg/alighRight.svelte"
  import AlignCenter from "../svg/alignCenter.svelte"
  import AlignLeft from "../svg/alignLeft.svelte"
  import ChooseFontIcon from "../svg/chooseFontIcon.svelte"
  import DropDownIcon from "../svg/dropDownIcon.svelte"
  import FontSizeIncrease from "../svg/fontSizeIncrease.svelte"
  import FontSizeReduce from "../svg/fontSizeReduce.svelte"
  import PositonLock from "../svg/positonLock.svelte"
  import Tooltip from "../shared/tooltip.svelte"
  import Tick from "../svg/tick.svelte"
  import Int from "../svg/int.svelte"
  export let textEditSection = false

  const dispatch = createEventDispatcher()

  let color = ["#ef4444", "#f97f1a", "#f9c921", "#2fedd0", "#1dacf0"]
  let colorPicked = "#1dacf0"
  let defaultSize = ""
  let number = []
  let displayNumbers = []
  let styles = ["Times New Roman", "Raleway", "Sans Serif", "Roboto"]
  let selectedStyle = "Select Font"
  let container
  let dropDown = false

  for (let i = 5; i <= 100; i++) {
    number.push(i)
  }
  displayNumbers = number.slice(0, 5)
  console.log(displayNumbers)
  let fontSize = displayNumbers[displayNumbers.length - 3]

  const incFontSize = () => {
    let maxSize = displayNumbers[displayNumbers.length - 1]
    if (maxSize != 100) {
      setTimeout(() => {
        newFontSize(maxSize, 3, 2)
        fontSize = displayNumbers[displayNumbers.length - 3]
      }, 100)
    }
  }
  const decFontSize = () => {
    let minSize = displayNumbers[0]
    if (minSize != 2) {
      newFontSize(minSize, 1, 4)
      fontSize = displayNumbers[displayNumbers.length - 3]
    }
  }

  const newFontSize = (Element, start, end) => {
    let index = number.findIndex((number) => {
      return number == Element
    })
    console.log(index)
    displayNumbers = number.slice(index - start, index + end)
  }
  let SingleClickFocus = true
  const InputShow = () => {
    SingleClickFocus = false
  }
  const onCustomSize = () => {
    console.log(defaultSize)
    if (defaultSize) {
      newFontSize(defaultSize, 2, 3)
    }
    SingleClickFocus = true
  }

  const activeSize = (numbers) => {
    console.log(numbers)
    fontSize = numbers
  }
  const newColor = (e) => {
    colorPicked = e.target.value
    console.log(colorPicked)
    color.shift()
    color = [...color, colorPicked]
  }
  let focusedColor = (colors) => {
    console.log(colors)
    colorPicked = colors
    console.log(colorPicked)
  }

  /**
   * @function- to close the dropdown by clicking on any point on window
   * @param e - an event targetting opened dropdown
   */
  const onWindowClick = (e) => {
    if (container.contains(e.target) == false) dropDown = false
  }
</script>

<svelte:window on:click={onWindowClick} />
{#if textEditSection}
  <div class="flex h-full w-[330px] flex-col border-b border-r border-black bg-[#1e1e1e] " transition:customHorizontalSlide={{ direction: "inline", duration: 800 }}>
    <div class="flex ">
      <div class=" w-full flex-col items-center px-4 py-4">
        <div class="group relative flex items-center rounded-md ">
          <span class="labelSpan ml-1">NAME</span>
          <input name="field_name" class="inputValue bg-black" type="text" placeholder="" />
        </div>

        <div class="group relative mt-3 flex items-center rounded-md">
          <span class="labelSpan">VALUE</span>
          <input name="field_name" class="inputValue" type="text" placeholder="" />
        </div>

        <div class=" mt-3 h-0.5 w-full bg-primary/50" />
        <div class=" mt-3 ml-2 flex text-sm text-secondaryGray">Font</div>
        <div class="mt-1 flex flex-row items-center justify-between space-x-3">
          <div bind:this={container} class="group rounded-md relative flex h-full w-full">
            <button
              on:click={() => {
                dropDown = !dropDown
              }}
              class="items-center justify-between rounded-md font-bold focus:border focus:border-primary_blue focus:outline-none focus:ring-primary_blue flex py-2 px-2 text-sm text-gray-400"
            >
              {selectedStyle}
              <span class="fill-textGray">
                <DropDownIcon />
              </span>
            </button>

            <div class="{dropDown ? 'flex flex-col' : 'hidden'} absolute top-12 z-10 w-full overflow-hidden rounded-md border border-primary_blue font-bold text-gray-400">
              {#each styles as style}
                <option
                  on:click={() => {
                    selectedStyle = style
                    dropDown = false
                  }}
                  class="option-class dark:border-gray1"
                >
                  {style}
                </option>
              {/each}
            </div>
          </div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            on:click={() => {
              dispatch("FontModal")
            }}
            class="group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue"
          >
            <div class="group flex text-3xl text-[#6c6c6c] ">
              <div class="z-50 hidden  group-hover:block "><Tooltip tooltip="AddNewFont" top={true} /></div>
              <ChooseFontIcon />
            </div>
          </div>
        </div>
        <div class="mt-3 h-0.5 w-full bg-primary/50" />
        <div class="mt-3 ml-2 flex text-sm text-secondaryGray">Positions</div>
        <!-- position lock -->
        <div class=" mt-2 flex items-center justify-between gap-3 text-base">
          <div class="group relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:outline-none">
            <div class="labelSpan text-secondaryGray">X</div>
            <input name="field_name" class="inputField" type="number" min="0" placeholder="" />
          </div>
          <div class="group relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary_blue">
            <div class="labelSpan text-secondaryGray">Y</div>
            <input name="field_name" class="inputField" type="number" min="0" placeholder="" />
          </div>
          <button class="lockPositionBtn group relative">
            <div class=" z-10 hidden group-hover:block">
              <Tooltip tooltip="Lock Position" top={true} />
            </div>
            <PositonLock />
          </button>
        </div>
        <div class="mt-3 h-0.5 w-full bg-hr" />
        <div class="mt-3 ml-2 flex text-sm text-secondaryGray">Text Size</div>
        <div class=" group mt-2 flex h-9 gap-2 ">
          {#if SingleClickFocus}
            <button on:click={decFontSize} class="group">
              <div class="hidden group-hover:block"><Tooltip tooltip="Min Font Size" top={true} /></div>
              <FontSizeReduce />
            </button>
            <div class="group flex items-center justify-center gap-6">
              {#each displayNumbers as Size}
                <button on:dblclick={InputShow} on:click={activeSize(Size)} class="FontSize hover:text-primary_blue  group-active:text-primary  {fontSize == Size ? 'text-white' : 'text-gray-500'}">{Size}</button>
              {/each}
            </div>
            <button on:click={incFontSize} class="group mr-6">
              <div class="hidden group-hover:block"><Tooltip tooltip="Max Font Size" top={true} /></div>
              <FontSizeIncrease />
            </button>
          {:else}
            <div class="dbClickLabel group z-20 w-full bg-secondary ">
              <div class="label-division2">
                <span class="span-label mr-4">SIZE</span>
              </div>
              <div class="absolute inset-y-1.5 right-4 flex gap-3 focus:ring-2 focus:ring-primary_blue group-focus-within:text-primary_blue">
                <button on:click={onCustomSize} class="rounded-full focus:outline-none focus:ring-2 focus:ring-primary_blue">
                  <Tick />
                </button>
                <button
                  on:click={() => {
                    SingleClickFocus = true
                  }}
                  class="rounded-full focus:outline-none focus:ring-2 focus:ring-primary_blue"
                >
                  <Int />
                </button>
              </div>
              <input bind:value={defaultSize} type="number" class="w-full rounded-lg bg-primary text-heading focus:outline-none" />
            </div>
          {/if}
        </div>
        <div class="mt-3 h-0.5 w-full bg-primary/50" />

        <div class="flex w-full flex-row items-center justify-center gap-3">
          <div class="flex w-1/2 flex-col">
            <div class="mt-3 ml-2 flex text-sm text-secondaryGray">Font style</div>
            <div class="mt-1 flex items-center justify-between gap-3 text-base ">
              <div class="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Normal" top={true} /></div>
                <div class="flex text-2xl text-white  group-hover:text-primary_blue ">N</div>
              </div>

              <div class="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Bold" top={true} /></div>
                <p class="flex text-2xl  capitalize text-[#6c6c6c] group-hover:text-primary_blue">B</p>
              </div>
              <div class="group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Underline" top={true} /></div>
                <div class="flex text-2xl  text-[#6c6c6c] underline group-hover:text-primary_blue">U</div>
              </div>
            </div>
          </div>
          <div class=" flex w-1/2 flex-col">
            <div class="mt-3 ml-2 flex text-sm text-secondaryGray">Align Items</div>
            <div class="mt-1  flex items-center justify-between gap-3 text-base text-[#444549]">
              <div class="group relative flex h-8 w-8 items-center justify-center rounded-md hover:text-primary_blue hover:ring-2 hover:ring-primary_blue ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Left Align" top={true} /></div>
                <AlignLeft />
              </div>
              <div class="group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Right Align" top={true} /></div>
                <AlighRight />
              </div>
              <div class="group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 hover:ring-primary_blue ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Center Align" top={true} /></div>
                <AlignCenter />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 h-0.5 w-full bg-primary/50" />
        <div class="ml-2 mt-3 flex text-sm text-secondaryGray">Color</div>
        <div class=" mt-3 ml-2 flex items-center gap-5 text-base">
          {#each color as colors}
            <button on:click={focusedColor(colors)} class="roundedColor rounded-full p-0.5 {colorPicked == colors ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-700' : ''} focus:outline-none focus:ring-2 focus:ring-primary_blue" style="background:{colors}" />
          {/each}
          <label for="input-color" class="relative flex cursor-pointer items-center justify-center pr-1 ">
            <button type="color" class="group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring hover:ring-primary_blue">
              <div class=" hidden group-hover:block "><Tooltip tooltip="Add New Color" top={true} /></div>
              <div class=" inset-0 h-7 w-7 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,_rgb(255,_255,_255)_-48.75deg,_rgb(242,_78,_30)_35.62deg,_rgb(162,_89,_255)_153.75deg,_rgb(254,_108,_26)_232.5deg,_rgb(255,_255,_255)_311.25deg,_rgb(242,_78,_30)_395.63deg)]">
                <input on:change={newColor} type="color" id="input-color" class="absolute inset-0 opacity-0" />
              </div>
            </button>
          </label>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss" global>
  .roundedColor {
    @apply flex h-5 w-5 items-center rounded-full;
  }

  .changefont {
    @apply w-full cursor-pointer rounded-md px-2 py-1 text-sm font-bold text-secondaryGray hover:bg-secondary hover:text-primary_blue;
  }
  .inputDiv {
    @apply relative flex cursor-pointer items-center justify-center rounded-md bg-secondary text-xs hover:bg-secondary;
  }
  .dbClkInputDiv {
    @apply absolute inset-y-0 inset-x-0 mx-auto flex items-center rounded-md bg-primary;
  }
  .positonHolder {
    @apply ml-1 text-base font-bold text-secondaryGray;
  }
  /* .labelSpan {
    @apply absolute rounded-md text-sm outline-none focus:ring-1 focus:ring-primary_blue group-focus-within:text-primary_blue;
  } */
  .option-class {
    @apply w-full border-b border-darkGray/50 bg-lightGray px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
  .fontSizeSelect {
    @apply flex items-center text-base text-secondaryGray;
  }
  .FontSize {
    @apply flex h-7 w-7 items-center justify-center rounded-md text-base font-bold outline-none hover:bg-secondary focus:outline-none;
  }
  .span-label {
    @apply mr-10 select-none text-sm font-bold text-secondaryGray group-focus-within:text-primary_blue;
  }
  .dbClickLabel {
    @apply relative flex w-full cursor-pointer items-center justify-center rounded-md bg-primary py-1 text-xs outline-none group-focus-within:bg-secondary group-focus-within:text-primary_blue group-focus-within:ring-2 group-focus-within:ring-primary_blue;
  }
  .label-division2 {
    @apply absolute left-3 flex w-full items-center py-1;
  }
</style>
