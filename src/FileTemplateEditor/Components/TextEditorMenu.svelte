<script>
  import AddFont from "../svgIcons/AddFont.svelte"
  import AddNumber from "../svgIcons/AddNumber.svelte"
  import AlignCenter from "../svgIcons/AlignCenter.svelte"
  import AlignLeft from "../svgIcons/AlignLeft.svelte"
  import AlignRight from "../svgIcons/AlignRight.svelte"
  import Bold from "../svgIcons/Bold.svelte"
  import Delete from "../svgIcons/Delete.svelte"
  import DropdownArrow from "../svgIcons/DropdownArrow.svelte"
  import Italic from "../svgIcons/Italic.svelte"
  import Maximize from "../svgIcons/Maximize.svelte"
  import Minimize from "../svgIcons/Minimize.svelte"
  import Move from "../svgIcons/Move.svelte"
  import Normal from "../svgIcons/Normal.svelte"
  import SubNumber from "../svgIcons/SubNumber.svelte"
  import Tooltip from "./Tooltip.svelte"
  import { flip } from "svelte/animate"
  import Remove from "../svgIcons/Remove.svelte"
  import Tick from "../svgIcons/Tick.svelte"
  import { slide } from "svelte/transition"

  let color = ["#FF3333", "#8906F7", "#2CF706", "#0639F7", "#FEFF33", "#F20785"]
  let dropDowns = ["Emblema_One", "Alfa_Slab_One", "Croissant_One", "Cute_Font", "Dangrek", "Devonshire", "Sans"]
  let number = [
    {
      id: 1,
      value: 2,
    },
    {
      id: 2,
      value: 3,
    },
    {
      id: 3,
      value: 4,
    },
    {
      id: 4,
      value: 5,
    },
    {
      id: 5,
      value: 6,
    },
  ]
  let fontName = false
  let fontFamily = "Sans"
  let textName, textValue
  let count = 0
  let count1 = 0
  let defaultSize = ""
  let disable = true
  let hide = false
  let minimize = false
  let input = true
  let alignValue = "Left"
  $: sizeValue = number[number.length - 3].value // number[2].value
  let styleValue = "Normal"
  let colorValue = "#F20785"
  let inputBoxShow = true

  const onCustomSize = () => {
    console.log(defaultSize)
    if (defaultSize) {
      number = []
      //10   [8,9,10,11,12]
      for (let i = 0; i < 5; i++) {
        let newElement = {
          id: i, //0
          value: defaultSize - 2 + i, //
        }
        console.log(newElement)
        number.push(newElement)
      }
      sizeValue = number[number.length - 3].value
      console.log(number)
    }
    inputBoxShow = true
  }
  const InputShow = () => {
    inputBoxShow = false
  }

  const activeColor = (colors) => {
    //  focus on 6 colors
    colorValue = colors
    console.log(colorValue)
  }

  const chooseColor = (e) => {
    // color = ["#FF3333", "#8906F7", "#2CF706", "#0639F7", "#FEFF33", "#F20785"]
    colorValue = e.target.value //colorvalue = white
    color.shift()
    color = [...color, colorValue]
  }

  const increaseFontSize = () => {
    if (number[number.length - 1].value <= 100) {
      number.shift() // to remove the first element from an array
      // number = number
      let newElement = {
        id: Math.floor(Math.random() * 1000) + 6,
        value: number[number.length - 1].value + 1, //number[4].value+1
      }
      setTimeout(() => {
        number = [...number, newElement]
        disable = false
      }, 500)
    } else {
      hide = true
    }
  }
  const decreaseFontSize = () => {
    if (number[0].value != 2) {
      number.pop() // to remove the last element from an array
      let newElement = {
        id: Math.floor(Math.random() * 1000) + 6,
        value: number[0].value - 1,
      }
      setTimeout(() => {
        number = [newElement, ...number]
        hide = false
        // if (number[0].value == 2) {
        //   disable = true
        // }
        disable = number[0].value == 2
      }, 100)
    } else {
      disable = true
    }
  }
  const newFont = () => {
    input = !input
  }

  const dropDown = () => {
    fontName = !fontName
  }
  const changeFont = (style) => {
    fontFamily = style
  }

  const activeSize = (numbers) => {
    sizeValue = numbers
  }
</script>

