import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    FAVORITES: localStorage.getItem('favorites') || ''
  },
  mutations: {
    addFavorite(state, track) {
      let favs = state.FAVORITES;

      if (favs === '') {
        favs = [];
        favs.push(track);
      } else {
        favs = JSON.parse(favs);
        if (!favs.includes(track)) {
          favs.push(track);
        }
      }
      localStorage.setItem('favorites', JSON.stringify(favs));
      state.FAVORITES = localStorage.getItem('favorites');
    },
    removeFavorite(state, track) {
      let favs = state.FAVORITES;

      if (favs !== '') {
        favs = JSON.parse(favs);
        let foundIndex = favs.findIndex((el) => el.id === track.id);
        if (foundIndex !== -1) {
          favs.splice(foundIndex, 1);
          localStorage.setItem('favorites', JSON.stringify(favs));
        }
      }
      state.FAVORITES = localStorage.getItem('favorites');
    }
  },
  actions: {
    addFavorite(context, id) {
      context.commit('addFavorite', id);
    },
    removeFavorite(context, id) {
      context.commit('removeFavorite', id);
    }
  }
});