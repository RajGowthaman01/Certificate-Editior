<script>
	import EyeClose from "../svg/eyeClose.svelte"
	import Eye from "../svg/eye.svelte"
	import Tooltip from "../shared/tooltip.svelte"
	import ChevronUp from "../svg/chevronUp.svelte"
	import DropDownIcon from "../svg/dropDownIcon.svelte"
	import TextPropertyPanel from "./textPropertyPanel.svelte"
	import Text from "../svg/text.svelte"

	export let textEditSection = false
	let editSection = false
	let imageUploadedSection
	let active = true

	const openEdit = () => {
		editSection = !editSection
		textEditSection = false
	}
	const editUpload = () => {
		textEditSection = !textEditSection
	}
</script>

<div class:active class="shadow-b relative flex justify-between  bg-primary px-4 shadow-lg">
	<div class="flex items-center gap-3 py-2">
		<button on:click={() => (active = !active)} on:click={openEdit} on:click={() => (imageUploadedSection = !imageUploadedSection)}>
			{#if editSection}
				<EyeClose />
			{:else}
				<Eye />
			{/if}
		</button>
		<span class="h-5 w-5 fill-heading">
			<Text />
		</span>
		<div class="text-heading">Text</div>
	</div>

	<div class:hidden={editSection} class="flex items-center">
		<button type="button" class="group relative flex h-8 w-8 items-center justify-center rounded-md" on:click={editUpload}>
			<span>
				{#if textEditSection}
					<div class="z-50 hidden overflow-x-visible group-hover:block">
						<Tooltip tooltip="Hide Edit" top={true} />
					</div>
					<div class="relative flex stroke-[3px] ">
						<ChevronUp />
					</div>
				{:else}
					<div class="z-20 hidden group-hover:block">
						<Tooltip tooltip="Edit" top={true} />
					</div>
					<DropDownIcon />
				{/if}
			</span>
		</button>
	</div>
</div>
<TextPropertyPanel {textEditSection} />

<!-- <style lang="postcss">
	.active {
		@apply dark:bg-secondary bg-lightHeaderSection;
	}
</style> -->
