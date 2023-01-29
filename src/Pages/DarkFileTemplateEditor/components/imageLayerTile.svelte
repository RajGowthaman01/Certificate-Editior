<script>
	import EyeClose from "../svg/eyeClose.svelte"
	import Eye from "../svg/eye.svelte"
	import Tooltip from "../shared/tooltip.svelte"
	import ArrowDown from "../svg/arrowDown.svelte"
	import ArrowUp from "../svg/arrowUp.svelte"
	import Image from "../svg/image.svelte"
	import ImagePropertyPanel from "./imagePropertyPanel.svelte"
	export let imageUploadedSection = false
	let textEditSection
	let editSection = false
	let imageUploaded = true
	let active = true
	const openEdit = () => {
		editSection = !editSection
		imageUploadedSection = false
		imageUploaded = !imageUploaded
	}
	const editUpload = () => {
		console.log("edit upload opened")
		imageUploadedSection = !imageUploadedSection
		imageUploaded = false
	}
</script>

<div class:active class="bg-lightGray dark:bg-primary flex justify-between border-b px-4 dark:border-black ">
	<div class="flex items-center gap-3 py-2">
		<button on:click={() => (active = !active)} on:click={openEdit}>
			{#if editSection}
				<EyeClose />
			{:else}
				<Eye />
			{/if}
		</button>
		<div class="dark:text-heading text-secondaryGray">
			<Image />
		</div>
		<div class="dark:text-heading text-secondaryGray">Image</div>
	</div>

	<div class:hidden={editSection} class="flex items-center">
		<button type="button" class="group relative flex h-8 w-8 items-center justify-center rounded-md transition duration-500 ease-in-out hover:translate-y-1" on:click={editUpload} on:click={() => (textEditSection = false)}>
			<span>
				{#if imageUploadedSection}
					<div class="z-20 hidden group-hover:block">
						<Tooltip tooltip="Hide Edit" left={true} />
					</div>
					<div class="relative flex">
						<ArrowUp />
					</div>
				{:else}
					<div class="z-20 hidden group-hover:block">
						<Tooltip tooltip="Edit" left={true} />
					</div>
					<ArrowDown />
				{/if}
			</span>
		</button>
	</div>
</div>
<ImagePropertyPanel {imageUploadedSection} {imageUploaded} />

<!-- <TextPropertyPanel /> -->
<style global lang="postcss">
	.active {
		@apply dark:bg-secondary bg-lightHeaderSection;
	}
</style>
