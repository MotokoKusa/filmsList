<template>
  <div class="films-card">
    <div v-if="imgSrc" class="films-card__pic">
      <img :src="imgSrc" :alt="title_alternative" />
    </div>
    <div class="films-card__content">
      <router-link
        class="films-card__content-title txt--xl"
        :to="{ name: 'film', params: { id: filmId, film: filmItem } }"
      >
        {{ title }}
      </router-link>
      <p
        v-if="date || updateGenres"
        class="films-card__content-subtitle txt--xs txt--brown"
      >
        <span>{{ date }}</span> ,
        <span>{{ updateGenres }}</span>
      </p>
      <p
        v-if="updateDirectors"
        class="films-card__content-director txt--xs txt--brown"
      >
        Режисер:
        <span>{{ updateDirectors }}</span>
      </p>
      <p
        v-if="updateActors"
        class="films-card__content-actors txt--xs txt--brown"
      >
        АКТЁРЫ:
        <span class="txt--white txt--xss">{{ updateActors }}</span>
      </p>
      <p v-if="description" class="films-card__content-description txt--m">
        {{ description }}
      </p>

      <div v-if="updateDuration" class="films-card__content-times txt--xs">
        <p>{{ updateDuration }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import "./FilmsCard.scss";

export default {
  name: "FilmsItem",
  props: [
    "imgSrc",
    "imgAlt",
    "title",
    "date",
    "genres",
    "directors",
    "actors",
    "description",
    "title_alternative",
    "filmId",
    "filmItem",
    "duration",
  ],
  computed: {
    updateGenres() {
      if (this.genres) {
        return this.genres.join(", ");
      }
      return null;
    },
    updateDirectors() {
      if (this.directors) {
        return this.directors.join(", ");
      }
      return null;
    },
    updateActors() {
      if (this.actors) {
        return this.actors.join(", ");
      }
      return null;
    },
    updateDuration() {
      if (this.duration) {
        return this.duration.join();
      }
      return null;
    },
  },
};
</script>
