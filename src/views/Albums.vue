<template>
  <div class="container albums">
    <album-list :albums="albums" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AlbumList from '@/components/album/AlbumList.vue';

export default {
  components: {
    AlbumList,
  },
  created() {
    this.loadAllAlbums();
  },
  computed: {
    ...mapGetters({
      storedAlbums: 'albums',
      storedFavorites: 'favorites',
    }),
    albums() {
      return this.storedAlbums.filter(
        (album) =>
          !this.storedFavorites.find(
            (favorite) => favorite.collectionId === album.collectionId
          )
      );
    },
  },
  methods: {
    ...mapActions({
      loadAllAlbums: 'loadAlbums',
    }),
  },
};
</script>

<style>
.albums {
  margin: 2rem auto;
}
</style>
