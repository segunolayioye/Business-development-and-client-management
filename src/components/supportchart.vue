<template>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// 1. Accept the prop from the parent component
const props = defineProps({
  timeframe: {
    type: String,
    default: 'monthly'
  }
})

const chartRef = ref(null)
let chartInstance = null // Store the chart instance

// 2. Define the data for both views
const chartDataSets = {
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    resolved: [73, 66, 78, 89, 58, 66],
    newTickets: [74, 76, 86, 83, 59, 61]
  },
  quarterly: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    resolved: [215, 230, 190, 245], // Example quarterly data
    newTickets: [220, 210, 205, 230] // Example quarterly data
  }
}

// 3. Create a function to build or update the chart
function renderOrUpdateChart() {
  const currentData = chartDataSets[props.timeframe]

  if (chartInstance) {
    // If chart exists, swap the data and update
    chartInstance.data.labels = currentData.labels
    chartInstance.data.datasets[0].data = currentData.resolved
    chartInstance.data.datasets[1].data = currentData.newTickets
    chartInstance.update()
  } else {
    // Build the chart for the first time
    chartInstance = new Chart(chartRef.value, {
      type: 'line',
      data: {
        labels: currentData.labels,
        datasets: [
          {
            // Green solid line with fill
            label: 'Resolved',
            data: currentData.resolved,
            borderColor: '#228B22',
            backgroundColor: 'rgba(34, 139, 34, 0.15)', // light green fill
            borderWidth: 2,
            tension: 0.4,
            fill: true,              // fills area under the line
            pointRadius: 0,
            pointHoverRadius: 4,
          },
          {
            // Grey dashed line no fill
            label: 'New Tickets',
            data: currentData.newTickets,
            borderColor: '#6B7280',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [6, 4],      // makes it dashed
            tension: 0.4,
            fill: false,             // no fill
            pointRadius: 0,
            pointHoverRadius: 4,
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
            suggestedMin: 50, // Allows the chart to scale automatically for larger quarterly numbers
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

// Draw the chart when the component mounts
onMounted(() => {
  renderOrUpdateChart()
})

// 4. Watch for the 'timeframe' prop to change
watch(() => props.timeframe, () => {
  renderOrUpdateChart()
})
</script>