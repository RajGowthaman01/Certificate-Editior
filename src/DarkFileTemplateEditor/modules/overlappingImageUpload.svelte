<script>
	import { createEventDispatcher } from "svelte"
	import Tooltip from "../shared/tooltip.svelte"
	import Tick from "../svg/tick.svelte"
	import BaseDesignImageUpload from "./BaseDesignImageUpload.svelte"

	let baseImgUpload = true
	let PreviewBaseImage = false
	let pagination = true
	let fileBlobUrl = null

	const dispatch = createEventDispatcher()

	const handleDrop = (e) => {
		fileBlobUrl = URL.createObjectURL(e.detail.file)
		PreviewBaseImage = !PreviewBaseImage
		baseImgUpload = !baseImgUpload
		pagination = !pagination
	}
	export const removeBaseImage = () => {
		PreviewBaseImage = !PreviewBaseImage
		baseImgUpload = true
		pagination = true
	}
</script>

{#if baseImgUpload}
	<BaseDesignImageUpload on:onChange={handleDrop} />
{/if}

{#if PreviewBaseImage}
	<div class="relative flex items-center">
		<div class="bg-certificateSection aspect-[18/10] w-full flex-col">
			<h1 class="mb-4 pt-16 pl-16 text-4xl text-blue-400">
				Upload <br />
				Image
			</h1>
			<div class="grid grid-cols-2">
				<div class=" text-primaryGray pr-8 pl-16">
					<p class="text-sm">
						Choose your <strong>Base Design Image</strong>
						to upload.
						<br />
						You cannot change it after your confirmation.
					</p>
				</div>
			</div>
			<div class="absolute bottom-10 left-16">
				<div class="flex gap-6">
					<button on:click={removeBaseImage} class=" hover:ring-primaryBlue group relative flex h-8 w-8 items-center justify-center rounded-full hover:ring-2">
						<div class="z-20 hidden group-hover:block">
							<Tooltip tooltip="Choose Different ImageFile" top={true} />
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-heading hover:text-primaryBlue h-6 w-6 ">
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
		</div>
		<img src={fileBlobUrl} alt="" class="absolute -right-[80px] w-[600px] rounded-md" />
	</div>
{/if}

<style lang="postcss">
</style>
