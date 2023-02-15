<script>
  import { createEventDispatcher } from "svelte"
  import LoadingScreen from "../../SignerOverlay/Components/loadingScreen.svelte"
  const dispatch = createEventDispatcher()
  import pdfSigning from "../../SignerOverlay/Stores/pdfSigning"
  import QRCode from "../../SignerOverlay/svg/QRCode.svelte"
  import NextIcon from "../../SignerOverlay/svg/NextIcon.svelte"
  import UserIcon from "../../SignerOverlay/svg/UserIcon.svelte"
  let loadScreen = true
  setTimeout(() => {
    loadScreen = false
  }, 1000)

  const Next = () => {
    dispatch("init")
  }
</script>

<!-- <div> -->
<!--card1-->
<!-- <div class="pb-5">
    {#if loadScreen}
      <LoadingScreen />
    {:else}
      <div class="flex gap-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-textGray">
          <path
            fill-rule="evenodd"
            d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="overflow-hidden text-textGray text-ellipsis whitespace-nowrap font-mono">819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
      </div>
      <div class="bg-lightGray text-textGray rounded-sm p-2">
        <div class="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray bg-darkGray rounded-sm w-24 h-24">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          <div class="space-y-2">
            <h1 class="text-lg text-textGray fond-bold">John Doe</h1>
            <p>Chennai</p>
            <p>Test Company Pvt. Ltd</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-2 border-t-2 border-t-darkGray">
          <div class="flex gap-3 items-center pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-5 h-5">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>
            <span class="font-mono">9876543210</span>
          </div>
          <div class="flex gap-3 items-center pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-5 h-5">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span>john@email.com</span>
          </div>
        </div>
      </div>
    {/if}
  </div> -->

<!--card2-->
<!-- <div class="pb-5">
    {#if loadScreen}
      <LoadingScreen />
    {:else}
      <div class="flex gap-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-textGray">
          <path
            fill-rule="evenodd"
            d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="overflow-hidden text-textGray text-ellipsis whitespace-nowrap font-mono">819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
      </div>
      <div class="text-textGray">
        <div class="flex gap-3 items-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-darkGray bg-lightGray w-28 h-28">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          <div>
            <div class="flex items-end gap-3">
              <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
              <div class="flex gap-1 mb-1 items-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mb-0.5">
                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                <p class="text-xs">Chennai</p>
              </div>
            </div>
            <span class="text-primary_blue text-sm font-thin">Test Company Pvt. Ltd</span>
            <div class="flex gap-2 items-center pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
              <span class="font-mono text-sm">9876543210</span>
            </div>
            <div class="flex gap-2 items-center pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span class="text-sm">john@email.com</span>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div> -->

<!--card3-->
<!-- <div class="pb-5">
    {#if loadScreen}
      <LoadingScreen />
    {:else}
      <div class="text-textGray flex flex-col gap-1">
        <div class="flex gap-3 items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-darkGray bg-lightGray w-12 h-12 rounded-full">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          <div>
            <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
            <h6 class="text-xs text-textGray font-thin">Designation</h6>
          </div>
        </div>
        <div class="flex gap-2 items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-6 text-textGray">
            <path
              fill-rule="evenodd"
              d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-textGray break-all font-mono">819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
        </div>
        <span>Signer Who works in the company named as Test Company Pvt. Ltd</span>
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <p>Chennai</p>
        </div>
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
          <span class="font-mono text-sm">9876543210</span>
        </div>
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span class="text-sm">john@email.com</span>
        </div>
      </div>
    {/if}
  </div> -->

<!--card4-->
<!-- {#if loadScreen}
    <div class="pb-5">
      <LoadingScreen />
    </div>
  {:else}
    <div class="text-textGray rounded-md bg-darkGray p-5 flex flex-col gap-1">
      <div class="flex gap-3 items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-darkGray bg-lightGray w-12 h-12 rounded-full">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        <div>
          <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
          <h6 class="text-xs text-textGray font-thin">Designation</h6>
        </div>
      </div>
      <span class="text-sm ">Test Company Pvt. Ltd, Chennai</span>
      <div class="flex gap-2 items-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-6 text-textGray">
          <path
            fill-rule="evenodd"
            d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-textGray break-all font-mono">819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
      </div>
      <div class="flex gap-2 items-center mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
          <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </div>
    </div>
  {/if} -->

<!--card5-->
<!-- <div class="pb-5">
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="text-textGray grid grid-cols-2">
      <div class="col-span-1 flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-darkGray -ml-2 -mt-2 w-24 h-24">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-1 flex gap-2 justify-end">
        <div class="w-10 h-10 bg-darkGray rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-Analytics-sidebar cursor-pointer w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="w-10 h-10 bg-darkGray rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-Analytics-sidebar cursor-pointer w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </div>
      </div>
      <div class="col-span-2">
        <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
        <h6 class="text-sm text-textGray font-thin mb-2">Designation</h6>
        <span class="text-textGray text-sm break-all font-mono leading-none">ID: 819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
        <div class="mt-2 flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mb-0.5">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <div class="flex gap-1 mt-1">
            <p class="text-xs">Test Company Pvt. Ltd,</p>
            <p class="text-xs">Chennai</p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div> -->

<!--card6-->
<!-- <div class="pb-5">
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="pb-2">
      <span class="text-textGray text-sm break-all font-mono leading-none">
        <strong class="font-extrabold">Signer ID</strong>
        <br />
        819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3
      </span>
    </div>
    <div class="text-textGray bg-lightGray2 p-5 grid grid-cols-7">
      <div class="col-span-4 flex flex-col items-center justify-center">
        <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
        <h6 class="text-xs text-textGray font-thin">Designation</h6>
        <p class="text-xs">Test Company Pvt. Ltd</p>
      </div>
      <div class="col-span-3 flex gap-2 justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-lightGray ring-4 rounded-full ring-primary_blue -ml-2 -mt-2 w-28 h-28">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-7 flex justify-between mt-5">
        <div class="flex items-center gap-1 border-r-2 border-r-darkGray pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs">9787564310</span>
        </div>
        <div class="flex items-center gap-1 border-r-2 border-r-darkGray pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span class="text-xs">john@email.com</span>
        </div>
        <div class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mb-0.5">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <p class="text-xs">Chennai</p>
        </div>
      </div>
    </div>
  {/if}
</div> -->

<!--card7-->
<!-- <div class="pb-5">
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="pb-2" />
    <div class="text-textGray bg-lightGray2 p-5">
      <div class="flex flex-col gap-2 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-lightGray w-28 h-28">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        <div class="-mt-2">
          <h1 class="text-2xl text-textGray font-bold text-center">John Doe</h1>
          <h6 class="text-xs text-textGray font-thin text-center">Designation</h6>
        </div>
        <p class="text-xs">Test Company Pvt. Ltd</p>
        <span class="text-textGray px-3 text-center text-sm break-all font-mono leading-none">819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
      </div>
      <div class="flex justify-between items-center gap-3 mt-5">
        <button class="w-1/2 border-primary_blue border-2 py-2 rounded text-primary_blue">Message</button>

        <button class="w-1/2 bg-primary_blue py-2 rounded text-white">Connect</button>
      </div>
    </div>
  {/if}
</div> -->

<!--card8-->
<!-- <div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="relative text-textGray mx-auto w-full">
      <p class="text-lg text-center">{$pdfSigning.signerDetails.companyName}</p>

      <div class="flex flex-col gap-2 items-center justify-center">
        <UserIcon />
        <div class="-mt-2">
          <h1 class="text-xl text-textGray font-bold text-center border-b border-b-lightGray pb-0.5">{$pdfSigning.signerDetails.name}</h1>

          <h6 class="text-xs text-textGray font-thin text-center">{$pdfSigning.signerDetails.Designation}</h6>
        </div>
        <QRCode />
        <div class="flex justify-center text-sm">
          <span class="text-textGray p-7 text-center font-mono py-1">
            <strong class="font-extrabold">Signer ID</strong>
            <p class="break-all">{$pdfSigning.signerDetails.id}</p>
          </span>
        </div>
      </div>
      <span class="text-sm py-1">
        <strong class="font-bold mr-2">Phone:</strong>
        {$pdfSigning.signerDetails.phone}
      </span>
      <div class="text-sm">
        <strong class="font-bold mr-2">Email:</strong>
        {$pdfSigning.signerDetails.eMail}
      </div>
      <div class="flex w-full absolute bottom-0 right-2 justify-end">
        <button class="btn" on:click={() => Next(0)}>
          <NextIcon />
        </button>
      </div>
    </div>
  {/if}
</div> -->

<!--card9-->
<!-- <div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="flex gap-5 items-start justify-center">
      <div>
        <UserIcon />
        <h1 class="text-xl text-textGray font-bold text-center border-b border-b-lightGray pb-0.5">{$pdfSigning.signerDetails.name}</h1>
        <h6 class="text-xs text-textGray font-thin text-center">{$pdfSigning.signerDetails.Designation}</h6>
      </div>
      <div>
        <p class="text-xl mb-3 font-semibold text-textGray">{$pdfSigning.signerDetails.companyName}</p>
        <span class="text-textGray ">
          <strong class="font-extrabold">Signer ID</strong>
          <p class="break-all">{$pdfSigning.signerDetails.id}</p>
        </span>
        <div class="flex gap-2 items-center pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
          <span class="font-mono text-sm text-textGray">9876543210</span>
        </div>
        <div class="flex gap-2 items-center pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span class="text-sm text-textGray">john@email.com</span>
        </div>
        <div class="flex gap-2 items-center pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 fill-textGray">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <p class="text-xs text-textGray">Chennai</p>
        </div>
      </div>
    </div>
  {/if}
</div> -->

<!--card9-->
<!-- <div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="space-y-4 text-textGray">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold border-b border-b-lightGray pb-0.5">{$pdfSigning.signerDetails.name}</h1>
          <div class="flex gap-2 items-center">
            <h6 class="text-sm  font-thin">{$pdfSigning.signerDetails.Designation}</h6>
            <div class="w-full h-[0.075rem] mt-1 bg-Analytics-primary" />
          </div>
        </div>
        <div>
          <QRCode />
        </div>
      </div>
      <div>
        <strong class="font-extrabold">Signer ID</strong>
        <p class="text-sm font-mono break-all">{$pdfSigning.signerDetails.id}</p>
      </div>
      <div class="space-y-2">
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
          <span class="font-mono text-sm">9876543210</span>
        </div>
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span class="text-sm">john@email.com</span>
        </div>
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 fill-textGray">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <p class="text-xs">Chennai</p>
        </div>
      </div>
    </div>
  {/if}
</div> -->

<!--card9-->
<!-- <div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="w-[32rem] aspect-[16/9] bg-Analytics-secondary rounded-md grid grid-cols-6 text-textGray">
      <div class="col-span-1 h-full bg-primary_blue" />
      <div class="col-span-5 flex flex-col justify-between py-4 pr-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold border-b-4 border-b-primary_blue pb-1">&nbsp{$pdfSigning.signerDetails.name}</h1>
            <h6 class="text-sm  font-thin">&nbsp &nbsp{$pdfSigning.signerDetails.Designation}</h6>
          </div>
          <div class="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M27.328 12.036c-2.912-1.239-6.823-2.041-11-2.26a31.561 31.561 0 0 0-1.932-.057c3.088-3.771 6.401-6.303 8.583-6.385c.428-.016.792.073 1.084.26c.943.615 1.203 2.36.724 4.787c-.052.333.161.661.479.724a.612.612 0 0 0 .724-.479c.599-3.041.156-5.131-1.255-6.052c-.505-.333-1.12-.491-1.803-.464c-2.729.104-6.583 3.068-10.12 7.631a34.787 34.787 0 0 0-4.307.38c-.86-3.865-.521-6.636.792-7.303c.181-.099.38-.145.609-.167c.932-.072 2.213.527 3.615 1.693c.26.213.645.187.859-.079a.606.606 0 0 0-.077-.859c-1.683-1.391-3.229-2.073-4.496-1.98a2.976 2.976 0 0 0-1.072.292c-1.589.812-2.224 3.104-1.828 6.453c.093.692.213 1.416.391 2.156c-4.376.875-7.161 2.631-7.281 4.833c-.084 1.563 1.151 3.047 3.572 4.297a.608.608 0 0 0 .824-.265a.607.607 0 0 0-.267-.824c-1.932-.995-2.973-2.115-2.911-3.14c.068-1.443 2.364-2.923 6.349-3.708a36.4 36.4 0 0 0 1.4 4.119c-1.359 2.516-2.344 4.996-2.848 7.199c-.751 3.287-.349 5.631 1.145 6.599c.479.312 1.036.469 1.661.469c1.245 0 2.755-.615 4.464-1.833a.611.611 0 1 0-.71-.995c-2.057 1.473-3.791 1.963-4.749 1.337c-1.011-.661-1.235-2.588-.609-5.301c.421-1.849 1.208-3.907 2.276-6.027c.265.584.547 1.167.839 1.751c1.901 3.729 4.229 6.968 6.547 9.131c1.849 1.719 3.568 2.615 4.979 2.615c.469 0 .907-.1 1.303-.297c1.525-.781 2.188-2.948 1.864-6.099c-.296-2.953-1.411-6.548-3.14-10.136a.614.614 0 0 0-.812-.287a.614.614 0 0 0-.292.819c3.583 7.468 3.839 13.583 1.828 14.609c-2.125 1.088-7.235-3.141-11.188-10.907a35.953 35.953 0 0 1-1.203-2.573c.453-.807.932-1.625 1.464-2.437a43.578 43.578 0 0 1 1.629-2.328h.527c.719 0 1.5.016 2.312.063c8.703.459 14.631 3.416 14.511 5.781c-.052 1.02-1.235 2.052-3.235 2.828a.612.612 0 0 0 .443 1.14c2.541-.984 3.937-2.339 4.016-3.905c.093-1.772-1.557-3.48-4.667-4.803v-.011zm-16.557.563a38.93 38.93 0 0 0-1.016 1.661a31.419 31.419 0 0 1-.963-2.953a32.471 32.471 0 0 1 3.077-.323a33.25 33.25 0 0 0-1.093 1.615v-.015zm5.234 1.568c-2.443 0-2.443 3.667 0 3.667c2.448 0 2.448-3.667 0-3.667z"
              />
            </svg>
            <span>{$pdfSigning.signerDetails.companyName}</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <div class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-white w-4 h-4">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
              <span class="font-mono text-sm">9876543210</span>
            </div>
            <div class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-white w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span class="text-sm">john@email.com</span>
            </div>
            <div class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mt-1 fill-white">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <p class="text-xs mt-1">Chennai</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center gap-2 mr-4">
            <QRCode />
            <p class="text-xs text-textGray">WWW.Print2Block.com</p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div> -->

<!--card9-->
<div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="flex flex-col justify-between p-4 w-[32rem] aspect-[16/8] bg-Analytics-secondary rounded-md text-textGray">
      <div class="flex items-center justify-between">
        <div class="flex items-end gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M27.328 12.036c-2.912-1.239-6.823-2.041-11-2.26a31.561 31.561 0 0 0-1.932-.057c3.088-3.771 6.401-6.303 8.583-6.385c.428-.016.792.073 1.084.26c.943.615 1.203 2.36.724 4.787c-.052.333.161.661.479.724a.612.612 0 0 0 .724-.479c.599-3.041.156-5.131-1.255-6.052c-.505-.333-1.12-.491-1.803-.464c-2.729.104-6.583 3.068-10.12 7.631a34.787 34.787 0 0 0-4.307.38c-.86-3.865-.521-6.636.792-7.303c.181-.099.38-.145.609-.167c.932-.072 2.213.527 3.615 1.693c.26.213.645.187.859-.079a.606.606 0 0 0-.077-.859c-1.683-1.391-3.229-2.073-4.496-1.98a2.976 2.976 0 0 0-1.072.292c-1.589.812-2.224 3.104-1.828 6.453c.093.692.213 1.416.391 2.156c-4.376.875-7.161 2.631-7.281 4.833c-.084 1.563 1.151 3.047 3.572 4.297a.608.608 0 0 0 .824-.265a.607.607 0 0 0-.267-.824c-1.932-.995-2.973-2.115-2.911-3.14c.068-1.443 2.364-2.923 6.349-3.708a36.4 36.4 0 0 0 1.4 4.119c-1.359 2.516-2.344 4.996-2.848 7.199c-.751 3.287-.349 5.631 1.145 6.599c.479.312 1.036.469 1.661.469c1.245 0 2.755-.615 4.464-1.833a.611.611 0 1 0-.71-.995c-2.057 1.473-3.791 1.963-4.749 1.337c-1.011-.661-1.235-2.588-.609-5.301c.421-1.849 1.208-3.907 2.276-6.027c.265.584.547 1.167.839 1.751c1.901 3.729 4.229 6.968 6.547 9.131c1.849 1.719 3.568 2.615 4.979 2.615c.469 0 .907-.1 1.303-.297c1.525-.781 2.188-2.948 1.864-6.099c-.296-2.953-1.411-6.548-3.14-10.136a.614.614 0 0 0-.812-.287a.614.614 0 0 0-.292.819c3.583 7.468 3.839 13.583 1.828 14.609c-2.125 1.088-7.235-3.141-11.188-10.907a35.953 35.953 0 0 1-1.203-2.573c.453-.807.932-1.625 1.464-2.437a43.578 43.578 0 0 1 1.629-2.328h.527c.719 0 1.5.016 2.312.063c8.703.459 14.631 3.416 14.511 5.781c-.052 1.02-1.235 2.052-3.235 2.828a.612.612 0 0 0 .443 1.14c2.541-.984 3.937-2.339 4.016-3.905c.093-1.772-1.557-3.48-4.667-4.803v-.011zm-16.557.563a38.93 38.93 0 0 0-1.016 1.661a31.419 31.419 0 0 1-.963-2.953a32.471 32.471 0 0 1 3.077-.323a33.25 33.25 0 0 0-1.093 1.615v-.015zm5.234 1.568c-2.443 0-2.443 3.667 0 3.667c2.448 0 2.448-3.667 0-3.667z"
            />
          </svg>
          <div>
            <p class="text-xs font-thin text-textGray">company</p>
            <p class="text-lg">{$pdfSigning.signerDetails.companyName}</p>
          </div>
        </div>
        <div class="flex flex-col items-end justify-end">
          <h1 class="text-2xl font-bold">{$pdfSigning.signerDetails.name}</h1>
          <h6 class="text-sm font-thin">{$pdfSigning.signerDetails.Designation}</h6>
        </div>
      </div>
      <div class="flex items-end justify-between">
        <div class="flex flex-col items-center justify-center gap-2 mr-4">
          <QRCode />
        </div>
        <div class="space-y-2">
          <div class="flex gap-2 justify-end items-center">
            <span class="font-mono text-base">9876543210</span>
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-Analytics-sidebar w-4 h-4">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex gap-2 justify-end items-center">
            <span class="text-base">john@email.com</span>
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-Analytics-sidebar w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
          </div>
          <div class="flex gap-2 justify-end items-center">
            <span class="text-base">Chennai</span>
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 fill-Analytics-sidebar">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- <div class="ml-2.5">
  <strong class="font-extrabold">Signer ID</strong>
  <p class="text-sm font-mono break-all">{$pdfSigning.signerDetails.id}</p>
</div> -->
