<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let baseImgUpload = true
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
			<h1 class="mb-4 pt-8 pl-8 text-4xl text-blue-400">
				Upload <br />
				Image
			</h1>
			<div class="grid grid-cols-2">
				<div class=" text-primaryGray pr-8 pl-8">
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
						<div class="border-primaryGray mt-1  flex items-center justify-center space-y-2 rounded-md border border-dotted px-6 pt-8 pb-8 text-center">
							<div class="space-y-1 text-center">
								<svg class="text-primaryBlue mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
									<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<div class="flex text-sm text-gray-600">
									<label for="file-upload" class="text-primaryBluefocus-within:outline-none relative cursor-pointer rounded-md font-medium">
										<span class="text-primaryBlue">Upload a file</span>
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
	</div>
{/if}