<div>
  <div class="w-75 space-y-2 rounded-t-md bg-darkGray p-4">
    <div class="group relative rounded-md">
      <div class="label-division2">
        <span class="span-label">NAME</span>
      </div>
      <input bind:value={textName} type="text" class="pl-16" />
    </div>

    <div class="group relative rounded-md">
      <div class="label-division2">
        <span class="span-label">VALUE</span>
      </div>
      <input bind:value={textValue} type="text" class="pl-[4.3rem]" />
    </div>
    {#if minimize}
      <div transition:slide={{ duration: 500 }} class="space-y-2">
        <div class="flex gap-2">
          {#if input}
            <div on:click={dropDown} class="group relative w-full">
              <button type="button" class="flex h-10 w-full items-center justify-between rounded-md border-2 border-none  bg-lightGray px-3 text-sm font-bold text-textGray focus:ring-2 focus:ring-primary_blue font-{fontFamily} focus:border-2 focus:outline-none">
                {fontFamily}
                <DropdownArrow />
              </button>

              <div class="{fontName ? 'flex' : 'hidden'} absolute z-10 mt-2 w-full rounded-md border border-primary_blue bg-darkGray font-bold text-textGray">
                <div class="w-full">
                  {#each dropDowns as fontStyle}
                    <option on:click={() => changeFont(fontStyle)} class="option-class font-${fontStyle}">
                      {fontStyle}
                    </option>
                  {/each}
                </div>
              </div>
            </div>
          {:else}
            <div class="group relative rounded-md">
              <div class="label-division2">
                <span class="span-label">FONT</span>
              </div>
              <input type="text" class="pl-16" />
            </div>
          {/if}

          <button on:click={newFont} class="icons group">
            <div class="hidden group-hover:block"><Tooltip tip="Add Font" /></div>
            <AddFont />
          </button>
        </div>

        <div class="flex gap-2">
          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">X</span>
            </div>
            <div class="down-arrow">
              <svg on:click={() => (count -= 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div class="up-arrow">
              <svg on:click={() => (count += 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4  w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <input type="text" class="px-9" value={count} />
          </div>

          <div class="label-division1 group">
            <div class="label-division2">
              <span class="span-label">Y</span>
            </div>
            <div class="down-arrow">
              <svg on:click={() => (count1 -= 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div class="up-arrow">
              <svg on:click={() => (count1 += 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-4 w-4 stroke-textGray hover:stroke-primary_blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <input type="text" class="px-9" value={count1} />
          </div>

          <button class="icons group">
            <div class="hidden group-hover:block"><Tooltip tip="Move" /></div>
            <Move />
          </button>
        </div>

        <div class="flex h-10 gap-1">
          <div class="flex w-1/2 gap-1">
            <button on:click={() => (alignValue = "Left")} class="align-input group">
              <div class="hidden group-hover:block"><Tooltip tip="Left Align" /></div>
              <AlignLeft {alignValue} />
            </button>
            <button on:click={() => (alignValue = "Center")} class="align-input group">
              <div class="hidden group-hover:block"><Tooltip tip="Center Align" /></div>
              <AlignCenter {alignValue} />
            </button>
            <button on:click={() => (alignValue = "Right")} class="align-input group">
              <div class="hidden group-hover:block"><Tooltip tip="Right Align" /></div>
              <AlignRight {alignValue} />
            </button>
          </div>

          <div class="flex w-1/2 gap-1">
            <button on:click={() => (styleValue = "Normal")} class="align-input group">
              <div class="hidden group-hover:block"><Tooltip tip="Normal" /></div>
              <Normal {styleValue} />
            </button>
            <button on:click={() => (styleValue = "Bold")} class="align-input group ml-1">
              <div class="hidden group-hover:block"><Tooltip tip="Bold" /></div>
              <Bold {styleValue} />
            </button>
            <button on:click={() => (styleValue = "Italic")} class="align-input group">
              <div class="hidden group-hover:block"><Tooltip tip="Italic" /></div>
              <Italic {styleValue} />
            </button>
          </div>
        </div>
        {#if inputBoxShow}
          <div class="grid h-10 grid-cols-6 gap-2">
            <button on:click={decreaseFontSize} class="size group relative col-span-1 {disable ? 'cursor-not-allowed stroke-stone-600' : 'cursor-pointer stroke-textGray'} ">
              <div class="hidden group-hover:block"><Tooltip tip="Min Size" /></div>
              <SubNumber />
            </button>
            <div class="group col-span-4 flex items-center justify-center gap-2">
              {#each number as numbers (numbers.id)}
                <button on:dblclick={InputShow} animate:flip={{ duration: 1000 }} on:click={activeSize(numbers.value)} class="size1 hover:text-primary_blue  group-active:text-darkGray  {sizeValue == numbers.value ? 'text-white' : 'text-gray-500'}">{numbers.value}</button>
              {/each}
            </div>
            <button on:click={increaseFontSize} class="size group relative col-span-1 -ml-1 {hide ? 'cursor-not-allowed stroke-stone-600' : 'cursor-pointer stroke-textGray'}">
              <div class="hidden group-hover:block"><Tooltip tip="Max Size" /></div>
              <AddNumber />
            </button>
          </div>
        {:else}
          <div class="label-division1 group w-full">
            <div class="label-division2">
              <span class="span-label">SIZE</span>
            </div>
            <div class="absolute inset-y-1.5 right-3 flex gap-2">
              <button on:click={onCustomSize} class="rounded-full focus:outline-none focus:ring-2 focus:ring-primary_blue">
                <Tick />
              </button>
              <button
                on:click={() => {
                  inputBoxShow = true
                }}
                class="rounded-full focus:outline-none focus:ring-2 focus:ring-primary_blue"
              >
                <Remove />
              </button>
            </div>
            <input bind:value={defaultSize} type="text" class="pl-16" />
          </div>
        {/if}

        <div class="flex w-full items-center gap-4 pl-3">
          {#each color as colors}
            <button on:click={activeColor(colors)} class="dot  rounded-full p-0.5 {colorValue == colors ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-700' : ''} focus:outline-none focus:ring-2 focus:ring-primary_blue" style="background:{colors}" />
          {/each}
          <label for="input-color" class="relative flex items-center justify-center fill-textGray pr-0.5 ">
            <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-primary_blue">
              <img class="h-6 w-6 cursor-pointer rounded-full" src="https://img.favpng.com/7/23/16/color-wheel-rgb-color-model-color-gradient-complementary-colors-png-favpng-6qVjQ1RxkyK30g6yUQuZiLpQp.jpg" alt="" />
            </button>
            <input on:change={chooseColor} type="color" id="input-color" class="absolute inset-0 opacity-0" />
          </label>
        </div>
      </div>
    {/if}
  </div>
  <div class="w-75 rounded-b-md border-t-2 border-lightGray bg-darkGray px-4 py-1.5">
    <div class="flex items-center justify-end gap-2 text-textGray">
      {#if minimize}
        <button on:click={() => (minimize = false)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="minimize" /></div>
          <Minimize />
        </button>
      {:else}
        <button on:click={() => (minimize = true)} class="final-card group">
          <div class="hidden group-hover:block"><Tooltip tip="maximize" /></div>

          <Maximize />
          <div class="absolute  top-0 right-0 h-2 w-2 {textName ? 'animate-ping' : ''} rounded-full bg-red-500" />
        </button>
      {/if}
      <button class="delete group">
        <div class="hidden group-hover:block"><Tooltip tip="Delete" /></div>
        <Delete />
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  .dot {
    height: 21px;
    width: 21px;
    border-radius: 50%;
    display: flex;
  }
  .span-label {
    @apply select-none text-sm font-bold text-textGray group-focus-within:text-primary_blue;
  }
  .label-division1 {
    @apply relative flex cursor-pointer items-center justify-center rounded-md text-xs hover:bg-zinc-900;
  }
  .label-division2 {
    @apply absolute inset-y-0 left-3 flex items-center;
  }
  .align-input {
    @apply relative flex items-center justify-center rounded-md fill-textGray p-2 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }

  .size {
    @apply grid w-10 place-content-center rounded-md border-none hover:bg-zinc-900 focus:outline-none focus:ring-2  focus:ring-primary_blue active:bg-primary_blue;
  }
  .size1 {
    @apply flex h-7 w-7 items-center justify-center rounded-md text-base font-bold outline-none  hover:bg-zinc-900 focus:outline-none focus:ring-2  focus:ring-primary_blue active:bg-primary_blue;
  }
  input {
    @apply block h-10 w-full rounded-md border-none bg-lightGray text-sm text-white focus:ring-2  focus:ring-primary_blue;
  }
  .option-class {
    @apply w-full rounded-md px-4 py-1 text-sm font-bold text-textGray hover:bg-zinc-900 hover:text-primary_blue;
  }
  .down-arrow {
    @apply absolute bottom-1 right-2 hidden items-center group-focus-within:block group-hover:block;
  }
  .up-arrow {
    @apply absolute top-1 right-2 hidden items-center group-focus-within:block group-hover:block;
  }
  .icons {
    @apply relative rounded-md p-2.5 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
  .final-card {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary_blue active:bg-primary_blue;
  }
  .delete {
    @apply relative rounded-md border-none p-1.5 text-xs hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-500;
  }
</style>
