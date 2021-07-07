<template>
  <section class="toy-details">
    <section class="toy-details-container">
      <h3>Toy no.{{ toy._id }}</h3>
      <img :src="require('@/assets/img/download.png')" />
      <article>{{ toy.name }}</article>
      <article>${{ toy.price }}</article>
      <article>Type: {{ toy.type }}</article>
      <article v-if="toy.inStock">In stock</article>
      <article v-else>Not in stock :(</article>
    </section>
  </section>
</template>

<script>
  import { toyService } from '../services/toy-service.js'
  export default {
    data() {
      return {
        toy: '',
      }
    },

    methods: {
      loadToy() {
        const { toyId } = this.$route.params
        toyService.getById(toyId).then((toy) => (this.toy = toy))
      },
    },

    created() {
      this.loadToy()
    },
  }
</script>
