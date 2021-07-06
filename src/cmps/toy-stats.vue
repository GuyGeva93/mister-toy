<template>
  <section class="toy-stats">
    <bar-chart class="bar-chart" />
  </section>
</template>

<script>
import barChart from './bar-chart.vue'
export default {
  components: {
    barChart,
  },
}
</script>

<style scoped>
.toy-stats {
  display: flex;
  justify-content: center;
}

.bar-chart {
  width: 300px;
}
</style>
