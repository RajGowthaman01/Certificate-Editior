<script>
  import { slide, fade } from "svelte/transition"
  import SignDoc from "./SignDoc.svelte"
  import SignPlace from "./SignPlace.svelte"
  import Empty from "./empty.svelte"
  import SignClr from "./signClr.svelte"
  import EnterOtp from "./EnterOtp.svelte"
  import PreOrDownDoc from "./PreOrDownDoc.svelte"

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
      Component: SignDoc,
      Active: false,
    },
    {
      id: 1,
      Title: "Signature placement selection",
      Component: SignPlace,
      Active: false,
    },
    {
      id: 3,
      Title: "Select Signature Colour",
      Component: SignClr,
      Active: false,
    },
    {
      id: 4,
      Title: "Enter OTP",
      Component: EnterOtp,
      Active: false,
    },
    {
      id: 5,
      Title: "PDF Preview (or) Download",
      Component: PreOrDownDoc,
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
</script>

<main class="h-screen w-screen flex justify-center items-center bg-[#000000cc]">
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
        <!-- <div class=" w-5/12"> -->
        {#if img}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img src="assets/images/download (1).png" alt="img" on:click={showImg} />
        {:else}
          <!-- <h1 class="text-center text-2xl text-primary_blue mb-5">Document Signature Section</h1> -->
          <div class="px-5">
            {#each sections as section (section.id)}
              <div class="{sections[sections.length - 1] == section ? '' : 'border-b'} border-textGray">
                <div class=" flex justify-between py-5">
                  <span class="text-lg text-textGray font-bold">{section.Title}</span>
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <svg on:click={() => changeActiveComponent(section.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-textGray w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="{section.Active ? 'M15 12' : 'M12 9v6m3-3'}H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {#if section.Active}
                  <div in:slide>
                    <svelte:component this={section.Component} on:ShowImg={showImg} />
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
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
