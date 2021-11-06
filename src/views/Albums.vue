<template>
  <div class="container albums">
    <AlbumList :albums="albums" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AlbumList from '@/components/Album/AlbumList.vue';

export default {
  components: {
    AlbumList,
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
};
</script>

<style>
.albums {
  margin: 2rem auto;
}
</style>
