<template>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  chartData: {
    type: Object,
    default: () => ({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      fundData: [5, 11, 8, 10, 17, 18, 14, 16, 24, 25, 22, 29],
      benchmarkData: [5, 6, 8, 9, 10, 11, 11, 13, 15, 18, 22, 26],
    })
  }
})

const chartRef = ref(null)
let chartInstance = null

function createChart() {
  // destroy any existing chart first
  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chartRef.value, {
    type: 'line',
    data: {
      labels: props.chartData.labels,
      datasets: [
        {
          label: 'Fund REIT',
          data: props.chartData.fundData,
          borderColor: '#3B4FE0',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
        {
          label: 'Benchmark',
          data: props.chartData.benchmarkData,
          borderColor: '#6B7280',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [6, 4],
          tension: 0.4,
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
          ticks: {
            stepSize: 5,
            color: '#6B7280',
            font: { size: 11 }
          },
          grid: { color: '#E5E7EB' },
          border: { display: false }
        },
        x: {
          ticks: { color: '#6B7280', font: { size: 11 } },
          grid: { display: false },
          border: { display: false }
        }
      }
    }
  })
}

onMounted(() => {
  createChart()
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})

// Recreate chart fully whenever chartData prop changes
watch(
  () => props.chartData,
  () => {
    createChart()
  },
  { deep: true }
)
</script>