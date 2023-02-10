<script>
  import { fly } from "svelte/transition"
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

  let input = true
  let color = ["#ef4444", "#f97f1a", "#f9c921", "#2fedd0", "#1dacf0"]
  let colorPicked = "#1dacf0"
  let defaultSize = ""
  let number = []
  let displayNumbers = []

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
  const newFont = () => {
    input = !input
  }
  let fontName = false
  let fontFamily = "Choose Font"
  const Dropdown = () => {
    fontName = !fontName
  }
  const changeFont = (e) => {
    console.log(e)
    fontFamily = e
    Dropdown()
  }
</script>

{#if textEditSection}
  <div class="bg-secondary flex h-full w-[330px] flex-col border-b border-r border-black " in:fly={{ y: -200, duration: 1500 }} out:fly={{ y: -200, duration: 2000 }}>
    <div class="flex ">
      <div class=" w-full flex-col items-center px-4 py-4">
        <div class="group relative flex items-center rounded-md">
          <span class="labelSpan ml-1">NAME</span>
          <input name="field_name" class="inputValue" type="text" placeholder="" />
        </div>

        <div class="group relative mt-3 flex items-center rounded-md">
          <span class="labelSpan">VALUE</span>
          <input name="field_name" class="inputValue" type="text" placeholder="" />
        </div>

        <div class=" bg-primary/50 mt-3 h-0.5 w-full" />
        <div class=" text-secondaryGray mt-3 ml-2 flex text-sm">Font</div>
        <div class="mt-1 flex flex-row items-center justify-between space-x-3">
          <div class="flex gap-2">
            {#if input}
              <div class="relative w-full">
                <button on:click={Dropdown} type="button" class="text-secondaryGray flex w-[177px] py-2 px-2 text-sm  focus:outline-none">
                  {fontFamily}
                  <DropDownIcon />
                </button>
                <div class="{fontName ? 'flex' : 'hidden'} bg-secondary text-primary absolute z-10 w-full rounded-md px-2 text-sm font-bold ring-2 ring-blue-500">
                  <div class="w-full ">
                    <option on:click={() => changeFont("TimesNewRoman")} class="changefont">TimesNewRoman</option>
                    <option on:click={() => changeFont("Arial")} class="changefont">Arial</option>
                    <option on:click={() => changeFont("Sans")} class="changefont">Sans</option>
                    <option on:click={() => changeFont("Roboto")} class="changefont">Roboto</option>
                    <option on:click={() => changeFont("Mono")} class=" changefont">Mono</option>
                  </div>
                </div>
              </div>
            {:else}
              <div class="group relative rounded-md">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="group-focus-within:text-bg-primary_blue text-secondary text-xs font-bold">FONT</span>
                </div>
                <input type="text" class="focus:border-bg-primary_blue border-darkGray bg-lightGray text-textGray block h-10 w-full  rounded-md pl-16 text-sm sm:pl-14" />
              </div>
            {/if}
          </div>
          <div class="hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2">
            <div class=" group flex overflow-visible text-3xl text-[#6c6c6c] ">
              <div class="z-50 hidden overflow-visible group-hover:block "><Tooltip tooltip="AddNewFont" top={true} /></div>
              <ChooseFontIcon />
            </div>
          </div>
        </div>
        <div class="bg-primary/50 mt-3 h-0.5 w-full" />
        <div class="text-secondaryGray mt-3 ml-2 flex text-sm">Positions</div>
        <!-- position lock -->
        <div class=" mt-2 flex items-center justify-between gap-3 text-base">
          <div class="bg-primary group relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:outline-none">
            <div class="labelSpan text-secondaryGray">X</div>
            <input name="field_name" class="inputField" type="number" min="0" placeholder="" />
          </div>
          <div class="bg-primary focus:bg-secondary focus:ring-primary_blue group relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:outline-none focus:ring-2">
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
        <div class="bg-hr mt-3 h-0.5 w-full" />
        <div class="text-secondaryGray mt-3 ml-2 flex text-sm">Text Size</div>
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
            <div class="dbClickLabel bg-secondary group z-20 w-full ">
              <div class="label-division2">
                <span class="span-label mr-4">SIZE</span>
              </div>
              <div class="focus:ring-primary_blue group-focus-within:text-primary_blue absolute inset-y-1.5 right-4 flex gap-3 focus:ring-2">
                <button on:click={onCustomSize} class="focus:ring-primary_blue rounded-full focus:outline-none focus:ring-2">
                  <Tick />
                </button>
                <button
                  on:click={() => {
                    SingleClickFocus = true
                  }}
                  class="focus:ring-primary_blue rounded-full focus:outline-none focus:ring-2"
                >
                  <Int />
                </button>
              </div>
              <input bind:value={defaultSize} type="number" class="bg-primary text-heading w-full rounded-lg focus:outline-none" />
            </div>
          {/if}
        </div>
        <div class="bg-primary/50 mt-3 h-0.5 w-full" />

        <div class="flex w-full flex-row items-center justify-center gap-3">
          <div class="flex w-1/2 flex-col">
            <div class="text-secondaryGray mt-3 ml-2 flex text-sm">Font style</div>
            <div class="mt-1 flex items-center justify-between gap-3 text-base ">
              <div class="hover:ring-primary_blue group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Normal" top={true} /></div>
                <div class="group-hover:text-primary_blue flex text-2xl  text-white ">N</div>
              </div>

              <div class="hover:ring-primary_blue group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Bold" top={true} /></div>
                <p class="group-hover:text-primary_blue flex  text-2xl capitalize text-[#6c6c6c]">B</p>
              </div>
              <div class="hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Underline" top={true} /></div>
                <div class="group-hover:text-primary_blue flex  text-2xl text-[#6c6c6c] underline">U</div>
              </div>
            </div>
          </div>
          <div class=" flex w-1/2 flex-col">
            <div class="text-secondaryGray mt-3 ml-2 flex text-sm">Align Items</div>
            <div class="mt-1  flex items-center justify-between gap-3 text-base text-[#444549]">
              <div class="hover:text-primary_blue hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Left Align" top={true} /></div>
                <AlignLeft />
              </div>
              <div class="hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Right Align" top={true} /></div>
                <AlighRight />
              </div>
              <div class="hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
                <div class=" hidden group-hover:block "><Tooltip tooltip="Center Align" top={true} /></div>
                <AlignCenter />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-primary/50 mt-3 h-0.5 w-full" />
        <div class="text-secondaryGray ml-2 mt-3 flex text-sm">Color</div>
        <div class=" mt-3 ml-2 flex items-center gap-5 text-base">
          {#each color as colors}
            <button on:click={focusedColor(colors)} class="roundedColor rounded-full p-0.5 {colorPicked == colors ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-700' : ''} focus:ring-primary_blue focus:outline-none focus:ring-2" style="background:{colors}" />
          {/each}
          <label for="input-color" class="relative flex cursor-pointer items-center justify-center pr-1 ">
            <button type="color" class="hover:ring-primary_blue group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring">
              <div class=" hidden group-hover:block "><Tooltip tooltip="Add New Color" top={true} /></div>
              <div class=" bg-[conic-gradient(from_180deg_at_50%_50%,_rgb(255,_255,_255)_-48.75deg,_rgb(242,_78,_30)_35.62deg,_rgb(162,_89,_255)_153.75deg,_rgb(254,_108,_26)_232.5deg,_rgb(255,_255,_255)_311.25deg,_rgb(242,_78,_30)_395.63deg)] inset-0 h-7 w-7 rounded-full">
                <input on:change={newColor} type="color" id="input-color" class="absolute inset-0 opacity-0" />
              </div>
            </button>
          </label>
        </div>
      </div>
    </div>

    <!-- {/if} -->
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
  .labelSpan {
    @apply absolute rounded-md text-sm text-secondaryGray outline-none focus:ring-1 focus:ring-primary_blue group-focus-within:text-primary_blue;
  }
  /* .inputValue {
		@apply bg-primary focus:bg-secondary focus:ring-primary_blue w-full rounded-md px-4 pl-16 text-sm text-white focus:outline-none focus:ring-2;
	} */
  .fontSizeSelect {
    @apply flex items-center text-base text-secondaryGray;
  }
  .FontSize {
    @apply flex h-7 w-7 items-center justify-center rounded-md text-base font-bold outline-none  hover:bg-secondary focus:outline-none;
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
