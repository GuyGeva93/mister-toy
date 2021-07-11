<template>
  <section class="toy-app">
    <toy-filter @filter="filter" />
    <toy-list :toys="toys" @removeToy="removeToy" />
  </section>
</template>

<script>
  import toyList from '../cmps/toy-list.vue'
  import toyFilter from '../cmps/toy-filter.vue'

  export default {
    name: 'toyApp',
    created() {
      this.$store.dispatch({ type: 'loadToys' })
    },

    data() {
      return {}
    },

    methods: {
      filter(filterBy) {
        this.$store.commit({ type: 'setFilter', filterBy:filterBy })
        this.$store.dispatch({ type: 'loadToys' })
      },

      removeToy(toyId) {
        this.$store.dispatch({ type: 'removeToy', toyId })
      },
    },

    computed: {
      toys() {
        return this.$store.getters.toysToShow
      },
    },

    components: {
      toyList,
      toyFilter,
    },
  }
</script>
