<template>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// 1. Accept the timeframe prop from the dropdown
const props = defineProps({
  timeframe: {
    type: String,
    default: 'last7'
  }
})

const chartRef = ref(null)
let chartInstance = null

// 2. Define data for the different timeframes
const chartDataSets = {
  last7: {
    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    sent: [103, 130, 152, 178, 158, 133, 110],
    benchmark: [100, 118, 140, 160, 144, 123, 105]
  },
  last30: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    sent: [420, 580, 510, 690],
    benchmark: [390, 500, 460, 620]
  },
  last90: {
    labels: ['Month 1', 'Month 2', 'Month 3'],
    sent: [1600, 2200, 2800],
    benchmark: [1450, 1900, 2400]
  }
}

// 3. Render or Update function
function renderOrUpdateChart() {
  const currentData = chartDataSets[props.timeframe]

  if (chartInstance) {
    // If chart exists, update it smoothly with new data
    chartInstance.data.labels = currentData.labels
    chartInstance.data.datasets[0].data = currentData.sent
    chartInstance.data.datasets[1].data = currentData.benchmark
    chartInstance.update()
  } else {
    // Build the chart for the first time
    chartInstance = new Chart(chartRef.value, {
      type: 'line',
      data: {
        labels: currentData.labels,
        datasets: [
          {
            label: 'Sent',
            data: currentData.sent,
            borderColor: '#3B4FE0',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,        // high tension = smooth hill curve
            pointBackgroundColor: '#3B4FE0',
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: 'Benchmark',
            data: currentData.benchmark,
            borderColor: '#6B7280',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [6, 4],  // dashed
            tension: 0.4,        // smooth curve
            pointBackgroundColor: '#6B7280',
            pointRadius: 5,
            pointHoverRadius: 7,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            suggestedMin: 100, // Changed from strict 'min' to 'suggestedMin' so 30/90 days scale up properly
            ticks: {
              stepSize: 20,
              color: '#6B7280',
              font: { size: 11 }
            },
            grid: {
              color: '#E5E7EB'
            },
            border: {
              display: false
            }
          },
          x: {
            ticks: {
              color: '#6B7280',
              font: { size: 11 }
            },
            grid: {
              display: false
            },
            border: {
              display: false
            }
          }
        }
      }
    })
  }
}

// Draw the chart on initial load
onMounted(() => {
  renderOrUpdateChart()
})

// 4. Watch for changes from the dropdown and update the chart
watch(() => props.timeframe, () => {
  renderOrUpdateChart()
})
</script>