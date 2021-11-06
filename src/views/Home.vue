<template>
  <div class="home">
    <img src="../assets/logo.png" class="logo" alt="TWICE logo" />
    <h1 class="title">My Twice</h1>
    <h2 class="subtitle">
      Welcome to the best <i>ONCEs</i> platform to share your favorite albums
      with fans all around the world!
    </h2>
    <p>
      Create your account right now to access all the TWICE discography and
      begin to share your passion with our community.
    </p>
    <br />
    <div class="container">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" v-model="username" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password" />
        </div>
      </div>
      <article class="message is-danger" v-if="userErrorMessage">
        <div class="message-body">
          {{ userErrorMessage }}
        </div>
      </article>
      <div class="buttons is-centered">
        <button
          @click="login"
          :disabled="!isFormValid"
          class="button is-primary"
        >
          Login
        </button>
        <button
          @click="register"
          :disabled="!isFormValid"
          class="button is-link"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters({
      currentUserErrorMessage: 'errorMessage',
    }),
    isFormValid() {
      return this.username && this.password;
    },
    userErrorMessage() {
      return this.currentUserErrorMessage;
    },
  },
  methods: {
    ...mapActions({
      registerUser: 'register',
      loginUser: 'logIn',
    }),
    register() {
      const user = {
        username: this.username,
        password: this.password,
        favorites: [],
      };
      this.registerUser(user);
    },
    login() {
      const user = {
        username: this.username,
        password: this.password,
      };
      this.loginUser(user);
    },
  },
};
</script>

<style scoped>
.logo {
  max-width: 20rem;
}
</style>
