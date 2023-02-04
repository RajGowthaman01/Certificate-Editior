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
    <div class="col-span-9 h-full flex">
      <div class="w-8/12" />
      <div class="w-4/12 relative h-full bg-darkGray">
        <h1 class="text-center text-2xl bg-primary_blue text-white py-4">Document Signature Section</h1>
        <div class="p-5 w-full">
          {#each sections as section (section.id)}
            <ol class="overflow-hidden">
              <li class="relative pb-5">
                <div class="absolute{sections[sections.length - 1] == section ? 'hidden' : ''} {section.complete ? 'bg-primary_blue' : 'bg-white'} top-4 left-4 -ml-px mt-0.5 h-full w-0.5" aria-hidden="true" />
                <div class="group relative flex items-start">
                  {#if (section.Active && !section.complete) || (section.Active && section.complete)}
                    <span class="flex h-9 items-center" aria-hidden="true">
                      <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primabg-primary_blue bg-white">
                        <span class="h-2.5 w-2.5 rounded-full bg-primary_blue" />
                      </span>
                    </span>
                  {:else if !section.Active && !section.complete}
                    <span class="flex h-9 items-center" aria-hidden="true">
                      <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white" />
                    </span>
                  {:else if !section.Active && section.complete}
                    <span class="flex h-9 items-center">
                      <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary_blue">
                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </span>
                  {/if}
                  <span class="ml-4 flex w-full flex-col">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span class="text-base text-white font-bold mb-5 cursor-pointer" on:click={() => changeActiveComponent(section.id)}>{section.Title}</span>
                    {#if section.Active}
                      <div in:slide class="relative w-full">
                        <svelte:component this={section.Component} on:ShowImg={showImg} on:init={InitOTP} {loadScreen} on:nextStep={() => gotoNextSignStep(section.id)} />
                      </div>
                    {/if}
                  </span>
                </div>
              </li>
              {#if section.Active}
                <button on:click={() => gotoNextSignStep(section.id)} class="btn absolute right-5 bottom-5 z-10 w-20 {sections[sections.length - 1] == section ? 'hidden' : ''}">next</button>
              {/if}
            </ol>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- <Empty /> -->
</main>
