<template>
  <main class="main animate">
    <div class="container">
      <div class="main__box">
        <div class="main__wrap">
          <h2 class="main__wrap-title">Фильмы</h2>
          <div class="main__wrap__filters">
            <FilmsCheckbox
              :is-disabled="isFilterDate"
              v-model="isFilterName"
              :title="isFilterNameLabel"
            />
            <FilmsCheckbox
              :is-disabled="isFilterName"
              v-model="isFilterDate"
              :title="isFilterDateLabel"
            />
          </div>
        </div>
        <LoaderPic v-if="filmsListLoading" />
        <div v-else-if="filmsListLoadingFailed">
          Произошла ошибка, пожалуста перезагрузите страницу
        </div>
        <FilmsCard
          v-else
          v-for="el in updateFilmsListData"
          :key="el.id"
          :film-id="el.id"
          :title="el.title"
          :title_alternative="el.title_alternative"
          :img-src="el.imgSrc"
          :genres="el.genres"
          :date="el.year"
          :directors="el.directors"
          :actors="el.actors"
          :description="el.description"
          :film-item="el"
        />
      </div>
    </div>
  </main>
</template>

<script>
import FilmsCard from "@/components/FilmsCard/FilmsCard";
import FilmsCheckbox from "@/components/FilmsCheckbox/FilmsCheckbox";
import LoaderPic from "@/components/LoaderPic/LoaderPic";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
  components: {
    FilmsCard,
    FilmsCheckbox,
    LoaderPic,
  },
  data() {
    return {
      isFilterName: false,
      isFilterNameLabel: "Отсортировать по названию",
      isFilterDate: false,
      isFilterDateLabel: "Отсортировать по году",
    };
  },
  computed: {
    ...mapGetters(["filmsList", "filmsListLoadingFailed", "filmsListLoading"]),
    updateFilmsListData() {
      if (this.isFilterName) {
        return [...this.filmsList].sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      }
      if (this.isFilterDate) {
        return [...this.filmsList].sort((a, b) => {
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          return 0;
        });
      }
      return this.filmsList;
    },
  },
  methods: {
    ...mapActions(["loadFilms"]),
  },
  created() {
    this.loadFilms();
  },
};
</script>
