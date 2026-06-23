<template>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// 1. Accept the prop from the parent
const props = defineProps({
  timeframe: {
    type: String,
    default: 'monthly'
  }
})

const chartRef = ref(null)
let chartInstance = null // We need to store the chart instance to update it later

// 2. Define both sets of data
const chartDataSets = {
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    webinar: [51, 59, 64, 69, 76, 79],
    video: [65, 75, 73, 80, 84, 85]
  },
  quarterly: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    webinar: [55, 68, 72, 85], // Feel free to adjust these quarterly numbers
    video: [70, 78, 81, 89]    // Feel free to adjust these quarterly numbers
  }
}

// 3. Create a function that either builds the chart or updates existing data
function renderOrUpdateChart() {
  const currentData = chartDataSets[props.timeframe]

  if (chartInstance) {
    // If chart already exists, just swap the data and update
    chartInstance.data.labels = currentData.labels
    chartInstance.data.datasets[0].data = currentData.webinar
    chartInstance.data.datasets[1].data = currentData.video
    chartInstance.update()
  } else {
    // Build the chart for the first time
    chartInstance = new Chart(chartRef.value, {
      type: 'line',
      data: {
        labels: currentData.labels,
        datasets: [
          {
            label: 'Webinar',
            data: currentData.webinar,
            borderColor: '#3B4FE0',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            pointBackgroundColor: '#3B4FE0',
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: 'Video',
            data: currentData.video,
            borderColor: '#22C55E',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            pointBackgroundColor: '#22C55E',
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
            min: 50,
            max: 100, // Slightly increased max to fit potential higher quarterly values
            ticks: {
              stepSize: 10,
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

// Build the chart when the component mounts
onMounted(() => {
  renderOrUpdateChart()
})

// 4. Watch for the 'timeframe' prop to change. When it does, update the chart!
watch(() => props.timeframe, () => {
  renderOrUpdateChart()
})

</script>