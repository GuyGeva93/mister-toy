<template>
  <section class="toy-list">
    <div v-for="toy in toys" :key="toy._id">
      <toy-preview :toy="toy" />
    </div>
  </section>
</template>

<script>
import toyPreview from './toy-preview.vue'
export default {
  props: {
    toys: Array,
  },

  components: {
    toyPreview,
  },
}
</script>
