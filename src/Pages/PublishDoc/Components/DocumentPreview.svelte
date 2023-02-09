<script>
  export let File
  import { onMount } from "svelte"
  import Leftarrow from "../../../svgicons/Leftarrow.svelte"
  import RightArrow from "../../../svgicons/RightArrow.svelte"

  let pdfDoc,
    totalPages,
    currentpage,
    showpdf = true

  let blobPdf, bloburl
  onMount(async () => {
    if (File.type == "image/png" || File.type == "image/jpg" || File.type == "image/jpeg") {
      bloburl = URL.createObjectURL(File)
      showpdf = false
      await showPdf(bloburl)
    } else if (File.type == "application/pdf") {
      blobPdf = URL.createObjectURL(File)
      showpdf = true
      await showPdf(blobPdf)
    }
  })

  /**
   * Function for loading the pdf document using pdfjs library
   * @param blobPdf {String} blob url for the pdf to be previewed
   */
  const showPdf = async (blobPdf) => {
    console.log("pdfjsLib", pdfjsLib)
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/lib/pdf.worker.js"
    let loadingTask = pdfjsLib.getDocument(blobPdf)
    loadingTask = loadingTask.promise
    pdfDoc = await loadingTask
    totalPages = pdfDoc.numPages
    currentpage = 1
    showPage(currentpage)
  }

  /**
   * Function for rendering the particular page of the document
   * @param pageno {Number} Page Number of the pdf document
   */
  const showPage = async (pageno) => {
    let page = await pdfDoc.getPage(pageno)
    let viewport = page.getViewport({ scale: 1 })
    // Prepare canvas using PDF page dimensions
    let canvas = document.getElementById("mycanvas")
    let context = canvas.getContext("2d")
    canvas.height = viewport.height
    canvas.width = viewport.width
    // Render PDF page into canvas context
    let renderContext = {
      canvasContext: context,
      viewport: viewport,
    }
    await page.render(renderContext).promise
  }

  /**
   * Function to move to the previous page
   */
  const nextpage = () => {
    if (currentpage < totalPages) {
      currentpage++
      showPage(currentpage)
    }
  }
  /**
   * Function to move to the previous page
   */
  const previouspage = () => {
    if (currentpage > 1) {
      currentpage--
      showPage(currentpage)
    }
  }
</script>

<div id="pdfPreviewSection" class="relative rounded-md">
  <!-- <div class="absolute inset-0 flex justify-center bg-gradient-to-b pb-3 via-transparent items-end from-transparent to-[#000000cc] z-10 rounded-md">
    
  </div> -->

  {#if showpdf}
    <canvas id="mycanvas" class="relative rounded-md w-[400px]  max-h-[80vh] overflow-hidden" />
    <!-- <canvas id="mycanvas" class="relative rounded-md w-[380px] aspect-[8/10]  overflow-hidden" /> -->
    <div class="flex gap-2 items-center justify-center pt-3">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={previouspage} class={currentpage > 1 ? "cursor-pointer" : "cursor-not-allowed pointer-events-none"}>
        <Leftarrow />
      </span>
      <span class="text-white">{currentpage} / {totalPages}</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={nextpage} class={currentpage < totalPages ? "cursor-pointer" : "cursor-not-allowed pointer-events-none"}>
        <RightArrow />
      </span>
    </div>
  {:else}
    <img src={bloburl} alt="bloburl" class="overflow-hidden max-h-[90vh] max-w-[600px] rounded-md 2xl:max-h-[80vh]" />
  {/if}
</div>
