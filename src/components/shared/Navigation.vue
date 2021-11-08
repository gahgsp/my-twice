<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <router-link v-if="!isUserLoggedIn" to="/" class="navbar-item"
        >Home</router-link
      >
      <router-link v-if="isUserLoggedIn" to="/albums" class="navbar-item"
        >Albums</router-link
      >
      <router-link v-if="isUserLoggedIn" to="/favorites" class="navbar-item"
        >My Favorites</router-link
      >
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button v-if="isUserLoggedIn" @click="logout" class="button is-link">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'navigation',
  computed: {
    ...mapGetters({
      isUserLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    ...mapActions({
      logOutUser: 'logOut',
    }),
    logout() {
      this.logOutUser();
    },
  },
};
</script>

<style lang="scss" scoped>
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
