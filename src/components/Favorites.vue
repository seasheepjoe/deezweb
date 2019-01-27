<template>
	<div id="favorites">
		<div id="results">
			<Loader v-if="isLoading"/>
			<MusicCard
				v-if="tracks.length !== 0"
				v-for="(item, index) in tracks"
				:key="index"
				:track="item"
				@onFavRemove="removeFav(index)"
			/>
		</div>
	</div>
</template>

<script>
import MusicCard from "@/components/MusicCard.vue";
import Loader from "vue-simple-spinner";

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
			isLoading: true
		};
	},
	methods: {
		getFavorites() {
			let favs = this.$store.state.FAVORITES.split(",").map(Number);
			favs.map(id => {
				fetch(`${this.baseUrl}${id}`).then(response => {
					response.json().then(res => {
						if (!res.error) {
							this.tracks.push(res);
						}
					});
				});
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
</style>