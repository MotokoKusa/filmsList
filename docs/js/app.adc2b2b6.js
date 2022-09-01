(function() {
  "use strict";
  var t = {
    7811: function(t, i, e) {
      var s = e(6369), a = function() {
          var t = this, i = t._self._c;
          return i("div", { attrs: { id: "app" } }, [i("SHeader"), i("router-view")], 1);
        }, r = [], n = function() {
          var t = this;
          t._self._c;
          return t._m(0);
        }, l = [function() {
          var t = this, i = t._self._c;
          return i("header", { staticClass: "header" }, [i("p", { staticClass: "header__title" }, [t._v("#movienow")])]);
        }], o = { name: "SHeader" }, d = o, c = e(1001), m = (0, c.Z)(d, n, l, !1, null, null, null), u = m.exports,
        f = { components: { SHeader: u } }, p = f, _ = (0, c.Z)(p, a, r, !1, null, null, null), h = _.exports,
        v = e(2631), g = function() {
          var t = this, i = t._self._c;
          return i("main", { staticClass: "main animate" }, [i("div", { staticClass: "container" }, [i("div", { staticClass: "main__box" }, [i("div", { staticClass: "main__wrap" }, [i("h2", { staticClass: "main__wrap-title txt--xm" }, [t._v("Фильмы")]), i("div", { staticClass: "main__wrap__filters" }, [i("FilmsCheckbox", {
            attrs: {
              "is-disabled": t.isFilterDate,
              title: t.isFilterNameLabel
            }, model: {
              value: t.isFilterName, callback: function(i) {
                t.isFilterName = i;
              }, expression: "isFilterName"
            }
          }), i("FilmsCheckbox", {
            attrs: { "is-disabled": t.isFilterName, title: t.isFilterDateLabel },
            model: {
              value: t.isFilterDate, callback: function(i) {
                t.isFilterDate = i;
              }, expression: "isFilterDate"
            }
          })], 1)]), t.filmsListLoading ? i("LoaderPic") : t.filmsListLoadingFailed ? i("div", [t._v(" Произошла ошибка, пожалуста перезагрузите страницу ")]) : t._l(t.updateFilmsListData, (function(t) {
            return i("FilmsCard", {
              key: t.id,
              attrs: {
                "film-id": t.id,
                title: t.title,
                title_alternative: t.title_alternative,
                "img-src": t.imgSrc,
                genres: t.genres,
                date: t.year,
                directors: t.directors,
                actors: t.actors,
                description: t.description,
                "film-item": t,
                duration: t.collapse.duration
              }
            });
          }))], 2)])]);
        }, C = [], L = function() {
          var t = this, i = t._self._c;
          return i("div", { staticClass: "films-card" }, [t.imgSrc ? i("div", { staticClass: "films-card__pic" }, [i("img", {
            attrs: {
              src: t.imgSrc,
              alt: t.title_alternative
            }
          })]) : t._e(), i("div", { staticClass: "films-card__content" }, [i("router-link", {
            staticClass: "films-card__content-title txt--xl",
            attrs: { to: { name: "film", params: { id: t.filmId, film: t.filmItem } } }
          }, [t._v(" " + t._s(t.title) + " ")]), t.date || t.updateGenres ? i("p", { staticClass: "films-card__content-subtitle txt--xs txt--brown" }, [i("span", [t._v(t._s(t.date))]), t._v(" , "), i("span", [t._v(t._s(t.updateGenres))])]) : t._e(), t.updateDirectors ? i("p", { staticClass: "films-card__content-director txt--xs txt--brown" }, [t._v(" Режисер: "), i("span", [t._v(t._s(t.updateDirectors))])]) : t._e(), t.updateActors ? i("p", { staticClass: "films-card__content-actors txt--xs txt--brown" }, [t._v(" АКТЁРЫ: "), i("span", { staticClass: "txt--white txt--xss" }, [t._v(t._s(t.updateActors))])]) : t._e(), t.description ? i("p", { staticClass: "films-card__content-description txt--m" }, [t._v(" " + t._s(t.description) + " ")]) : t._e(), t.updateDuration ? i("div", { staticClass: "films-card__content-times txt--xs" }, [i("p", [t._v(t._s(t.updateDuration))])]) : t._e()], 1)]);
        }, x = [], F = {
          name: "FilmsItem",
          props: ["imgSrc", "imgAlt", "title", "date", "genres", "directors", "actors", "description", "title_alternative", "filmId", "filmItem", "duration"],
          computed: {
            updateGenres() {
              return this.genres ? this.genres.join(", ") : null;
            }, updateDirectors() {
              return this.directors ? this.directors.join(", ") : null;
            }, updateActors() {
              return this.actors ? this.actors.join(", ") : null;
            }, updateDuration() {
              return this.duration ? this.duration.join() : null;
            }
          }
        }, b = F, k = (0, c.Z)(b, L, x, !1, null, null, null), w = k.exports, y = function() {
          var t = this, i = t._self._c;
          return i("div", { staticClass: "films-checkbox" }, [i("label", { staticClass: "films-checkbox-custom" }, [i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.updatedCheckBox,
              expression: "updatedCheckBox"
            }],
            attrs: { disabled: t.isDisabled, type: "checkbox", name: t.title },
            domProps: {
              value: t.isChecked,
              checked: Array.isArray(t.updatedCheckBox) ? t._i(t.updatedCheckBox, t.isChecked) > -1 : t.updatedCheckBox
            },
            on: {
              change: function(i) {
                var e = t.updatedCheckBox, s = i.target, a = !!s.checked;
                if (Array.isArray(e)) {
                  var r = t.isChecked, n = t._i(e, r);
                  s.checked ? n < 0 && (t.updatedCheckBox = e.concat([r])) : n > -1 && (t.updatedCheckBox = e.slice(0, n).concat(e.slice(n + 1)));
                } else t.updatedCheckBox = a;
              }
            }
          }), i("span", [t._v(t._s(t.title))])])]);
        }, P = [], D = {
          name: "FilmsCheckbox",
          props: { title: { type: String }, isChecked: { type: Boolean }, isDisabled: { type: Boolean } },
          model: { prop: "isChecked", event: "change" },
          computed: {
            updatedCheckBox: {
              set(t) {
                this.$emit("change", t);
              }, get() {
                return this.isChecked;
              }
            }
          }
        }, Z = D, O = (0, c.Z)(Z, y, P, !1, null, null, null), S = O.exports, B = function() {
          var t = this;
          t._self._c;
          return t._m(0);
        }, N = [function() {
          var t = this, i = t._self._c;
          return i("div", { staticClass: "loader" }, [i("img", {
            staticClass: "loader__img-1",
            attrs: { src: e(1858) }
          }), i("img", { staticClass: "loader__img-2", attrs: { src: e(2965) } })]);
        }], j = { name: "LoaderPic" }, A = j, $ = (0, c.Z)(A, B, N, !1, null, "7d95385a", null), I = $.exports,
        G = e(3822), H = {
          name: "MainPage",
          components: { FilmsCard: w, FilmsCheckbox: S, LoaderPic: I },
          data() {
            return {
              isFilterName: !1,
              isFilterNameLabel: "Отсортировать по названию",
              isFilterDate: !1,
              isFilterDateLabel: "Отсортировать по году"
            };
          },
          computed: {
            ...(0, G.Se)(["filmsList", "filmsListLoadingFailed", "filmsListLoading"]), updateFilmsListData() {
              return this.isFilterName ? [...this.filmsList].sort(((t, i) => t.title < i.title ? -1 : t.title > i.title ? 1 : 0)) : this.isFilterDate ? [...this.filmsList].sort(((t, i) => t.year < i.year ? -1 : t.year > i.year ? 1 : 0)) : this.filmsList;
            }
          },
          methods: { ...(0, G.nv)(["loadFilms"]) },
          created() {
            this.loadFilms();
          }
        }, T = H, M = (0, c.Z)(T, g, C, !1, null, null, null), E = M.exports, q = function() {
          var t = this, i = t._self._c;
          return i("main", { staticClass: "main" }, [i("div", { staticClass: "container" }, [i("div", { staticClass: "main__box" }, [i("div", { staticClass: "main__wrap" }, [i("router-link", {
            staticClass: "main__wrap-back",
            attrs: { to: { name: "main" } }
          }, [i("span", [t._v("Назад к списку")])])], 1), t.filmListLoading ? i("LoaderPic") : t.filmCard ? i("FilmsCard", {
            key: t.filmCard.id,
            attrs: {
              "film-id": t.filmCard.id,
              title: t.filmCard.title,
              title_alternative: t.filmCard.title_alternative,
              "img-src": t.filmCard.imgSrc,
              genres: t.filmCard.genres,
              date: t.filmCard.year,
              directors: t.filmCard.directors,
              actors: t.filmCard.actors,
              description: t.filmCard.description,
              "film-item": t.filmCard,
              duration: t.filmCard.collapse.duration
            }
          }) : i("div", { staticClass: "txt--xm" }, [t._v(" К сожалению, по вашему запросу ничего не найдено... ")])], 1)])]);
        }, z = [], J = e(6265), K = e.n(J);
      const Q = "https://floating-sierra-20135.herokuapp.com";
      var R = {
        name: "FilmPage", components: { FilmsCard: w, LoaderPic: I }, data() {
          return { filmCard: null, filmListLoading: !1, filmListLoadingFailed: !1 };
        }, methods: {
          loadFilm(t, i) {
            this.filmListLoading = !0, i ? (this.filmCard = i, this.filmListLoading = !1) : K().get(Q + "/api/movie/" + t).then((t => {
              console.log(t), t.data.data && (this.filmCard = t.data.data, this.filmCard.imgSrc = `http://www.kinopoisk.ru/images/film_big${this.filmCard.poster.substring(this.filmCard.poster.lastIndexOf("/"))}`);
            })).catch((() => this.filmListLoadingFailed = !0)).then((() => this.filmListLoading = !1));
          }
        }, watch: {
          "$route.params.id"(t) {
            this.filmCard = null, this.loadFilm(t, this.$route.params.film);
          }
        }, created() {
          this.loadFilm(this.$route.params.id, this.$route.params.film);
        }
      }, U = R, V = (0, c.Z)(U, q, z, !1, null, null, null), W = V.exports, X = function() {
        var t = this, i = t._self._c;
        return i("main", [t._v("Not Found")]);
      }, Y = [], tt = { name: "NotFoundPage" }, it = tt, et = (0, c.Z)(it, X, Y, !1, null, null, null), st = et.exports;
      s.ZP.use(v.ZP);
      const at = [{ name: "main", component: E, path: "/" }, {
        name: "film",
        component: W,
        path: "/film/:id"
      }, { name: "notFound", component: st, path: "*" }], rt = new v.ZP({ routes: at });
      var nt = rt;
      s.ZP.use(G.ZP);
      var lt = new G.ZP.Store({
        state: { filmsList: [], filmsListLoading: !0, filmsListLoadingFailed: !1 },
        getters: {
          filmsList(t) {
            return t.filmsList;
          }, filmsListLoadingFailed(t) {
            return t.filmsListLoadingFailed;
          }, filmsListLoading(t) {
            return t.filmsListLoading;
          }
        },
        mutations: {
          updateFilmsList(t, i) {
            t.filmsList = i;
          }, updateFilmsListLoadingFailed(t, i) {
            t.filmsListLoadingFailed = i;
          }, updateFilmsListLoading(t, i) {
            t.filmsListLoading = i;
          }
        },
        actions: {
          loadFilms(t) {
            K().get(Q + "/api/movies").then((i => {
              t.commit("updateFilmsList", i.data.data.map((t => ({
                ...t,
                imgSrc: `http://www.kinopoisk.ru/images/film_big${t.poster.substring(t.poster.lastIndexOf("/"))}`
              }))));
            })).catch((() => t.commit("updateFilmsListLoadingFailed", !0))).then((() => t.commit("updateFilmsListLoading", !1)));
          }
        }
      });
      s.ZP.config.productionTip = !1, new s.ZP({ router: nt, store: lt, render: t => t(h) }).$mount("#app");
    }, 1858: function(t, i, e) {
      t.exports = e.p + "img/circle.448887a4.svg";
    }, 2965: function(t, i, e) {
      t.exports = e.p + "img/circle1.76f95abe.svg";
    }
  }, i = {};

  function e(s) {
    var a = i[s];
    if (void 0 !== a) return a.exports;
    var r = i[s] = { exports: {} };
    return t[s](r, r.exports, e), r.exports;
  }

  e.m = t, function() {
    var t = [];
    e.O = function(i, s, a, r) {
      if (!s) {
        var n = 1 / 0;
        for (c = 0; c < t.length; c++) {
          s = t[c][0], a = t[c][1], r = t[c][2];
          for (var l = !0, o = 0; o < s.length; o++) (!1 & r || n >= r) && Object.keys(e.O).every((function(t) {
            return e.O[t](s[o]);
          })) ? s.splice(o--, 1) : (l = !1, r < n && (n = r));
          if (l) {
            t.splice(c--, 1);
            var d = a();
            void 0 !== d && (i = d);
          }
        }
        return i;
      }
      r = r || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > r; c--) t[c] = t[c - 1];
      t[c] = [s, a, r];
    };
  }(), function() {
    e.n = function(t) {
      var i = t && t.__esModule ? function() {
        return t["default"];
      } : function() {
        return t;
      };
      return e.d(i, { a: i }), i;
    };
  }(), function() {
    e.d = function(t, i) {
      for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
    };
  }(), function() {
    e.g = function() {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" === typeof window) return window;
      }
    }();
  }(), function() {
    e.o = function(t, i) {
      return Object.prototype.hasOwnProperty.call(t, i);
    };
  }(), function() {
    e.p = "/";
  }(), function() {
    var t = { 143: 0 };
    e.O.j = function(i) {
      return 0 === t[i];
    };
    var i = function(i, s) {
      var a, r, n = s[0], l = s[1], o = s[2], d = 0;
      if (n.some((function(i) {
        return 0 !== t[i];
      }))) {
        for (a in l) e.o(l, a) && (e.m[a] = l[a]);
        if (o) var c = o(e);
      }
      for (i && i(s); d < n.length; d++) r = n[d], e.o(t, r) && t[r] && t[r][0](), t[r] = 0;
      return e.O(c);
    }, s = self["webpackChunkvue_films_list"] = self["webpackChunkvue_films_list"] || [];
    s.forEach(i.bind(null, 0)), s.push = i.bind(null, s.push.bind(s));
  }();
  var s = e.O(void 0, [998], (function() {
    return e(7811);
  }));
  s = e.O(s);
})();
//# sourceMappingURL=app.adc2b2b6.js.map
