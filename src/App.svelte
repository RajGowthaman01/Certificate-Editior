<script>
	import Index from "./Pages/FileTemplateEditor/Index.svelte"
	import Index2 from "./Pages/DarkFileTemplateEditor/index.svelte"
	let showIndex = false,
		showIndex1 = false,
		showBtn = true
	$: if (showIndex || showIndex1) {
		showBtn = false
	}
</script>

<main>
	{#if showBtn}
		<div class="mx-auto flex h-screen w-2/4 items-center justify-between">
			<button on:click={() => (showIndex = true)} class="rounded-md bg-blue-500 px-2 py-1 font-semibold text-white"> KARTHI </button>
			<button on:click={() => (showIndex1 = true)} class="rounded-md bg-blue-500 px-2 py-1 font-semibold text-white"> VENKATESH </button>
		</div>
	{/if}
	{#if showIndex}
		<Index />
	{/if}
	{#if showIndex1}
		<!-- <h1>VENKATESH</h1> -->
		<Index2 />
	{/if}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	.spanLabelName {
		@apply text-textGray group-focus-within:text-primary_blue select-none text-sm font-bold;
	}

	.label-div {
		@apply absolute inset-y-0 left-3 flex items-center;
	}
	.inputbox {
		@apply bg-lightGray focus:ring-primary_blue block h-10 w-3/4 rounded-md border-none text-sm text-white  focus:ring-2;
	}
</style>
