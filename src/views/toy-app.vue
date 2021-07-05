
<template>
  <section class="toy-app">
    <toy-list :toys="toys" />
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
