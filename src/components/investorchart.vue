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
          // Blue line - steady rise
          label: 'Webinar',
          data: [51, 59, 64, 69, 76, 79],
          borderColor: '#3B4FE0',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.1,
          pointBackgroundColor: '#3B4FE0',
          pointRadius: 5,
          pointHoverRadius: 7,
        },
        {
          // Green line - rises with dips
          label: 'Video',
          data: [65, 75, 73, 80, 84, 85],
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
          max: 90,
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
})
</script>