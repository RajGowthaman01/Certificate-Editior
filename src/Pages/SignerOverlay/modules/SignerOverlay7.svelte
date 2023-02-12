<script>
  import { slide, fade } from "svelte/transition"
  import UserDetails from "../Components/UserDetails.svelte"
  import SignPlace from "../Components/SignPlace.svelte"
  import SignClr from "../Components/signClr.svelte"
  import EnterOtp from "../Components/EnterOtp.svelte"
  import BackIcon from "../svg/BackIcon.svelte"

  $: sections = [
    {
      id: 0,
      Title: "Signer Details",
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

  let img = false
  const showImg = () => {
    img = !img
  }
  let loadScreen = false

  $: transition = "translate-y-32"
  const gotoNextSignStep = (id) => {
    if (id == 0) {
      transition = "translate-y-[5.7rem]"
    } else if (id == 1) {
      transition = "translate-y-2"
    } else if (id == 2) {
      transition = "-translate-y-20"
    }

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
    if (id == 1) {
      transition = "translate-y-32"
    } else if (id == 2) {
      transition = "translate-y-[5.7rem]"
    } else if (id == 3) {
      transition = "translate-y-2"
    }
    console.log(id)
    sections = sections.map((sections) => {
      if (sections.id == id) {
        sections.Active = false
      } else if (sections.id == id - 1) {
        sections.complete = false
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

<main class="w-full flex justify-center">
  <!-- <div class="grid grid-cols-12 w-full h-full bg-lightGray">
    <div class="col-span-3 flex" />
    <div class="col-span-9 h-full flex justify-start"> -->
  <div class="w-96 -ml-8 relative h-full">
    <!-- <h1 class="text-center absolute top-0 w-full text-xl bg-primary_blue text-white py-2.5">Document Signature Section</h1> -->
    <div class="text-white absolute top-12  text-center">
      <h1 class="text-2xl font-bold ">Document Signature</h1>
      <span class="text-xs text-Analytics-secondarytext">Lorem ipsum dolor sit amet consectetur adipisicing elit.it sed eaccusamus!</span>
    </div>
    <div class="h-full w-full flex items-center justify-center">
      <!-- <div class="pl-5 {transition} transition ease-in-out duration-500 ">
        <ol class="overflow-hidden">
          {#each sections as section}
            <li class="relative pb-8">
              <div class="absolute{sections[sections.length - 1] == section ? 'hidden' : ''} {section.complete ? 'bg-primary_blue' : 'bg-Analytics-secondary'} top-4 left-2 -ml-px mt-0.5 h-full w-0.1 opacity-50" />
              {#if (section.Active && !section.complete) || (section.Active && section.complete)}
                Complete Step
                <div class="group relative flex items-center justify-center" aria-current="step">
                  <span class="flex h-9 items-center" aria-hidden="true">
                    <span class="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-Analytics-secondary">
                      <span class="h-2 w-2 rounded-full animate-ping bg-primary_blue" />
                    </span>
                  </span>
                </div>
              {:else if !section.Active && section.complete}
                Current Step
                <div class="group relative flex items-center justify-center">
                  <span class="flex h-9 items-center">
                    <span class="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary_blue" />
                  </span>
                </div>
              {:else if !section.Active && !section.complete}
                Upcoming Step
                <div class="group relative flex items-center justify-center">
                  <span class="flex h-9 items-center">
                    <span class="relative z-10 flex h-2 w-2 items-center justify-center rounded-full border-2 border-Analytics-secondary bg-Analytics-secondary" />
                  </span>
                </div>
              {/if}
            </li>
          {/each}
        </ol>
      </div> -->

      <!-- <div class="w-4 h-4 ml-2 mt-4 z-20 rounded-sm rotate-45 bg-Analytics-secondary" /> -->
      <div class="relative mb-10 w-full h-full flex flex-col justify-center">
        <div class="w-full mt-12 relative">
          {#each sections as section (section.id)}
            {#if section.Active}
              <div class="w-full min-h-[250px] h-full bg-Analytics-secondary flex-col rounded-md">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="text-base text-white w-full font-bold cursor-pointer text-center py-4">{section.Title}</div>

                <div in:fade class="w-full min-h-[250px] relative my-auto px-4 pb-4">
                  <svelte:component this={section.Component} on:ShowImg={showImg} on:init={() => gotoNextSignStep(section.id)} {loadScreen} on:nextStep={() => gotoNextSignStep(section.id)} />
                </div>
                {#if sections[0] != section}
                  <button on:click={() => gotoBackSignStep(section.id)} class="btn absolute bottom-4 left-4">
                    <BackIcon />
                  </button>
                {/if}
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
  <!-- </div>
  </div> -->

  <!-- <Empty /> -->
</main>
