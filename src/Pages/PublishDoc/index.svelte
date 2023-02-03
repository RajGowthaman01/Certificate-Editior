<script>
  import Navbar from "../../Components/Navbar.svelte"
  import PublishSidebar from "./Components/PublishSidebar.svelte"
  import Nexticon from "../../svgicons/Nexticon.svelte"
  import DocumentTemplate from "./Components/DocumentTemplate.svelte"
  import DocumentUpload from "./Components/DocumentUpload.svelte"
  import DoubleLeft from "../../svgicons/DoubleLeft.svelte"
  import DocumentUpload2 from "./Components/DocumentUpload2.svelte"
  import DocumentUpload3 from "./Components/DocumentUpload3.svelte"
  import SignerOverlay from "./modules/SignerOverlay.svelte"
  import SignerOverlay2 from "./modules/SignerOverlay2.svelte"
  import SignerOverlay3 from "./modules/SignerOverlay3.svelte"
  import SignerOverlay4 from "./modules/SignerOverlay4.svelte"

  let uploadImageSection = true
  let File, ImgUrl, KB, imgName
  const imgUrl = (e) => {
    File = e.detail
    ImgUrl = URL.createObjectURL(File)
    KB = Math.floor(File.size / 1000).toFixed(1)
    console.log(ImgUrl)
    uploadImageSection = false
  }
</script>

<svelte:head>
  <title>Publish Document</title>
</svelte:head>

<main class="grid h-screen grid-cols-12 relative">
  <div class="col-span-3 flex h-full w-full">
    <Navbar />
    <PublishSidebar />
  </div>
  <div class="relative col-span-9 grid grid-cols-2 h-full items-center bg-Analytics-primary">
    <!-- <PublishHeader /> -->
    <div class="absolute bottom-5 right-32">
      <div class="flex gap-56">
        <div class="inline-flex gap-2 items-center">
          <DoubleLeft />
          <span class="text-xs text-Analytics-primarytext font-medium">Prev</span>
        </div>
        <div class="inline-flex gap-2 items-center">
          <span class="text-xs text-Analytics-primarytext font-medium">Next</span>
          <Nexticon />
        </div>
      </div>
    </div>
    <!-- <DocumentTemplate /> -->
    <DocumentUpload />
  </div>
  <div class="absolute right-0 bg-lightGray">
    <!-- <SignerOverlay /> -->
    <!-- <SignerOverlay2 /> -->
    <!-- <SignerOverlay3 /> -->
    <SignerOverlay4 />
  </div>
</main>

<!-- <main class="h-screen w-screen flex justify-center items-center bg-[#000000cc]">
  <div class="relative p-5 w-4/6 bg-darkGray rounded-md">
  <ImageUploadSection />
  <ImagePreview />
  <ImgUpload />
  <ImguploadSec />
  </div>
  <div class="relative w-5/12">
    <SignDoc />
  </div>
</main> -->
<style lang="postcss">
  .option-class {
    @apply w-full border-b-2 px-3 py-1.5 text-sm font-bold text-textGray hover:text-primary_blue;
  }
</style>
