<script>
  import { onMount, afterUpdate } from "svelte"
  export let activeDropDown, currentMonth, currentYear
  let chart

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  afterUpdate(() => {
    if (activeDropDown == "Monthly") {
      chart.updateOptions({
        series: [
          {
            name: "Sent",
            data: [45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23, 45, 52, 38, 45, 19, 23],
          },
          {
            name: "Delivered",
            data: [55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 55, 52, 28, 35, 19, 13, 2, 35, 19],
          },
          {
            name: "Bounced",
            data: [5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 5, 10, 15, 20, 25, 5, 10, 3, 4],
          },
          {
            name: "Opened",
            data: [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25, 10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25, 23, 45, 12, 15, 34, 12],
          },
        ],
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        },
      })
    } else {
      chart.updateOptions({
        series: [
          {
            name: "Sent",
            data: [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 19],
          },
          {
            name: "Delivered",
            data: [55, 52, 28, 35, 19, 13, 2, 2, 45, 52, 38, 45],
          },
          {
            name: "Bounced",
            data: [5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10],
          },
          {
            name: "Opened",
            data: [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 23, 25],
          },
        ],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
      })
    }
  })
  let sent, Delivered, Bounced, Opened, date
  onMount(async () => {
    // let chartHeight = document.querySelector("#chart").clientHeight()
    let options = {
      colors: ["#5968E9", "#58C0FE", "#4DE5BE", "#9259E9"],
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
        x: {
          formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
            date = value
            sent = series[0][dataPointIndex]
            Delivered = series[1][dataPointIndex]
            Bounced = series[2][dataPointIndex]
            Opened = series[3][dataPointIndex]
          },
        },
        // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        //   sent = series[0][dataPointIndex]
        //   Delivered = series[1][dataPointIndex]
        //   Bounced = series[2][dataPointIndex]
        //   Opened = series[3][dataPointIndex]
        //   // return `<div class="overall"><div id="dot" style="background:${w.globals.colors[0]};"></div><div style="color:white">${w.globals.seriesNames[0]} : ${series[0][dataPointIndex]}</div></div>
        //   // <div class="overall"><div id="dot" style="background:${w.globals.colors[1]};"></div><div style="color:white">${w.globals.seriesNames[1]} : ${series[1][dataPointIndex]}</div></div>
        //   // <div class="overall"><div id="dot" style="background:${w.globals.colors[2]};"></div><div style="color:white">${w.globals.seriesNames[2]} : ${series[2][dataPointIndex]}</div></div>
        //   // <div class="overall"><div id="dot" style="background:${w.globals.colors[3]};"></div><div style="color:white">${w.globals.seriesNames[3]} : ${series[3][dataPointIndex]}</div></div>`
        // },
      },
      chart: {
        stacked: true,
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          // blur: 3,
          color: ["#5968E9", "#58C0FE", "#4DE5BE", "#9259E9"],
          opacity: 0.2,
        },
        width: "100%",
        height: "100%",
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Sent",
          data: [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 52, 38, 45, 19, 23, 2, 45, 52, 38],
        },
        {
          name: "Delivered",
          data: [55, 52, 28, 35, 19, 13, 2, 2, 45, 52, 55, 52, 28, 35, 19, 13, 2, 2, 45, 52, 55, 52, 28, 35, 19, 13, 2, 2, 45, 52],
        },
        {
          name: "Bounced",
          data: [5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10, 15, 20, 25],
        },
        {
          name: "Opened",
          data: [10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 10, 30, 12, 34, 45, 34, 2, 1, 4, 6, 10, 30, 12, 34, 45, 34, 2, 1, 4, 6],
        },
      ],
      fill: {
        type: "gradient",
        colors: ["#5968E9", "#58C0FE", "#4DE5BE", "#9259E9"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          gradientToColors: ["transparent", "transparent", "transparent", "transparent"],
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        curve: "straight",
        show: true,
        width: 4,
      },
      grid: {
        show: true, // you can either change hear to disable all grids
        borderColor: "#67687A",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: "on",
        labels: {
          style: {
            colors: "#6b7280",
          },
        },
        axisBorder: {
          show: false,
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: 10,
        },
        tooltip: {
          enabled: false,
        },
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6b7280",
          },
        },
      },
      legend: {
        show: false,
        labels: {
          useSeriesColors: true,
        },
      },
    }
    chart = new ApexCharts(document.querySelector("#chart"), options)
    chart.render()
  })
</script>

<div class="flex gap-10 px-4">
  <div class="flex w-1/6 flex-col gap-2">
    <h5 class="text-Analytics-primarytext">Timestamp</h5>
    {#if activeDropDown == "Monthly"}
      <h1>{date ? `${currentMonth} ${date} ${currentYear}` : `${currentMonth} ${currentYear}`}</h1>
    {:else}
      <h1>{date ? `${months[date]} ${currentYear}` : `January ${currentYear}`}</h1>
    {/if}
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-Analytics-primarytext">Email Sent</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-Analytics-iconcolor " />
      <h1>{sent ? sent : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-Analytics-primarytext">Email Delivered</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-Analytics-card2" />
      <h1>{Delivered ? Delivered : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-Analytics-primarytext">Email Bounced</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-Analytics-card3" />
      <h1>{Bounced ? Bounced : "0"}</h1>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h5 class="text-Analytics-primarytext">Email Opened</h5>
    <div class="flex items-center gap-3">
      <span class="h-4 w-4 rounded-full bg-Analytics-card4" />
      <h1>{Opened ? Opened : "0"}</h1>
    </div>
  </div>
</div>
<div class="z-0 min-h-[54vh] w-full rounded-md bg-transparent shadow-sm dark:bg-Analytics-primary">
  <div id="chart" class="h-full" />
</div>

<style global lang="postcss">
  h5 {
    @apply text-sm font-medium tracking-wider;
  }
  h1 {
    @apply text-base font-medium tracking-wider text-white;
  }
  #chart .apexcharts-tooltip {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: transparent !important;
    transition: 1s ease all !important;
  }
  #chart .apexcharts-tooltip-marker {
    background: transparent !important;
  }
  #chart .apexcharts-xcrosshairs {
    animation-name: example !important;
    animation-duration: 3s !important;
  }
  .apexcharts-tooltip-title {
    background: transparent !important;
    border: none !important;
  }
  .apexcharts-marker {
    animation-name: example !important;
    animation-duration: 4s !important;
  }
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* .apexcharts-tooltip.apexcharts-theme-light {
    border: none !important;
    background: transparent !important;
  }
  #chart .apexcharts-tooltip span {
    color: white;
    padding: 10px 10px;
    display: flex;
  }
  #chart .apexcharts-tooltip #dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
  .overall {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .apexcharts-tooltip {
    border-radius: 5px;
    box-shadow: none !important;
    cursor: default;
    font-size: 14px;
    left: 62px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 20px;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    padding: 5px 10px;
    gap: 5px;
    overflow: hidden;
    white-space: nowrap;
    z-index: 12;
    transition: 0.15s linear all !important;
  } */
</style>
