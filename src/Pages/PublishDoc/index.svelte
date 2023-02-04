<script>
  import Navbar from "../../Components/Navbar.svelte"
  import PublishSidebar from "./Components/PublishSidebar.svelte"
  import DocumentTemplate from "./Components/DocumentTemplate.svelte"
  import Leftarrow from "../../svgicons/Leftarrow.svelte"
  import PublishHeader from "./Components/PublishHeader.svelte"
  import DocumentUpload from "./Components/DocumentUpload.svelte"
  import DoubleLeft from "../../svgicons/DoubleLeft.svelte"
  import DocumentUpload2 from "./Components/DocumentUpload2.svelte"
  import DocumentUpload3 from "./Components/DocumentUpload3.svelte"
  import SignerOverlay from "./modules/SignerOverlay.svelte"
  import SignerOverlay2 from "./modules/SignerOverlay2.svelte"

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
  <div class="relative col-span-9 h-full bg-Analytics-primary">
    <!-- <div class="absolute top-24 pl-[115px] pr-36 grid grid-cols-7 w-full">
      <div class="col-span-1 h-2 bg-Analytics-iconcolor " />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
    </div> -->
    <div class="absolute top-12 grid grid-cols-7 w-full">
      <div class="col-span-1 h-2 bg-Analytics-iconcolor " />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
      <div class="col-span-1 h-2 bg-Analytics-secondary border-r-2 border-r-Analytics-sidebar" />
    </div>

    <PublishHeader />

    <div class="pt-24 pb-[37.2px] h-full col-span-9 grid grid-cols-2 items-center justify-center">
      <DocumentTemplate />
    </div>

    <!-- <DocumentUpload /> -->
  </div>
  <div class="absolute bg-lightGray">
    <!-- <SignerOverlay /> -->
    <SignerOverlay2 />
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
