<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
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
  let htmlcontent = JSON.stringify(data, null, 4)

  $: {
    data = JSON.parse(htmlcontent)
    dispatch("dispatchData", JSON.parse(htmlcontent))
  }
</script>

<div class="w-3/4 bg-transparent border-2 border-Analytics-sidebar h-[480px] ">
  <pre bind:innerHTML={htmlcontent} contenteditable="true" class="text-white text-sm h-full p-4" />
</div>
