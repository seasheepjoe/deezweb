<template>
	<div id="favorites">
		<div id="results">
			<p v-if="error !== ''">{{ error }}</p>
			<MusicCard
				v-if="tracks.length !== 0"
				v-for="(item, index) in tracks"
				:key="index"
				:track="item"
				@onFavRemove="removeFav(index)"
			/>
			<Loader v-if="isLoading"/>
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
#favorites,
#results {
	margin: 10px 50px;
}
</style>