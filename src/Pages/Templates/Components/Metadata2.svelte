<script>
  export let data = {
    receiver: {
      name: "John Doe",
      location: "Chennai",
      dob: "1990-01-01",
      "candidate id": "CAN/22/1234",
    },
    document: {
      type: "Employee Offer Letter",
      "processed by": "Jane Doe",
      "valid for": "3 months",
      "remuneration offered": "8 LPA",
      "other perks": "Standard",
    },
    issuer: {
      signatory: "Alice Zane, HR Manager",
      "employee id": "EMP/15/4231",
      location: "Chennai",
    },
  }
  let result = Object.entries(data).map(([category, v]) => ({ category, ...v }))
  console.log(result)
</script>

<div class="flex flex-col w-3/4">
  <div class="w-full grid grid-cols-3 border-x-2 border-t-2 border-Analytics-sidebar">
    <div class="col-span-1 p-2">
      <h1>Form Field</h1>
    </div>
    <div class="border-l-2 col-span-1 border-Analytics-sidebar p-2">
      <h1>Field Value</h1>
    </div>
  </div>
  <div class="flex flex-col w-full bg-transparent border-2 border-Analytics-sidebar h-[443px] overflow-y-auto">
    {#each Object.entries(data) as [overallkey, overallvalue]}
      <div class="w-full flex border-b border-b-Analytics-sidebar">
        <div class="w-full p-2">
          <h1>{overallkey}</h1>
        </div>
      </div>
      {#each Object.entries(overallvalue) as [key, value]}
        <div class="w-full flex border-b border-b-Analytics-sidebar">
          <div class="w-1/3 p-2">
            <h1 contenteditable="true" bind:innerHTML={key} />
          </div>
          <div class="border-l w-2/3 border-Analytics-sidebar p-2">
            <h1 contenteditable="true" bind:innerHTML={value} />
          </div>
        </div>
      {/each}
    {/each}
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-sm font-medium tracking-wider text-Analytics-secondarytext;
  }
</style>
