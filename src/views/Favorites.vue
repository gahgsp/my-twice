<template>
  <div class="container favorites">
    <article class="message is-primary" v-if="favorites.length">
      <div class="message-body">
        Here you can see all the albums that were favorited by you. Remember
        that you can always add new ones to your favorites list.
      </div>
    </article>
    <AlbumList :albums="favorites" :favorites="true" v-if="favorites.length" />
    <article class="message is-warning" v-if="!favorites.length">
      <div class="message-body">
        Ohh no! ): <br />
        It seems that you have not favorited any album yet! Please, see the
        albums list and choose your loved ones.
      </div>
    </article>
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
      storedFavorites: 'favorites',
    }),
    favorites() {
      return this.storedFavorites;
    },
  },
};
</script>

<style>
.favorites {
  margin: 2rem auto;
}
</style>
