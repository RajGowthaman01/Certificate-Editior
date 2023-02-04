<script>
  import { slide, fade } from "svelte/transition"
  import UserDetails from "./UserDetails.svelte"
  import SignPlace from "./SignPlace.svelte"
  import SignClr from "./signClr.svelte"
  import EnterOtp from "./EnterOtp.svelte"

  // let uploadImageSection = true
  // let File, ImgUrl, KB, imgName
  // const imgUrl = (e) => {
  //   File = e.detail
  //   ImgUrl = URL.createObjectURL(File)
  //   KB = Math.floor(File.size / 1000).toFixed(1)
  //   console.log(ImgUrl)
  //   uploadImageSection = false
  // }

  let sections = [
    {
      id: 0,
      Title: "User Details",
      Component: UserDetails,
      Active: true,
    },
    {
      id: 1,
      Title: "Signature placement selection",
      Component: SignPlace,
      Active: false,
    },
    {
      id: 2,
      Title: "Select Signature Colour",
      Component: SignClr,
      Active: false,
    },
    {
      id: 3,
      Title: "Enter OTP",
      Component: EnterOtp,
      Active: false,
    },
  ]

  const changeActiveComponent = (id) => {
    sections = sections.map((sections) => {
      sections.Active = false
      if (sections.id == id) {
        sections.Active = true
      }
      return sections
    })
    // console.log(sections)
  }

  let img = false
  const showImg = () => {
    img = !img
  }
  let loadScreen = false
  const InitOTP = () => {
    sections[2].Active = false
    sections[3].Active = true
    loadScreen = true
  }
</script>

<main class="h-screen w-screen flex justify-center items-center">
  <!-- <div class="relative p-5 w-4/6 bg-darkGray rounded-md"> -->
  <!-- <ImageUploadSection /> -->
  <!-- <ImagePreview /> -->
  <!-- <ImgUpload /> -->
  <!-- <ImguploadSec /> -->
  <!-- </div> -->
  <div class="grid grid-cols-12 w-full h-full">
    <div class="col-span-3 flex" />
    <div class="col-span-9 flex">
      <div class="w-8/12" />
      <div class="w-4/12 h-full relative bg-darkGray">
        <h1 class="text-center text-2xl bg-primary_blue text-white py-4">Document Signature Section</h1>
        <div>
          {#each sections as section (section.id)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => changeActiveComponent(section.id)} class="{sections[sections.length - 1] == section ? '' : 'border-b'} {section.Active ? '' : 'blur-sm'} border-l-primary_blue border-b-lightGray">
              <button class="flex py-5">
                <span class="text-base text-white font-bold px-5">{section.Title}</span>
              </button>
              {#if section.Active}
                <div in:slide class="px-5">
                  <svelte:component this={section.Component} on:ShowImg={showImg} on:init={InitOTP} {loadScreen} />
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- <Empty /> -->
</main>

<style global lang="postcss">
  .btn {
    @apply rounded-[0.375rem] bg-[#0d6efd] py-[0.375rem] px-[0.75rem] font-semibold text-white;
  }
</style>
