<script>
	import { createEventDispatcher } from "svelte"
	import Tooltip from "../shared/tooltip.svelte"
	import Tick from "../svg/tick.svelte"
	// import BaseDesignImageUpload from "./BaseImageUpload.svelte"
	import DragAndDrop from "./dragAndDropImageUpload.svelte"
	import DisabledNexPage from "../svg/disabledNexPage.svelte"
	import PrevPage from "../svg/prevPage.svelte"

	let active = true
	let baseImgUpload = true
	let PreviewBaseImage = false
	let pagination = true
	let fileBlobUrl = null

	const dispatch = createEventDispatcher()

	const handleDrop = (e) => {
		fileBlobUrl = URL.createObjectURL(e.detail.file)
		PreviewBaseImage = true
		baseImgUpload = false
		pagination = !pagination
	}
	export const removeBaseImage = () => {
		PreviewBaseImage = !PreviewBaseImage
		baseImgUpload = true
		pagination = true
	}
</script>

<div class:hidden={!baseImgUpload}>
	<DragAndDrop on:onChange={handleDrop} />
	<div class:hidden={!pagination} class="absolute inset-x-0 bottom-8 mx-auto flex items-center ">
		<div class="mx-auto flex">
			<nav class="flex flex-row items-center gap-4 md:justify-center">
				<button
					title="prev page"
					on:click={() => {
						dispatch("Component", 1)
					}}
				>
					<PrevPage />
				</button>
				<button
					class="pagination "
					title="Page 1"
					on:click={() => {
						dispatch("Component", 0)
					}}
				/>
				<button
					class="pagination"
					title="Page 2"
					on:click={() => {
						dispatch("Component", 1)
					}}
				/>
				<button
					class="pagination"
					title="Page 3"
					class:active
					on:click={() => {
						dispatch("Component", 2)
					}}
				/>
				<button class="cursor-not-allowed" title="prev page">
					<DisabledNexPage />
				</button>
			</nav>
		</div>
	</div>
</div>

<div class:hidden={!PreviewBaseImage}>
	<h1 class="text-primaryBlue mb-4 pt-8 pl-8 text-4xl dark:text-blue-400">
		Upload <br />
		Image
	</h1>
	<div class="mt-7 grid grid-cols-2 items-center 2xl:mt-16">
		<div class=" text-secondaryGray dark:text-primaryGray pr-8 pl-8">
			<p class="text-sm">
				Choose your <strong>Base Design Image</strong>
				to upload.
				<br />
				You cannot change it after your confirmation.
			</p>
		</div>
	</div>
	<div class="absolute bottom-8 left-8">
		<div class="flex gap-6">
			<button on:click={removeBaseImage} class=" hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring-2">
				<div class="z-20 hidden group-hover:block">
					<Tooltip tooltip="Choose Different ImageFile" top={true} />
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-secondaryGray dark:text-heading hover:text-primaryBlue h-6 w-6 ">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>
			</button>
			<button
				on:click={() => {
					dispatch("hideModal")
				}}
				class="hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring-2 "
			>
				<div class="z-20 hidden group-hover:block">
					<Tooltip tooltip="Upload Image" top={true} />
				</div>

				<Tick />
			</button>
		</div>
	</div>

	<div class="absolute inset-y-0 -right-[140px] flex h-full w-[600px] items-center justify-center">
		<div class="flex items-center justify-center">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img id="displayImage" src={fileBlobUrl} alt="preview image" class="max-h-[90vh] max-w-[400px] rounded-md 2xl:max-h-[80vh] 2xl:max-w-[450px]" />
		</div>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply bg-primaryBlue;
	}
</style>
