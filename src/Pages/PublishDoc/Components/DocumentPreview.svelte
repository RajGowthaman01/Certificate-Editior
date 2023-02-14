<script>
  export let File
  import { onMount, createEventDispatcher } from "svelte"
  import Leftarrow from "../../../svgicons/Leftarrow.svelte"
  import RightArrow from "../../../svgicons/RightArrow.svelte"
  const dispatch = createEventDispatcher()

  let pdfDoc, canvas, documentPreview, totalPages, currentpage, blobPdf, bloburl, imgHeight, imgWidth
  let showpdf = true

  onMount(async () => {
    if (File.type != "application/pdf") {
      bloburl = URL.createObjectURL(File)
      showpdf = false
      setTimeout(() => {
        imgHeight = documentPreview.naturalHeight
        imgWidth = documentPreview.naturalWidth
        dispatch("resolution", { imgHeight: imgHeight, imgWidth: imgWidth })
      }, 100)
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
    dispatch("pages", totalPages)
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
  {#if showpdf}
    <canvas bind:this={canvas} class="relative rounded-md w-[350px] max-h-[80vh] overflow-hidden" />

    <!-- <canvas id="mycanvas" class="relative rounded-md w-[380px] aspect-[8/10]  overflow-hidden" /> -->
    <div class="gap-2 items-center justify-center pt-3 {totalPages == 1 ? 'hidden' : 'flex'}">
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
    <!-- <img src={bloburl} alt="bloburl" id="Docimage" class="overflow-hidden max-h-[90vh] max-w-[380px] rounded-md 2xl:max-h-[80vh]" /> -->
    <img src={bloburl} alt="bloburl" bind:this={documentPreview} class="overflow-hidden max-h-[90vh] max-w-[600px] rounded-md 2xl:max-h-[80vh]" />
  {/if}
</div>
