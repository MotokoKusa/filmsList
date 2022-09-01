<template>
  <main class="main">
    <div class="container">
      <div class="main__box">
        <div class="main__wrap">
          <router-link class="main__wrap-back" :to="{ name: 'main' }">
            <span>Назад к списку</span>
          </router-link>
        </div>
        <LoaderPic v-if="filmListLoading" />
        <div class="txt--xm" v-else-if="!filmCard">
          К сожалению, по вашему запросу ничего не найдено...
        </div>
        <FilmsCard
          v-else
          :key="filmCard.id"
          :film-id="filmCard.id"
          :title="filmCard.title"
          :title_alternative="filmCard.title_alternative"
          :img-src="filmCard.imgSrc"
          :genres="filmCard.genres"
          :date="filmCard.year"
          :directors="filmCard.directors"
          :actors="filmCard.actors"
          :description="filmCard.description"
          :film-item="filmCard"
          :duration="filmCard.collapse.duration"
        />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/config";
import FilmsCard from "@/components/FilmsCard/FilmsCard";
import LoaderPic from "@/components/LoaderPic/LoaderPic";

export default {
  name: "FilmPage",
  components: {
    FilmsCard,
    LoaderPic,
  },
  data() {
    return {
      filmCard: null,
      filmListLoading: false,
      filmListLoadingFailed: false,
    };
  },
  methods: {
    loadFilm(id, item) {
      this.filmListLoading = true;
      if (item) {
        this.filmCard = item;
        this.filmListLoading = false;
      } else {
        axios
          .get(API_BASE_URL + "/api/movie/" + id)
          .then((response) => {
            console.log(response);
            if (response.data.data) {
              this.filmCard = response.data.data;
              this.filmCard.imgSrc = `http://www.kinopoisk.ru/images/film_big${this.filmCard.poster.substring(
                this.filmCard.poster.lastIndexOf("/")
              )}`;
            }
          })
          .catch(() => (this.filmListLoadingFailed = true))
          .then(() => (this.filmListLoading = false));
      }
    },
  },
  watch: {
    "$route.params.id"(val) {
      this.filmCard = null;
      this.loadFilm(val, this.$route.params.film);
    },
  },
  created() {
    this.loadFilm(this.$route.params.id, this.$route.params.film);
  },
};
</script>
