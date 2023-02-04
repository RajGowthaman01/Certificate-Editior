<script>
  import { slide, fade } from "svelte/transition"
  import UserDetails from "../Components/UserDetails.svelte"
  import SignPlace from "../Components/SignPlace.svelte"
  import SignClr from "../Components/signClr.svelte"
  import EnterOtp from "../Components/EnterOtp.svelte"

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
      complete: false,
    },
    {
      id: 1,
      Title: "Signature placement selection",
      Component: SignPlace,
      Active: false,
      complete: false,
    },
    {
      id: 2,
      Title: "Select Signature Colour",
      Component: SignClr,
      Active: false,
      complete: false,
    },
    {
      id: 3,
      Title: "Enter OTP",
      Component: EnterOtp,
      Active: false,
      complete: false,
    },
  ]

  const changeActiveComponent = (id) => {
    sections = sections.map((sections) => {
      sections.Active = false
      if (sections.id == id) {
        sections.Active = true
        // sections.complete = false
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

  const gotoNextSignStep = (id) => {
    console.log(id)
    sections = sections.map((sections) => {
      if (sections.id == id) {
        sections.Active = false
        sections.complete = true
        // console.log(a)
      } else if (sections.id == id + 1) {
        console.log(id + 1)
        console.log(sections)
        sections.Active = true
        console.log(sections)
      }
      return sections
    })
    console.log(sections)
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
            <div class="{sections[sections.length - 1] == section ? '' : 'border-b'} {section.Active ? '' : ''} border-l-primary_blue border-b-lightGray">
              <button class="flex items-center gap-5 p-5">
                {#if (section.Active && !section.complete) || (section.Active && section.complete)}
                  <span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <span class="absolute h-4 w-4 rounded-full bg-indigo-200" />
                    <span class="relative block h-2 w-2 rounded-full bg-primary_blue animate-ping" />
                  </span>
                {:else if !section.Active && !section.complete}
                  <div class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <div class="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                  </div>
                {:else if !section.Active && section.complete}
                  <span class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <svg class="h-full w-full text-primary_blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                  </span>
                {/if}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span on:click={() => changeActiveComponent(section.id)} class="text-base text-white font-bold">{section.Title}</span>
              </button>
              {#if section.Active}
                <div in:slide class="px-5 relative">
                  <svelte:component this={section.Component} on:ShowImg={showImg} on:init={InitOTP} {loadScreen} on:nextStep={() => gotoNextSignStep(section.id)} />
                </div>
                <button on:click={() => gotoNextSignStep(section.id)} class="btn absolute right-5 bottom-5 w-20 {sections[3] == section ? 'hidden' : ''}">next</button>
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
