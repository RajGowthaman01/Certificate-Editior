<script>
	import ImageLayerTile from "./imageLayerTile.svelte"
	import TextLayerTile from "./textLayerTile.svelte"
	import ImagePreview from "./imagePreview.svelte"
</script>

<div class="dark:bg-certificateSection bg-lightGray flex h-screen min-w-[330px] flex-col border-r dark:border-black " style="box-shadow:30px 0px 5px -5px rgb(0,0,0)">
	<ImagePreview />
	<div class="flex py-2 px-4">
		<div class="dark:text-heading text-secondaryGray flex font-medium">Layers</div>
	</div>
	<div class="overflow-y-auto overflow-x-hidden	">
		<div class="mb-20 flex  flex-col">
			<!-- {#each Array(30) as _, index (index)} -->
			<ImageLayerTile />
			<TextLayerTile />
			<!-- {/each} -->
		</div>
	</div>
</div>
