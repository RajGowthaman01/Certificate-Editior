<script>
	import { createEventDispatcher } from "svelte"
	import NextPage from "../svg/nextPage.svelte"
	import PrevPage from "../svg/prevPage.svelte"
	const dispatch = createEventDispatcher()
	let active = true
	let hidden = true
	let pagination = true
</script>

<h1 class="text-primaryBlue mb-4 pt-8 pl-8 text-4xl dark:text-blue-400">
	File
	<br />
	Name
</h1>
<div class="grid  grid-cols-2">
	<div class=" text-primaryGray pr-8 pl-8">
		<p class="text-sm">
			Enter Your desired <strong>File Name</strong>
			. You cannot change your File Name once you confirm.
		</p>
	</div>

	<div class="relative mx-auto w-2/3">
		<div class="w-full text-center">
			<div class="group w-full items-center rounded-md">
				<input name="field_name" class="inputValue" type="text" placeholder="" />
			</div>
		</div>
	</div>
</div>

<div class:hidden={!pagination} class="absolute inset-x-0 bottom-8 mx-auto flex items-center ">
	<div class="mx-auto flex">
		<nav class="flex flex-row items-center gap-4 md:justify-center">
			<button
				title="prev page"
				on:click={() => {
					dispatch("Component", 0)
				}}
			>
				<PrevPage />
			</button>
			<button
				class="pagination"
				title="Page 1"
				on:click={() => {
					dispatch("Component", 0)
				}}
			/>
			<button
				class="pagination"
				class:active
				title="Page 2"
				on:click={() => {
					dispatch("Component", 1)
				}}
			/>
			<button
				class="pagination"
				title="Page 3"
				on:click={() => {
					dispatch("Component", 2)
				}}
			/>
			<button
				title="next page"
				on:click={() => {
					dispatch("Component", 2)
				}}
			>
				<NextPage />
			</button>
		</nav>
	</div>
</div>

<style lang="postcss">
	.inputValue {
		@apply bg-secondary text-heading focus:bg-secondary focus:ring-primaryBlue w-full rounded-md  px-4 py-2 text-sm uppercase focus:outline-none focus:ring-1;
	}
	.active {
		@apply bg-primaryBlue;
	}
</style>
