<template>
  <div class="relative flex items-center justify-center">
    <canvas ref="chartRef"></canvas>
    <!-- Center text -->
    <div class="absolute flex flex-col items-center justify-center" style="top: 55%">
      <p class="text-[28px] font-bold text-[#0F151F]">94%</p>
      <p class="text-sm text-[#A9A9A9]">Excellent</p>
    </div>
  </div>
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
      datasets: [
        {
          // This dataset is the actual gauge value
          data: [94, 6, 100],  // 94% filled, 6% remaining, 100 is the hidden bottom half
          backgroundColor: [
            '#228B22',      // green - the filled part
            '#D9D9D9',      // grey - the empty part
            'transparent',  // transparent - hides the bottom half
          ],
          borderWidth: 0,
          hoverOffset: 0,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      circumference: 180,   // only show half the circle (180 degrees)
      rotation: -90,        // start from the left side
      cutout: '75%',        // controls the thickness of the arc
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  })
})
</script>