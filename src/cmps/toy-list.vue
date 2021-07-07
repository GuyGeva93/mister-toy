<template>
  <section class="toy-list">
    <div v-for="toy in toys" :key="toy._id">
      <toy-preview :toy="toy" @removeToy="removeToy"/>
    </div>
  </section>
</template>

<script>
import toyPreview from './toy-preview.vue'
export default {
  props: {
    toys: Array,
  },

  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    }
  },

  components: {
    toyPreview,
  },
}
</script>
