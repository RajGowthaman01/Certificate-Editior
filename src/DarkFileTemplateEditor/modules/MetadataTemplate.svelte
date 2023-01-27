<script>
	import DropDownIcon from "../svg/dropDownIcon.svelte"
	import NextPage from "../svg/nextPage.svelte"
	import { createEventDispatcher } from "svelte"
	import PrevPage from "../svg/prevPage.svelte"
	import DisabledPrevButton from "../svg/disabledPrevButton.svelte"
	const dispatch = createEventDispatcher()
	let showSelectOptions = false
	let pagination = true
	let active = true
	let Documenttype = "Select Document Type"
	const Dropdown = () => {
		showSelectOptions = !showSelectOptions
	}
	const SelectDocumentType = (e) => {
		console.log(e)
		Documenttype = e
		Dropdown()
	}
</script>

<h1 class="mb-4 pt-8 pl-8 text-4xl text-blue-400">
	MetaData
	<br />
	Template
</h1>
<div class="grid grid-cols-2">
	<div class=" text-primaryGray pr-8 pl-8">
		<p class="text-sm">Select the MetaData Template from which key values will be imported for autocompleting Name fills</p>
	</div>
	<div class="relative mx-auto w-2/3">
		<button on:click={Dropdown} type="button" class="bg-secondary text-primaryGray focus:ring-primaryBlue relative w-full rounded-md py-2 px-4 text-left text-sm uppercase focus:outline-none focus:ring-2">
			{Documenttype}
			<span class="absolute top-0 right-0 flex h-full items-center">
				<DropDownIcon />
			</span>
		</button>
		<div class:hidden={!showSelectOptions} class="bg-secondary text-primaryGray ring-primaryBlue absolute mt-2 w-full space-y-4 rounded-md text-sm ring-1">
			<div class="w-full">
				<option on:click={() => SelectDocumentType("Sample 1")} class="SelectDocumentType">Sample 1</option>
				<option on:click={() => SelectDocumentType("Sample 2")} class="SelectDocumentType">Sample 2</option>
				<option on:click={() => SelectDocumentType("Certificate of Appreciation")} class="SelectDocumentType">Certificate of Appreciation</option>
				<option on:click={() => SelectDocumentType("Sample 3")} class="SelectDocumentType">Sample 3</option>
				<option on:click={() => SelectDocumentType("Sample 4")} class=" SelectDocumentType">Sample 4</option>
			</div>
		</div>
	</div>
</div>

<div class:hidden={!pagination} class="absolute inset-x-0 bottom-8 mx-auto flex items-center ">
	<div class="mx-auto flex">
		<nav class="flex flex-row items-center gap-4 md:justify-center">
			<button class="cursor-not-allowed" title="prev page">
				<DisabledPrevButton />
			</button>
			<button
				class="pagination"
				class:active
				title="Page 1"
				on:click={() => {
					dispatch("Component", 0)
				}}
			/>
			<button
				class="pagination "
				title="Page 2"
				on:click={() => {
					dispatch("Component", 1)
				}}
			/>
			<button
				class="pagination pointer-events-none"
				title="Page 3"
				on:click={() => {
					dispatch("Component", 2)
				}}
			/>
			<button
				title="next page"
				on:click={() => {
					dispatch("Component", 1)
				}}
			>
				<NextPage />
			</button>
		</nav>
	</div>
</div>

<style lang="postcss">
	.SelectDocumentType {
		@apply w-full cursor-pointer rounded-md py-2 px-4 text-sm text-[#949494] hover:bg-[#353535] hover:text-[#949494];
	}
	.active {
		@apply bg-primaryBlue;
	}
</style>
