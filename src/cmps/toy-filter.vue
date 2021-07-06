<template>
  <section class="toy-filter">
    <el-select name="filterByType" v-model="value" @input="filter">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </section>
</template>

<script>
export default {
  name: 'toyFilter',
  data() {
    return {
      options: [
        {
          value: '',
          label: 'All',
        },
        {
          value: 'Funny',
          label: 'Funny',
        },
        {
          value: 'Educational',
          label: 'Educational',
        },
        {
          value: 'adult',
          label: 'Adult',
        },
      ],
      value: '',
    }
  },

  methods: {
    filter() {
      this.$emit('filter', JSON.parse(JSON.stringify(this.value)))
    },
  },
}
</script>
