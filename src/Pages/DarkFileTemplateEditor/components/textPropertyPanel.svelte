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
	let color = ["Red", "Orange", "Yellow", "SkyBlue", "DarkBlue"]
	let colorPicked = "Yellow"
	let defaultSize = ""
	let number = []
	let displayNumbers = []
	let disable = false
	let hide = false

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
	<div class="bg-lightHeaderSection dark:bg-secondary flex h-full w-[330px] flex-col border-b border-r border-white/60 dark:border-black " in:fly={{ y: -200, duration: 1500 }} out:fly={{ y: -200, duration: 2000 }}>
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
								<div class="{fontName ? 'flex' : 'hidden'} bg-secondary text-primary absolute z-10 w-full rounded-md px-2  text-sm font-bold ring-2 ring-blue-500">
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
									<span class="group-focus-within:text-bg-primaryBlue text-secondary text-xs font-bold">FONT</span>
								</div>
								<input type="text" class="border-darkGray bg-lightGray text-textGray focus:border-bg-primaryBlue block h-10 w-full  rounded-md pl-16 text-sm sm:pl-14" />
							</div>
						{/if}
					</div>
					<div class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2">
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
					<div class="bg-primary group  relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:outline-none">
						<div class="labelSpan text-secondaryGray">X</div>
						<input name="field_name" class="inputField" type="number" min="0" placeholder="" />
					</div>
					<div class="bg-primary focus:bg-secondary focus:ring-primaryBlue group relative mx-auto flex w-2/5 items-center justify-between rounded-md focus:outline-none focus:ring-2">
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
				<div class=" group mt-2 flex h-9 ">
					{#if SingleClickFocus}
						<button on:click={decFontSize} class=" group">
							<div class="hidden group-hover:block"><Tooltip tooltip="Min Font Size" top={true} /></div>
							<FontSizeReduce />
						</button>
						<div class="group flex items-center justify-center gap-8">
							{#each displayNumbers as Size}
								<button on:dblclick={InputShow} on:click={activeSize(Size)} class="FontSize hover:text-primaryBlue  group-active:text-primary  {fontSize == Size ? 'text-white' : 'text-gray-500'}">{Size}</button>
							{/each}
						</div>
						<button on:click={incFontSize} class="group mr-6">
							<div class="hidden group-hover:block"><Tooltip tooltip="Max Font Size" top={true} /></div>
							<FontSizeIncrease />
						</button>
					{:else}
						<div class="dbClickLabel w-full ">
							<div class="label-division2">
								<span class="span-label mr-4">SIZE</span>
							</div>
							<div class="focus:ring-primaryBlue group-focus-within:text-primaryBlue absolute inset-y-1.5 right-4 flex gap-3 focus:ring-2">
								<button on:click={onCustomSize} class="focus:ring-primaryBlue rounded-full focus:outline-none focus:ring-2">
									<Tick />
								</button>
								<button
									on:click={() => {
										SingleClickFocus = true
									}}
									class="focus:ring-primaryBlue rounded-full focus:outline-none focus:ring-2"
								>
									<Int />
								</button>
							</div>
							<input bind:value={defaultSize} type="number" class="text-heading absolute bg-transparent py-3 focus:outline-none" />
						</div>
					{/if}
				</div>
				<div class="bg-primary/50 mt-3 h-0.5 w-full" />

				<div class="flex w-full flex-row items-center justify-center gap-3">
					<div class="flex w-1/2 flex-col">
						<div class="text-secondaryGray mt-3 ml-2 flex text-sm">Font style</div>
						<div class="mt-1 flex items-center justify-between gap-3 text-base ">
							<div class="hover:ring-primaryBlue group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2">
								<div class=" hidden group-hover:block "><Tooltip tooltip="Normal" top={true} /></div>
								<div class="group-hover:text-primaryBlue flex text-2xl  text-white ">N</div>
							</div>

							<div class="hover:ring-primaryBlue group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:ring-2">
								<div class=" hidden group-hover:block "><Tooltip tooltip="Bold" top={true} /></div>
								<p class="group-hover:text-primaryBlue flex  text-2xl capitalize text-[#6c6c6c]">B</p>
							</div>
							<div class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2">
								<div class=" hidden group-hover:block "><Tooltip tooltip="Underline" top={true} /></div>
								<div class="group-hover:text-primaryBlue flex  text-2xl text-[#6c6c6c] underline">U</div>
							</div>
						</div>
					</div>
					<div class=" flex w-1/2 flex-col">
						<div class="text-secondaryGray mt-3 ml-2 flex text-sm">Align Items</div>
						<div class="mt-1  flex items-center justify-between gap-3 text-base text-[#444549]">
							<div class="hover:text-primaryBlue hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
								<div class=" hidden group-hover:block "><Tooltip tooltip="Left Align" top={true} /></div>
								<AlignLeft />
							</div>
							<div class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
								<div class=" hidden group-hover:block "><Tooltip tooltip="Right Align" top={true} /></div>
								<AlighRight />
							</div>
							<div class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-md hover:ring-2 ">
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
						<button on:click={focusedColor(colors)} class="roundedColor rounded-full p-0.5 {colorPicked == colors ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-700' : ''} focus:ring-primaryBlue focus:outline-none focus:ring-2" style="background:{colors}" />
					{/each}
					<label for="input-color" class="relative flex cursor-pointer items-center justify-center pr-1 ">
						<button type="color" class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring">
							<div class=" hidden group-hover:block "><Tooltip tooltip="Add New Color" top={true} /></div>
							<img src="/assets/images/color-circle.png" alt="" class="h-8 w-8" />
							<input on:change={newColor} type="color" id="input-color" class="absolute inset-0 opacity-0" />
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
		@apply text-secondaryGray hover:bg-secondary hover:text-primaryBlue w-full cursor-pointer rounded-md px-2 py-1 text-sm font-bold;
	}
	.inputDiv {
		@apply bg-secondary hover:bg-secondary relative flex cursor-pointer items-center justify-center rounded-md text-xs;
	}
	.dbClkInputDiv {
		@apply bg-primary absolute inset-y-0 inset-x-0 mx-auto flex items-center rounded-md;
	}
	.positonHolder {
		@apply text-secondaryGray ml-1 text-base font-bold;
	}
	.labelSpan {
		@apply text-secondaryGray focus:ring-primaryBlue group-focus-within:text-primaryBlue absolute rounded-md text-sm outline-none focus:ring-1;
	}
	/* .inputValue {
		@apply bg-primary focus:bg-secondary focus:ring-primaryBlue w-full rounded-md px-4 pl-16 text-sm text-white focus:outline-none focus:ring-2;
	} */
	.fontSizeSelect {
		@apply text-secondaryGray flex items-center text-base;
	}
	.FontSize {
		@apply hover:bg-secondary flex h-7 w-7 items-center justify-center rounded-md text-base font-bold  outline-none focus:outline-none;
	}
	.span-label {
		@apply text-secondaryGray group-focus-within:text-primaryBlue mr-10 select-none text-sm font-bold;
	}
	.dbClickLabel {
		@apply bg-primary group-focus-within:bg-secondary group-focus-within:text-primaryBlue group-focus-within:ring-primaryBlue relative flex cursor-pointer items-center justify-center rounded-md py-1 text-xs outline-none group-focus-within:ring-2;
	}
	.label-division2 {
		@apply absolute left-3 flex w-full items-center py-1;
	}
</style>
