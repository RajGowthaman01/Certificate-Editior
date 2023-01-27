<script>
	import MetadataTemplate from "../modules/MetadataTemplate.svelte"
	import FileName from "../modules/FileName.svelte"
	import { fade } from "svelte/transition"
	import Tooltip from "../shared/tooltip.svelte"
	import { createEventDispatcher } from "svelte"
	import OverlappingImageUpload from "./overlappingImageUpload.svelte"

	export let pagination = true
	export let baseImgUpload = false
	const dispatch = createEventDispatcher()
	let modalOverLay = true
	let value = 0
	let components = [MetadataTemplate, FileName, OverlappingImageUpload]

	const dispatchComponent = (e) => {
		console.log(e.detail)
		value = e.detail
		console.log(components.length)
		if (value > components.length - 1) {
			console.log("value")
			dispatch("changeComponent")
			return
		}
	}
	const toggleModal = () => {
		console.log("modal toggled")
		modalOverLay = !modalOverLay
	}
</script>

<div class:hidden={!modalOverLay} class="absolute flex h-screen w-screen items-center justify-center bg-black/70 sm:p-5">
	<div class="bg-certificateSection relative aspect-[15/7] w-[700px] rounded-md  2xl:aspect-[16/8] 2xl:w-[800px]" in:fade out:fade>
		<!-- {#if Close} -->
		<button class=" group absolute top-8 right-8 cursor-pointer" on:click={toggleModal}>
			<div class="z-20 hidden group-hover:block">
				<Tooltip tooltip="Close" top={true} />
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-rose h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		<svelte:component this={components[value]} on:hideModal on:Component={dispatchComponent} />
	</div>
</div>

<!-- {/if} -->
<style lang="postcss" global>
	.pagination {
		@apply bg-primary hover:bg-primaryBlue focus:bg-primaryBlue h-4 w-4 rounded-full text-xs hover:text-white focus:outline-none active:scale-125 md:flex;
	}
</style>
