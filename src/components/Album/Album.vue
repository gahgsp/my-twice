<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img
          :src="buildImage(album)"
          :alt="`${album.collectionName} album image`"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ album.collectionName }}</p>
        </div>
      </div>
      <div class="content has-text-left">
        <p><strong>Tracks</strong>: {{ album.trackCount }}</p>
        <p>
          <strong>Release Data</strong>:
          {{ formatReleaseDate(album.releaseDate) }}
        </p>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <button
          class="button is-danger is-inverted is-medium"
          @click="onFavorite(album)"
          v-if="!favorite"
        >
          <span class="icon">
            <HeartIcon :size="48" />
          </span>
        </button>
        <button
          class="button is-danger is-inverted is-medium"
          @click="onRemoveFavorite(album)"
          v-if="favorite"
        >
          <span class="icon">
            <HeartBrokenIcon :size="48" />
          </span>
        </button>
      </div>
      <div class="card-footer-item">
        <a :href="album.collectionViewUrl" target="_blank">Read More</a>
      </div>
    </footer>
  </div>
</template>

<script>
import moment from "moment";
import HeartIcon from "vue-material-design-icons/Heart.vue";
import HeartBrokenIcon from "vue-material-design-icons/HeartBroken.vue";

export default {
  props: ["album", "favorite"],
  components: {
    HeartBrokenIcon,
    HeartIcon,
  },
  methods: {
    buildImage(album) {
      return album.artworkUrl100.replace("100x100bb", "1000x1000bb");
    },
    onFavorite(album) {
      this.$store.dispatch("addFavorite", album);
      this.$router.push("/favorites");
    },
    onRemoveFavorite(album) {
      this.$store.dispatch("removeFavorite", album);
    },
    formatReleaseDate(releaseDate) {
      return moment(releaseDate).format("DD.MM.YYYY");
    },
  },
};
</script>
