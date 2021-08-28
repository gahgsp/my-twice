<template>
  <div class="columns is-multiline">
    <div v-for="album in albums" :key="album.collectionId" class="column is-3">
      <Album :album="album" :favorite="favorites" />
    </div>
  </div>
</template>

<script>
import Album from "./Album.vue";
export default {
  components: {
    Album,
  },
  props: ["albums", "favorites"],
};
</script>

<style>
</style>