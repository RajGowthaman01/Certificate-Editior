<script>
  import { editorStore } from "../../../Stores/stores"
  import { clickOutside } from "../../../scripts/clickOutSide"
  let fontList = true
</script>

{#if fontList}
  <div class="absolute flex min-h-screen w-screen flex-col justify-center overflow-hidden bg-topNavSvgBg/60 py-6 sm:py-12">
    <div class=" flex items-center justify-center">
      <div class="shadow overflow-hidden rounded">
        <table class="min-w-full bg-white">
          <thead class="bg-secondary text-white" use:clickOutside on:outclick={() => (fontList = false)}>
            <tr>
              <th class="w-24 text-left py-3 px-4 uppercase font-semibold text-sm">S.no</th>
              <th class="w-52 text-left py-3 px-4 uppercase font-semibold text-sm">FileName</th>
              <th class="text-left w-52 py-3 px-4 uppercase font-semibold text-sm">FontName</th>
              <th class="text-left w-52 py-3 px-4 uppercase font-semibold text-sm">FontStyle</th>
            </tr>
          </thead>
          <tbody class="text-heading bg-primary border-b border-gray-500">
            <tr>
              <td class="w-24 text-left py-3 px-4">{$editorStore.fonts.id}</td>
              <td class="w-52 text-left py-3 px-4">{$editorStore.fonts.fileName}</td>
              <td class=" w-52 text-left py-3 px-4">{$editorStore.fonts.fontName}</td>
              <td class="w-52 text-left py-3 px-4">
                {$editorStore.fonts.fontStyle}
              </td>
            </tr>
          </tbody>
          <tbody class="text-heading bg-primary">
            <tr>
              <td class="w-24 text-left py-3 px-4">{$editorStore.fonts.id}</td>
              <td class="w-52 text-left py-3 px-4">{$editorStore.fonts.fileName}</td>
              <td class="text-left w-52 py-3 px-4">{$editorStore.fonts.fontName}</td>
              <td class="text-left w-52 py-3 px-4">
                {$editorStore.fonts.fontStyle}
              </td>
            </tr>
          </tbody>
          <!-- <tbody class="text-heading bg-primary">
          <tr>
            <td class="w-24 text-left py-3 px-4">{$editorStore.fonts[0].id}</td>
            <td class="w-52 text-left py-3 px-4">{$editorStore.fonts[0].fileName}</td>
            <td class="text-left w-52 py-3 px-4">{$editorStore.fonts[0].fontName}</td>
            <td class="text-left w-52 py-3 px-4">
              {$editorStore.fonts[0].fontStyle}
            </td>
          </tr>
        </tbody> -->
        </table>
      </div>
    </div>
  </div>
{/if}
