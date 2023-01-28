<script>
  import FileName from "./Components/FileName.svelte"
  import MetaDataTemplate from "./Components/MetaDataTemplate.svelte"
  import UploadFile from "./Components/UploadFile.svelte"
</script>

<div class="flex flex-col space-y-4">
  <div>
    <h1 class="text-center text-2xl font-bold text-white">
      File Template Editor
    </h1>
  </div>
  <div
    class="parent-div relative flex aspect-[16/10] w-[720px] flex-col  rounded-md bg-white p-5 dark:bg-darkGray"
  >
    <MetaDataTemplate />
    <FileName />
    <UploadFile />
  </div>

  <div class="mx-auto">
    <button
      type="button"
      class="inline-flex items-center rounded border border-transparent bg-indigo-600 px-6 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >CONFIRM</button
    >
  </div>
</div>
