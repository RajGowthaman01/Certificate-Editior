<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  import pdfSigning from "../Stores/pdfSigning.js"
  import UserIcon from "../svg/UserIcon.svelte"
  import LoadingScreen from "./loadingScreen.svelte"
  let loadScreen = true
  setTimeout(() => {
    loadScreen = false
  }, 1000)
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
      <div class="text-textGray bg-lightGray2 p-5 grid grid-cols-2">
        <div class="col-span-1 flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-lightGray -ml-2 -mt-2 w-24 h-24">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="col-span-1 flex gap-2 justify-end">
          <div class="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-textGray cursor-pointer w-4 h-4">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
        </div>
        <div class="col-span-2">
          <h1 class="text-2xl text-textGray font-bold">John Doe</h1>
          <h6 class="text-sm text-textGray font-thin mb-2">Designation</h6>
          <span class="text-textGray text-sm break-all font-mono leading-none">ID: 819f82006a4c49263fcde49372eb58589194cc759fcc2c8758d804f97021cbe3</span>
          <div class="flex justify-between mt-2 items-center">
            <p class="text-xs">Test Company Pvt. Ltd</p>
            <div class="col-span-1 flex items-center gap-3 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mb-0.5">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
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
      <div class="pb-2">
      </div>
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
<!-- </div> -->

<!--card8-->
<div>
  {#if loadScreen}
    <LoadingScreen />
  {:else}
    <div class="relative text-textGray mx-auto w-full">
      <p class="text-lg text-center">{$pdfSigning.signerDetails.companyName}</p>
      <!-- <h6 class="text-xs text-textGray font-thin text-center"></h6> -->

      <div class="flex flex-col gap-2 items-center justify-center">
        <UserIcon />
        <div class="-mt-2">
          <h1 class="text-xl text-textGray font-bold text-center border-b border-b-lightGray pb-0.5">{$pdfSigning.signerDetails.name}</h1>

          <h6 class="text-xs text-textGray font-thin text-center">{$pdfSigning.signerDetails.Designation}</h6>
        </div>
        <!-- <div class="flex justify-center mt-3">
          <QrCode />
        </div> -->
        <div class="flex justify-center text-sm">
          <span class="text-textGray p-7 text-center font-mono py-1">
            <strong class="font-extrabold">Signer ID</strong>
            <p class="break-all">{$pdfSigning.signerDetails.id}</p>
          </span>
        </div>
      </div>
      <span class="text-sm py-1 ml-3">
        <strong class="font-bold mr-2">Phone:</strong>
        {$pdfSigning.signerDetails.phone}
      </span>
      <div class="text-sm ml-3">
        <strong class="font-bold mr-2">Email:</strong>
        {$pdfSigning.signerDetails.eMail}
      </div>
      <!-- <div class="flex w-full absolute bottom-0 right-2 justify-end">
        <button class="btn" on:click={() => Next(0)}>
          <NextIcon />
        </button>
      </div> -->
    </div>
  {/if}
</div>
