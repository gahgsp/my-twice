<template>
  <div id="app">
    <nav
      class="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-menu">
        <router-link v-if="!isLoggedIn" to="/" class="navbar-item"
          >Home</router-link
        >
        <router-link v-if="isLoggedIn" to="/albums" class="navbar-item"
          >Albums</router-link
        >
        <router-link v-if="isLoggedIn" to="/favorites" class="navbar-item"
          >My Favorites</router-link
        >
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button v-if="isLoggedIn" @click="logout" class="button is-link">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("loadAlbums");
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
