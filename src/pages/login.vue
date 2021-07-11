<template>
  <section class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="username" v-model="userCred.username" />
      <input
        type="password"
        placeholder="password"
        v-model="userCred.password"
      />
      <button>Login</button>
    </form>
    <h2>New? Signup:</h2>
    <form @submit.prevent="signup">
      <input
        type="text"
        placeholder="username"
        v-model="newUser.username"
        required
      />
      <input
        type="text"
        placeholder="fullname"
        v-model="newUser.fullname"
        required
      />
      <input
        type="password"
        placeholder="password"
        v-model="newUser.password"
        required
      />
      <button>Signup</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        userCred: {
          username: '',
          password: '',
        },
        newUser: {
          username: '',
          password: '',
          fullname: '',
        },
      }
    },

    methods: {
      login() {
        this.$store.dispatch({ type: 'login', userCred: this.userCred })
        this.$router.push('/toy')
      },
      signup() {
        this.$store.dispatch({ type: 'signup', userCred: this.newUser })
        this.$router.push('/toy')
      },
    },
  }
</script>
