<template>
  <header class="app-header">
    <div class="logo">
      <h1>Mister-Toy</h1>
    </div>
    <nav class="nav-bar">
      <router-link to="/toy">Home</router-link> |
      <router-link to="/">Login</router-link> |
      <router-link to="/add">Add new toy</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/maps">Find store</router-link> |
      <div v-if="loggedInUser" class="user">
        <span>Hello {{ loggedInUser }}</span>
        <button @click.stop="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch({ type: 'logout' })
      },
    },

    computed: {
      loggedInUser() {
        return this.$store.getters.loggedinUser?.fullname
      },
    },
  }
</script>
