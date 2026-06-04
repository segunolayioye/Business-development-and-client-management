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
          // Green solid line with fill
          label: 'Resolved',
          data: [73, 66, 78, 89, 58, 66],
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
          data: [74, 76, 86, 83, 59, 61],
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