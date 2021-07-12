<template>
  <section class="toy-add">
    <form @submit.prevent="addToy" class="toy-add-form">
      <label for="name">Name: </label>
      <input name="name" v-model="newToy.name" type="text" required />
      <label for="price">Price: </label>
      <input name="price" v-model="newToy.price" type="text" required />
      <el-select name="type" v-model="newToy.type" placeholder="Type" required>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <button>ADD</button>
    </form>
  </section>
</template>

<script>
  import { toyService } from '../services/toy-service.js'

  export default {
    created() {
      this.loadEmptyToy()
    },

    data() {
      return {
        newToy: {},

        options: [
          {
            value: 'Funny',
            label: 'Funny',
          },
          {
            value: 'Educational',
            label: 'Educational',
          },
          {
            value: 'Adult',
            label: 'Adult',
          },
        ],
      }
    },

    methods: {
      addToy() {
        this.$store.dispatch({ type: 'addToy', newToy: this.newToy })
        this.$router.push('/toy')
      },

      loadEmptyToy() {
        toyService.getEmptyToy()
					.then((newToy) => (this.newToy = newToy))
      },
    },
  }
</script>
