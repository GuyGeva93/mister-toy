<template>
  <section class="toy-edit">
    <form @submit.prevent="updateToy" class="toy-edit-form">
      <!-- <h2>Edit toy; id: {{ toy._id }}</h2> -->
      <label for="toyName">Name:</label>
      <input name="toyName" type="text" v-model="toy.name" />
      <label for="toyPrice">Price:</label>
      <input name="toyPrice" type="text" v-model="toy.price" />
      <el-select name="type" v-model="toy.type" placeholder="Type" required>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- <label for="toyType">Type:</label>
      <input name="toyType" type="text" v-model="toy.type" /> -->
      <button>Save</button>
    </form>
  </section>
</template>

<script>
  import { toyService } from '../services/toy-service.js'
  export default {
    data() {
      return {
        toy: '',
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
      loadToy() {
        const id = this.$route.params.toyId
        toyService.getById(id).then((toy) => (this.toy = toy))
      },
      updateToy() {
        const toyCopy = JSON.parse(JSON.stringify(this.toy))
        toyService.save(toyCopy).then(() => this.$router.push('/toy'))
      },
    },

    created() {
      this.loadToy()
    },
  }
</script>
