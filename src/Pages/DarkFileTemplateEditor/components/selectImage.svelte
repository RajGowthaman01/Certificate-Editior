<script>
	import { onMount, onDestroy, createEventDispatcher } from "svelte"
	import { fly } from "svelte/transition"
	const dispatch = createEventDispatcher()

	onMount(() => {
		console.log("ImageLoad - onMount")
	})
	onDestroy(() => {
		console.log("ImageLoad - Destroyed")
	})
</script>

<div class=" m-auto flex" in:fly={{ x: 200, duration: 2000 }}>
	<div class="bg-lightHeaderSection mx-auto w-[600px] flex-col rounded-md px-4 pt-4 pb-4 dark:bg-[#1e1e1e]">
		<div class=" group relative flex items-center rounded-md">
			<span class="labelSpan ml-1 uppercase">File Name</span>
			<input name="field_name" class="inputValue" type="text" placeholder="" />
		</div>
		<div class="mt-3 sm:col-span-2 sm:mt-0">
			<div class=" border-primary mt-4 flex max-w-4xl justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-4">
				<div class="space-y-1 text-center">
					<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
						<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<div class="flex text-sm text-gray-600">
						<label for="file-upload" class="text-primaryBlue relative cursor-pointer rounded-md font-medium">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
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

<style lang="postcss">
	.labelSpan {
		@apply text-secondaryGray group-focus-within:text-primaryBlue group-focus-within:ring-primaryBlue absolute rounded-md text-sm outline-none focus:ring-1;
	}
	.inputValue {
		@apply bg-primary focus:bg-secondary focus:ring-primaryBlue w-full rounded-md px-4 pl-24 text-sm font-bold text-white focus:outline-none focus:ring-2;
	}
</style>
