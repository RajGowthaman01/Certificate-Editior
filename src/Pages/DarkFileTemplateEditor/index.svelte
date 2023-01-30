<script>
	import FileTemplateEditor from "./components/FileTemplateEditor.svelte"
</script>

<main>
	<FileTemplateEditor />
</main>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer base {
		@font-face {
			font-family: Roboto;
			font-weight: 300;
			src: url(/fonts/Roboto-Regular.ttf) format("ttf");
		}
	}
	main {
		@apply font-nunito;
	}
</style>
