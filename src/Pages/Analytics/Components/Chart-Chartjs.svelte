<script>
  import { onMount, afterUpdate } from "svelte"
  import Chart from "chart.js/auto"
  export let activeDropDown, currentMonth, currentYear, chart
  let sent, Delivered, Bounced, Opened, date
  let labelYearly = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let labelMonthly = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  afterUpdate(() => {
    if (activeDropDown == "Monthly") {
      chart.config._config.data.labels = labelMonthly
      chart.config._config.data.datasets[0].data = [45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23]
      chart.config._config.data.datasets[1].data = [55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 35, 19]
      chart.config._config.data.datasets[2].data = [5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 3, 4]
      chart.config._config.data.datasets[3].data = [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25, 10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25, 23, 45, 12, 15, 34, 12]
    } else {
      chart.config._config.data.labels = labelYearly
      chart.config._config.data.datasets[0].data = [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 19]
      chart.config._config.data.datasets[1].data = [55, 52, 28, 35, 19, 13, 2, 2, 45, 52, 38, 45]
      chart.config._config.data.datasets[2].data = [5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10]
      chart.config._config.data.datasets[3].data = [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25]
    }
    chart.update()
  })

  onMount(() => {
    console.log("Bulk Upload")

    const externalTooltipHandler = (context) => {
      // Tooltip Element
      const { chart, tooltip } = context
      const bodyLines = tooltip.body.map((b) => b.lines)
      console.log(tooltip)
      date = tooltip.dataPoints[0].label
      sent = bodyLines[0].toString().split(":")[1]
      Delivered = bodyLines[1].toString().split(":")[1]
      Bounced = bodyLines[2].toString().split(":")[1]
      Opened = bodyLines[3].toString().split(":")[1]
    }
    let canvas = document.getElementById("goodCanvas1")
    let ctx = canvas.getContext("2d")
    let config = {
      type: "line",
      drawActiveElementsOnTop: true,

      data: {
        labels: labelYearly,
        datasets: [
          {
            pointHoverBorderColor: "rgb(255,255,255)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 7,
            label: "Sent", // Name the series
            data: [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 19], // Specify the data values array
            fill: false,
            borderColor: "#5968E9", // Add custom color border (Line)
            backgroundColor: "#5968E9", // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
            tension: 0.2,
          },
          {
            pointHoverBorderColor: "rgb(255,255,255)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 7,
            label: "Delivered", // Name the series
            data: [55, 52, 28, 35, 19, 13, 2, 2, 45, 52, 38, 45], // Specify the data values array
            fill: false,
            borderColor: "#58C0FE", // Add custom color border (Line)
            backgroundColor: "#58C0FE", // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
            tension: 0.2,
          },
          {
            pointHoverBorderColor: "rgb(255,255,255)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 7,
            label: "Bounced", // Name the series
            data: [5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10], // Specify the data values array
            fill: false,
            borderColor: "#4DE5BE", // Add custom color border (Line)
            backgroundColor: "#4DE5BE", // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
            tension: 0.2,
          },
          {
            pointHoverBorderColor: "rgb(255,255,255)",
            pointHoverBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 7,
            label: "Opened", // Name the series
            data: [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25], // Specify the data values array
            fill: false,
            borderColor: "#9259E9", // Add custom color border (Line)
            backgroundColor: "#9259E9", // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            border: {
              display: false,
              dash: [8, 5],
            },
            grid: {
              lineWidth: 1,
              color: "#6b7280",
              display: true,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
          axis: "x",
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
            position: "nearest",
            external: externalTooltipHandler,
          },
        },
      },
    }
    chart = new Chart(canvas, config)
  })
</script>

<div class="flex gap-10 px-4">
  <div class="flex w-1/6 flex-col gap-2">
    <h5 class="text-base font-medium text-primarytext">Timestamp</h5>
    {#if activeDropDown == "Monthly"}
      <h1>{date ? `${currentMonth} ${date} ${currentYear}` : `${currentMonth} ${currentYear}`}</h1>
    {:else}
      <h1>{date ? `${date} ${currentYear}` : `January ${currentYear}`}</h1>
    {/if}
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-base font-medium text-primarytext">Email Sent</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-[#5968E9] " />
      <h1>{sent ? sent : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-base font-medium text-primarytext">Email Delivered</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-[#58C0FE]" />
      <h1>{Delivered ? Delivered : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-base font-medium text-primarytext">Email Bounced</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-[#4DE5BE]" />
      <h1>{Bounced ? Bounced : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-base font-medium text-primarytext">Email Opened</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-[#9259E9]" />
      <h1>{Opened ? Opened : "0"}</h1>
    </div>
  </div>
</div>

<div class="z-0 h-96 w-full rounded-md bg-transparent shadow-sm dark:bg-primary">
  <canvas id="goodCanvas1" />
</div>
