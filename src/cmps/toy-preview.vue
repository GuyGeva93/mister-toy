<template>
  <section class="toy-preview">
    <img src="@/assets/img/download.png" />
    <h3>{{ toy.name }}</h3>
    <p>Type: {{ toy.type }}</p>
    <span>${{ toy.price }}</span>
    <nav class="toy-preview-nav">
      <router-link :to="'/details/' + toy._id">Details</router-link>
      <section class="is-admin" v-if="isAdmin">
        | <router-link :to="'/edit/' + toy._id">Edit</router-link> |
        <span @click.stop="remove(toy._id)">Delete</span>
      </section>
    </nav>
  </section>
</template>

<script>
  export default {
    props: {
      toy: Object,
    },

    methods: {
      remove(toyId) {
        this.$emit('removeToy', toyId)
      },
    },

    computed: {
      isAdmin() {
        return this.$store.getters.loggedinUser?.isAdmin
        if (user.isAdmin) return true
        return false
      },
    },
  }
</script>
