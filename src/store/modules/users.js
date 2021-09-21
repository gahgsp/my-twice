import api from "@/services/api.js";

import router from "@/router.js";

const state = {
  currentUser: null,
  userError: null,
};

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  setUserError(state, error) {
    state.userError = error;
  },
};

const actions = {
  logIn({ commit }, user) {
    api
      .get("/users", {
        params: {
          username: user.username,
          password: user.password,
        },
      })
      .then(({ data }) => {
        commit("setFavorites", data[0].favorites);
        commit("setCurrentUser", data[0]);
        commit("setUserError", null);
        router.push("/albums");
      })
      .catch(() => {
        commit("setUserError", "An error occurred while logging in. Please, check the informations and try again.");
      });
  },
  async register({ commit }, user) {
    const isAlreadyRegistered = await api
      .get("/users", {
        params: {
          username: user.username,
        },
      })
      .then((response) => response.data && !!response.data.length);
    if (!isAlreadyRegistered) {
      api.post("/users", user).then(({ data }) => {
        commit("setCurrentUser", data);
        commit("setUserError", null);
        router.push("/albums");
      });
    } else {
      commit("setUserError", "Unfortunately there is already an user with this username. Please, change the username and try again.");
    }
  },
  logOut({ commit, rootState }) {
    const updatedUser = { ...state.currentUser, favorites: rootState.albums.favorites || [] };
    api.put(`users/${state.currentUser.id}`, updatedUser).then(() => {
      commit("setCurrentUser", null);
      router.push("/");
    });
  },
};

const getters = {
  currentUser: (state) => state.currentUser,
  isLoggedIn: (state) => !!state.currentUser,
  errorMessage: (state) => state.userError,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
