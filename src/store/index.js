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

			if (favs === "") {
				favs = [];
				favs.push(id);
			} else {
				favs = favs.split(',').map(Number);
				if (!favs.includes(id)) {
					favs.push(id);
				}
			}
			localStorage.setItem('favorites', favs);
			state.FAVORITES = localStorage.getItem('favorites');
		},
		removeFavorite(state, id) {
			let favs = state.FAVORITES;

			if (favs !== "") {
				favs = favs.split(',').map(Number);
				let foundIndex = favs.findIndex((el) => el === id);
				if (foundIndex !== -1) {
					favs.splice(foundIndex, 1);
					localStorage.setItem('favorites', favs);
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