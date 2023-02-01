<script>
  import Logo from "../../svgicons/logo.svelte"
  import Pdicon from "../../svgicons/Pdicon.svelte"
  import Settingsicon from "../../svgicons/settingsicon.svelte"
  import Analyticicon from "../../svgicons/Analyticicon.svelte"
  import Historyicon from "../../svgicons/Historyicon.svelte"
  import Docicon from "../../svgicons/Docicon.svelte"
  import Emailicon from "../../svgicons/Emailicon.svelte"
  import Msgicon from "../../svgicons/msgicon.svelte"
  import Templateicon from "../../svgicons/Templateicon.svelte"
  import Searchicon from "../../svgicons/Searchicon.svelte"
  import ImageUploadSection from "./modules/ImageUploadSection.svelte"
  import ImagePreview from "../PublishDoc/modules/imagePreview.svelte"
  import ImgUpload from "./modules/imgUpload.svelte"
  import ImguploadSec from "./modules/imguploadSec.svelte"
  import SignDoc from "./modules/SignDoc.svelte"

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

<main class="h-screen w-screen flex justify-center items-center bg-[#000000cc]">
  <!-- <div class="relative p-5 w-4/6 bg-darkGray rounded-md"> -->
  <!-- <ImageUploadSection /> -->
  <!-- <ImagePreview /> -->
  <!-- <ImgUpload /> -->
  <!-- <ImguploadSec /> -->
  <!-- </div> -->
  <div class="relative w-5/12">
    <SignDoc />
  </div>
</main>
