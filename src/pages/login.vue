<template>
  <section class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input name="username" type="text" placeholder="username" v-model="userCred.username" />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        userCred: {
          username: ''
        },
      }
    },

    methods: {
      login() {
        this.$store.dispatch({type: 'login', userCred: this.userCred})
        this.$router.push('/toy')
      },
    },
  }
</script>
