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
    type: 'doughnut',
    data: {
      labels: ['Video Tutorials', 'Reports', 'Live Webinars', 'Articles'],
      datasets: [
        {
          data: [25, 42, 30, 12],
          backgroundColor: [
            '#22C55E',  // green - 25%
            '#FD4F00',  // orange - 42%
            '#3B82F6',  // blue - 30%
            '#EAB308',  // yellow - 12%
          ],
          borderWidth: 0,       // no border between slices
          hoverOffset: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',            // controls the hole size in the middle
      plugins: {
        legend: {
          display: false        // hide legend since you have it below
        },
        tooltip: {
          callbacks: {
            label: (item) => ` ${item.label}: ${item.raw}%`
          }
        }
      }
    },
    plugins: [
      {
        // This draws the "100%" text in the center
        id: 'centerText',
        beforeDraw(chart) {
          const { ctx, chartArea: { top, bottom, left, right } } = chart
          const centerX = (left + right) / 2
          const centerY = (top + bottom) / 2
          ctx.save()
          ctx.font = 'bold 20px sans-serif'
          ctx.fillStyle = '#0F151F'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('100%', centerX, centerY)
          ctx.restore()
        }
      }
    ]
  })
})
</script>