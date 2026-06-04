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
      labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sent',
          data: [103, 130, 152, 178, 158, 133, 110],
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
          data: [100, 118, 140, 160, 144, 123, 105],
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
          min: 100,
          max: 180,
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
})
</script>