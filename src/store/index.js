import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_BASE_URL } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filmsList: [],
    filmsListLoading: true,
    filmsListLoadingFailed: false,
  },
  getters: {
    filmsList(state) {
      return state.filmsList;
    },
    filmsListLoadingFailed(state) {
      return state.filmsListLoadingFailed;
    },
    filmsListLoading(state) {
      return state.filmsListLoading;
    },
  },
  mutations: {
    updateFilmsList(state, items) {
      state.filmsList = items;
    },
    updateFilmsListLoadingFailed(state, boolean) {
      state.filmsListLoadingFailed = boolean;
    },
    updateFilmsListLoading(state, boolean) {
      state.filmsListLoading = boolean;
    },
  },
  actions: {
    loadFilms(context) {
      axios
        .get(API_BASE_URL + "/api/movies")
        .then((response) => {
          context.commit(
            "updateFilmsList",
            response.data.data.map((el) => {
              return {
                ...el,
                imgSrc: `http://www.kinopoisk.ru/images/film_big${el.poster.substring(
                  el.poster.lastIndexOf("/")
                )}`,
              };
            })
          );
        })
        .catch(() => context.commit("updateFilmsListLoadingFailed", true))
        .then(() => context.commit("updateFilmsListLoading", false));
    },
  },
});
