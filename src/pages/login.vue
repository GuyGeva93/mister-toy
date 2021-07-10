<template>
  <section class="login">
    <label for="username"></label>
    <form @submit.prevent="login">
      <input name="username" type="text" v-model="username" />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
      }
    },

    methods: {
      login() {
        console.log('username', this.username)
      },
    },
  }
</script>

<style>
  .username {
    display: flex;
    justify-content: center;
  }
</style>
