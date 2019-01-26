import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		FAVORITES: localStorage.getItem('favorites') || ""
	},
	mutations: {
		addFavorite(state, id) {
			let favs = state.FAVORITES;

			if (favs === null) {
				favs = [];
				favs.push(id);
			} else {
				favs = favs.split(',').map(Number);
				if (!favs.includes(id)) {
					favs.push(id);
				}
			}
			localStorage.setItem('favorites', favs);
		}
	},
	actions: {
		addFavorite(context, id) {
			context.commit('addFavorite', id);
		}
	}
});