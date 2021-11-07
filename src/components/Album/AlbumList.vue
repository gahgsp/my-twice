<template>
  <div class="columns is-multiline">
    <div v-for="album in albums" :key="album.collectionId" class="column is-3">
      <album
        :album="album"
        :favorite="favorites"
        @add-favorite="onAddFavorite($event)"
        @remove-favorite="onRemoveFavorite($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Album from './Album.vue';

export default {
  components: {
    Album,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
    favorites: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      addNewFavoriteAlbum: 'addFavorite',
      removeFavoriteAlbum: 'removeFavorite',
    }),
    onAddFavorite(album) {
      this.addNewFavoriteAlbum(album);
      this.$router.push('/favorites');
    },
    onRemoveFavorite(album) {
      this.removeFavoriteAlbum(album);
    },
  },
};
</script>
