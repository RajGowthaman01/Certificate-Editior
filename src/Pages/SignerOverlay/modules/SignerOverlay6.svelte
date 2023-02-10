<script>
  import { slide, fade } from "svelte/transition"
  import UserDetails from "../Components/UserDetails.svelte"
  import SignPlace from "../Components/SignPlace.svelte"
  import SignClr from "../Components/signClr.svelte"
  import EnterOtp from "../Components/EnterOtp.svelte"

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
  <div class="grid grid-cols-12 w-full h-full">
    <div class="col-span-3 flex bg-darkGray" />
    <div class="col-span-9 flex bg-darkGray">
      <div class="w-8/12" />
      <div class="w-4/12 h-full relative bg-lightGray">
        <h1 class="text-center text-2xl text-primary_blue py-4">Document Signature Section</h1>
        <div>
          {#each sections as section (section.id)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => changeActiveComponent(section.id)} class="m-3">
              <button class="flex rounded-md pt-3 w-full {section.Active ? 'bg-primary_blue pb-6' : 'bg-darkGray pb-3'}">
                <span class="text-xl w-full text-center text-white font-bold">{section.Title}</span>
              </button>
              <!-- <div class="flex justify-center items-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="{section.Active ? 'hidden' : ''} stroke-textGray w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div> -->
              {#if section.Active}
                <div in:slide class="mx-2">
                  <div class="-mt-3 z-10">
                    <svelte:component this={section.Component} on:ShowImg={showImg} on:init={InitOTP} {loadScreen} />
                  </div>
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
