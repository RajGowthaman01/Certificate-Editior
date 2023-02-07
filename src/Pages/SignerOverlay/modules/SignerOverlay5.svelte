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
    <div class="col-span-3 flex" />
    <div class="col-span-9 flex">
      <div class="w-8/12" />
      <div class="w-4/12 h-full relative bg-lightGray">
        <h1 class="text-center text-2xl bg-primary_blue text-white py-4">Document Signature Section</h1>
        <div>
          {#each sections as section (section.id)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => changeActiveComponent(section.id)} class=" {section.Active ? 'border-primary_blue' : 'border-red-500'} border-l-2 bg-darkGray m-5">
              <button class="flex p-3 w-full">
                <span class="text-base w-full text-start text-white font-bold">{section.Title}</span>
              </button>
              {#if section.Active}
                <div in:slide class="px-5">
                  <svelte:component this={section.Component} on:ShowImg={showImg} on:init={InitOTP} {loadScreen} />
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
