<script>
  import Leftarrow from "../../../svgicons/Leftarrow.svelte"
  import UploadIcon from "../../FileTemplateEditor/svgIcons/UploadIcon.svelte"
</script>

<div class="col-span-2 flex flex-col gap-5 h-full items-start justify-center p-8">
  <h1 class="text-5xl font-medium text-Analytics-secondarytext">Document Upload</h1>
  <p class="text-xs w-3/5 font-normal leading-relaxed tracking-wider text-Analytics-primarytext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores illo ipsum voluptatem mollitia ut labore exercitationem pariatur totam. Iusto.ut labore exercitationem pariatur totam. Iusto.</p>

  <div class="flex w-full items-center gap-96">
    <form enctype="multipart/form-data" id="DocUpload" class="relative h-52 w-1/2 mt-5 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-Analytics-secondarytext bg-Analytics-secondary">
      <input type="file" name="DocUpload" class="absolute inset-0 opacity-0" accept="image/*,.pdf" />
      <div class="flex h-full flex-col items-center justify-center gap-2">
        <UploadIcon />
        <p class="text-sm text-Analytics-secondarytext">Drag and Drop or Click here to Upload a File</p>
        <button class="rounded-md text-xs text-Analytics-primarytext">PNG, JPG, GIF up to 10MB</button>
      </div>
    </form>

    <div class="flex mt-44 gap-8">
      <button class="inline-flex items-center gap-2 text-white"><Leftarrow /> Prev</button>
      <button class="px-4 py-1.5 h-10 bg-Analytics-iconcolor text-white rounded-md">Next</button>
    </div>
  </div>
</div>
