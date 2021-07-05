
<template>
  <section class="toy-preview">
    <h2>{{ toy.name }}</h2>
    <p>Type: {{ toy.type }}</p>
    <span>${{ toy.price }}</span>
    <router-link :to="'/edit/' + toy._id">Edit</router-link>
  </section>
</template>

<script>
export default {
  props: {
    toy: Object,
  },

  data() {
    return {};
  },
};
</script>
