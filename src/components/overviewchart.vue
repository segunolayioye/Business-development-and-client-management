<template>
  <canvas ref="chartRef"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRef = ref(null)

onMounted(() => {
  new Chart(chartRef.value, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [25, 68, 65, 75, 85, 102],
          borderColor: '#22C55E',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.3,
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
          min: 25,
          max: 100,
          ticks: {
            stepSize: 25,
            color: '#A9A9A9',
            font: { size: 10 }
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
            color: '#A9A9A9',
            font: { size: 10 }
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
})
</script>