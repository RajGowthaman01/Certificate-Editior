<div class="flex flex-col">
	<div class="flex space-x-4 bg-secondary px-4 py-4">
		<div class="canvas" id="canvas">
			<img src="assets/images/down1.png" alt="" class="h-20 w-20 flex-none rounded-md" />
		</div>
		<div class="mt-2 flex-auto space-y-1">
			<p class="imgProps">SAMPLE 1</p>
			<p class="imgProps">1280 X 720Px</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.canvas {
		@apply h-20 w-20 flex-none rounded-md bg-gray-100 object-contain;
	}
	.imgProps {
		@apply text-sm font-medium text-heading;
	}
</style>
