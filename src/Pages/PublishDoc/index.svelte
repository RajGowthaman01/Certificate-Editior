<script>
  import Navbar from "../../Components/Navbar.svelte"
  import PublishSidebar from "./Components/PublishSidebar.svelte"
  import DocumentTemplate from "./Components/DocumentTemplate.svelte"
  import DocumentUpload from "./Components/DocumentUpload.svelte"
  import RightArrow from "../../svgicons/RightArrow.svelte"
  import Leftarrow from "../../svgicons/Leftarrow.svelte"
  import PublishHeader from "./Components/PublishHeader.svelte"
  import ProgressHeader from "./Components/ProgressHeader.svelte"

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
  <div class="relative col-span-9 grid grid-cols-2 h-full bg-Analytics-primary">
    <PublishHeader />
    <div class="col-span-9 mt-12">
      <ProgressHeader />
    </div>
    <!-- <div class="absolute bottom-5 right-32">
      <div class="flex gap-10">
        <Leftarrow />
        <RightArrow />
      </div>
    </div>
    <DocumentTemplate />
    <DocumentUpload /> -->
  </div>
  <!-- <div class="absolute">
    <SignerOverlay />
  </div> -->
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
