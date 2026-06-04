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
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          // solid blue line
          label: 'Fund REIT',
          data: [5, 11, 8, 10, 17, 18, 14, 16, 24, 25, 22, 29],
          borderColor: '#3B4FE0',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.1,          // low tension = more sharp turns
          pointRadius: 0,        // no dots on this chart
          pointHoverRadius: 4,
        },
        {
          // dashed grey line
          label: 'Benchmark',
          data: [5, 6, 8, 9, 10, 11, 11, 13, 15, 18, 22, 26],
          borderColor: '#6B7280',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [6, 4],    // makes it dashed
          tension: 0.4,          // smoother curve
          pointRadius: 0,        // no dots
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
          min: 5,
          max: 30,
          ticks: {
            stepSize: 5,
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