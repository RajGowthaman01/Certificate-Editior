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
    loadScreen = true

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

  const gotoBackSignStep = (id) => {
    console.log(id)
    sections = sections.map((sections) => {
      if (sections.id == id) {
        sections.Active = false
      } else if (sections.id == id - 1) {
        console.log(id - 1)
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
    <div class="col-span-9 h-full flex">
      <div class="w-8/12" />
      <div class="w-4/12 relative h-full bg-darkGray">
        <h1 class="text-center text-2xl bg-primary_blue text-white py-4">Document Signature Section</h1>
        <div class="p-5 w-full">
          {#each sections as section (section.id)}
            <ol class="overflow-hidden">
              <li class="relative pb-4">
                <div class="absolute{sections[sections.length - 1] == section ? 'hidden' : ''} {section.complete ? 'bg-primary_blue' : 'bg-white'} top-0 left-2 -ml-px mt-0.5 h-full w-0.1 opacity-50" aria-hidden="true" />
                <div class="group relative flex items-start">
                  {#if (section.Active && !section.complete) || (section.Active && section.complete)}
                    <span class="flex items-center" aria-hidden="true">
                      <span class="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                        <span class="h-2 w-2 rounded-full bg-primary_blue animate-ping" />
                      </span>
                    </span>
                  {:else if !section.Active && !section.complete}
                    <span class="flex items-center" aria-hidden="true">
                      <span class="relative z-10 left-1 flex h-2 w-2 items-center justify-center rounded-full border-2 border-gray-300 bg-white" />
                    </span>
                  {:else if !section.Active && section.complete}
                    <span class="flex items-center">
                      <span class="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary_blue" />
                    </span>
                  {/if}
                  <div class="{section.Active ? '' : 'hidden'}w-4 h-4 ml-2 mt-0.5 rounded-sm rotate-45 bg-lightGray" />
                  <span class="flex w-full -ml-2.5 flex-col bg-lightGray rounded-md">
                    {#if section.Active}
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <span class="text-base text-white font-bold mb-3 cursor-pointer text-center pt-2" on:click={() => changeActiveComponent(section.id)}>{section.Title}</span>
                      <div in:slide class="relative w-full my-auto px-5 pb-6">
                        <svelte:component this={section.Component} on:ShowImg={showImg} on:init={() => gotoNextSignStep(section.id)} {loadScreen} on:nextStep={() => gotoNextSignStep(section.id)} />
                      </div>
                    {/if}
                  </span>
                </div>
              </li>
              {#if section.Active}
                <button on:click={() => gotoBackSignStep(section.id)} class="btn absolute left-5 bottom-5 z-10 w-20 {sections[0] == section ? 'hidden' : ''}">Back</button>
              {/if}
              {#if section.Active}
                <button on:click={() => gotoNextSignStep(section.id)} class="btn absolute right-5 bottom-5 z-10 w-20 {sections[sections.length - 1] == section || sections[2] == section ? 'hidden' : ''}">Next</button>
              {/if}
            </ol>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- <Empty /> -->
</main>

<style>
  .w-0\.1 {
    width: 0.05rem /* 2px */;
  }
</style>
