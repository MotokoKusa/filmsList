<template>
  <div class="films-card">
    <div class="films-card__pic">
      <img :src="imgSrc" :alt="title_alternative" />
    </div>
    <div class="films-card__content">
      <router-link
        class="films-card__content-title txt--xl"
        :to="{ name: 'film', params: { id: filmId, film: filmItem } }"
      >
        {{ title }}
      </router-link>
      <p class="films-card__content-subtitle txt--xs">
        <span>{{ date }}</span> ,
        <span v-for="el in genres" :key="el">{{ el }}</span>
      </p>
      <p class="films-card__content-director txt--xs">
        Режисер: <span v-for="(el, idx) in directors" :key="idx">{{ el }}</span>
      </p>
      <p class="films-card__content-actors txt--xs">
        АКТЁРЫ:
        <span class="txt--brown" v-for="(el, idx) in actors" :key="idx">{{
          el
        }}</span>
      </p>
      <p v-if="description" class="films-card__content-description txt--m">
        {{ description }}
      </p>
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
  ],
};
</script>
