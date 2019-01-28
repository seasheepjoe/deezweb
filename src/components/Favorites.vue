<template>
	<div id="favorites">
		<div class="page-info">
			<h1 id="page-title">Mes favoris</h1>
			<p id="page-description">Liste de mes titres favoris :</p>
		</div>
		<div class="results">
			<p v-if="error !== ''">{{ error }}</p>
			<MusicCard
				v-if="tracks.length !== 0"
				v-for="(item, index) in tracks"
				:key="index"
				:track="item"
				@onFavRemove="removeFav(index)"
			/>
			<Loader id="loader" v-if="isLoading"/>
		</div>
		<h2 v-if="gotResults === true && tracks.length === 0">Aucun résultat</h2>
	</div>
</template>

<script>
import MusicCard from "@/components/MusicCard.vue";
import Loader from "vue-simple-spinner";
import api from "@/services/ApiConfig";

export default {
	beforeMount() {
		this.getFavorites();
	},
	name: "Favorites",
	components: {
		MusicCard,
		Loader
	},
	data() {
		return {
			baseUrl:
				"https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/",
			tracks: [],
			isLoading: true,
			error: "",
			gotResults: false
		};
	},
	methods: {
		getFavorites() {
			let favs = this.$store.state.FAVORITES.split(",").map(Number);
			let favsList = favs.map(id => {
				return api
					.fetchById(id)
					.then(data => {
						if (data) this.tracks.push(data);
					})
					.catch(err => {
						this.error = "Error, please reload page.";
						this.isLoading = false;
					});
			});

			Promise.all(favsList).then(() => {
				this.isLoading = false;
				this.gotResults = true;
			});
		},
		removeFav(index) {
			this.tracks.splice(index, 1);
		}
	}
};
</script>

<style scoped>
#favorites {
	margin: 10px 50px;
}
#page-title {
	font-size: 50px;
}

#page-description {
	font-size: 20px;
}

.results {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

#loader {
	margin: 0 auto;
}
</style>