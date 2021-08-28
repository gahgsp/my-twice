import album from "@/services/album.js";

const state = {
  albums: [],
  favorites: [],
};

const mutations = {
  setAlbums(state, albums) {
    state.albums = albums;
  },
  setFavorite(state, album) {
    state.favorites.push(album);
  },
  removeFavorite(state, album) {
    state.favorites = state.favorites.filter((favoriteAlbum) => favoriteAlbum.collectionId !== album.collectionId);
  },
  setFavorites(state, albums) {
    state.favorites = albums;
  },
};

const actions = {
  async loadAlbums({ commit }) {
    album.get("lookup?id=1203816887&entity=album").then((response) => {
      commit(
        "setAlbums",
        response.data.results.filter((result) => result.collectionType === "Album")
      );
    });
  },
  addFavorite({ commit }, album) {
    commit("setFavorite", album);
  },
  removeFavorite({ commit }, album) {
    commit("removeFavorite", album);
  },
};

const getters = {
  albums: (state) => state.albums,
  favorites: (state) => state.favorites,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
