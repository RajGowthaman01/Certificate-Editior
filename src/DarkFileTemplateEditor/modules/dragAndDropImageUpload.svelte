<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()
	import DisabledNexPage from "../svg/disabledNexPage.svelte"
	import PrevPage from "../svg/prevPage.svelte"

	export let baseImgUpload = true
	let pagination = true
	let active = true
	let file = null
	let fileInput = document.createElement("input")
	fileInput.type = "file"

	/**
	 *
	 * @param e - an event targetting files to be selected
	 */
	fileInput.onchange = (e) => {
		file = e.target.files[0]
	}
	/** @function
	 * @name openFileInput - to open file input box
	 */
	const openFileInput = () => {
		fileInput.click()
	}

	/** @function
	 * @name openFileInput - to open file input box
	 * @param e
	 */
	const fileDrop = (e) => {
		file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]
	}

	$: dispatch("onChange", { file })
</script>

{#if baseImgUpload}
	<div class="h-full w-full" on:dragover|preventDefault|stopPropagation on:drop|preventDefault|stopPropagation={fileDrop}>
		<div class="flex-col">
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
				<div class="mx-auto flex w-2/3 flex-col items-center justify-center rounded-md">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="h-full w-full" on:click={openFileInput}>
						<div class="border-primaryGray mt-1  flex items-center justify-center space-y-2 rounded-md border border-dotted px-6 pt-5 pb-6 text-center">
							<div class="space-y-1 text-center">
								<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
									<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<div class="flex text-sm text-gray-600">
									<label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
										<span>Upload a file</span>
										<input id="file-upload" name="file-upload" type="file" class="sr-only" />
									</label>
									<p class="pl-1">or drag and drop</p>
								</div>
								<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- </div> -->
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
						class="pagination pointer-events-none"
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
					<button class="pointer-events-none cursor-not-allowed" title="prev page">
						<DisabledNexPage />
					</button>
				</nav>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.active {
		@apply bg-primaryBlue;
	}
</style>
