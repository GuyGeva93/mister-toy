
<template>
  <section class="toy-app">
    <toy-list :toys="toys" />
    <h1>Toy app</h1>
  </section>
</template>

<script>
import toyList from "../cmps/toy-list.vue";

export default {
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },

  computed: {
    toys() {
      return this.$store.getters.toysToShow;
    },
  },

  components: {
    toyList,
  },
};
</script>
