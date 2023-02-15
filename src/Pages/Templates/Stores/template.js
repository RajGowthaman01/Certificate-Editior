import { writable } from "svelte/store"

const Template = writable({
  jsonData: {
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
  },
  htmlContent: function () {
    return JSON.stringify(this.jsonData, null, 4)
  },
})

export default Template
