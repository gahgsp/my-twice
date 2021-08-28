<template>
  <div class="container albums">
    <AlbumList :albums="albums" />
  </div>
</template>

<script>
import AlbumList from "@/components/Album/AlbumList.vue";

export default {
  components: {
    AlbumList,
  },
  computed: {
    albums() {
      return this.$store.getters.albums.filter(
        (album) =>
          !this.$store.getters.favorites.find(
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