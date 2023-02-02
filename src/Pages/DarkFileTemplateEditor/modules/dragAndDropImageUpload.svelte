<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let baseImgUpload = true
	let file = null
	let fileInput = document.createElement("input")
	fileInput.type = "file"

	/**
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
	export const fileDrop = (e) => {
		file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]
	}

	$: dispatch("onChange", { file })
</script>

{#if baseImgUpload}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class:hidden={!baseImgUpload} class="h-[326px] w-full 2xl:h-[400px]" on:click={openFileInput} on:dragover|preventDefault|stopPropagation on:drop|preventDefault|stopPropagation={fileDrop}>
		<div class="flex-col">
			<h1 class="text-primary_blue mb-4 pt-8 pl-8 text-4xl dark:text-blue-400">
				Upload <br />
				Image
			</h1>
		</div>
		<div class="mt-2 grid grid-cols-2 items-center 2xl:mt-12">
			<div class="flex-col">
				<div class=" text-secondaryGray dark:text-primaryGray space-y-2 pr-8 pl-8">
					<p class="text-justify text-sm">
						Choose your <strong>Base Design Image</strong>
						to upload.
						<br />
						You cannot change it after your confirmation.
					</p>
				</div>
				<p class="text-secondaryGray dark:text-primaryGray my-auto ml-8 mt-2 text-sm">
					Click to Upload a File or <strong> Drag </strong> it here
				</p>
			</div>

			<div class="mx-auto flex justify-center space-y-2 rounded-md text-center">
				<svg class="text-primary_blue mx-auto h-16 w-16 2xl:h-20 2xl:w-20 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
					<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<div class="flex text-sm text-gray-600">
					<label for="file-upload" class="text-primary_bluefocus-within:outline-none relative cursor-pointer rounded-md font-medium">
						<input id="file-upload" name="file-upload" type="file" class="sr-only" />
					</label>
				</div>
			</div>
		</div>
	</div>
{/if}
