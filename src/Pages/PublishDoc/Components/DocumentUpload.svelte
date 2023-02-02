<script>
  import UploadIcon from "../../FileTemplateEditor/svgIcons/UploadIcon.svelte"
</script>

<div class="col-span-1 pl-28 space-y-7">
  <h1 class="text-4xl font-medium text-Analytics-secondarytext">Document Upload</h1>
  <p class="text-xs font-normal leading-relaxed tracking-wider text-Analytics-primarytext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores illo ipsum voluptatem mollitia ut labore exercitationem pariatur totam. Iusto.ut labore exercitationem pariatur totam. Iusto.</p>
</div>
<div class="col-span-1 pl-20">
  <form enctype="multipart/form-data" id="DocUpload" class="relative h-52 w-3/4 cursor-pointer flex-col items-center rounded-md border-2 border-dashed border-Analytics-secondarytext bg-Analytics-secondary">
    <input type="file" name="DocUpload" class="absolute inset-0 opacity-0" accept="image/*,.pdf" />
    <div class="flex h-full flex-col items-center justify-center gap-2">
      <UploadIcon />
      <p class="text-sm text-Analytics-secondarytext">Drag and Drop or Click here to Upload a File</p>
      <button class="rounded-md text-xs text-Analytics-primarytext">PNG, JPG, GIF up to 10MB</button>
    </div>
  </form>
</div>
