<template>
	<div id="search">
		<div class="page-info">
			<h1 id="page-title">Recherche</h1>
			<p id="page-description">Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
		</div>
		<div class="search-container">
			<div class="input-group">
				<label>Titre</label>
				<input name="search-input" v-model="query">
			</div>
			<div class="input-group">
				<label>Trier par :</label>
				<select name="filter-list" v-model="filter">
					<option selected value="ALBUM_ASC">Album</option>
					<option value="ARTIST_ASC">Artiste</option>
					<option value="TRACK_ASC">Musique</option>
					<option value="RANKING">Les plus populaires</option>
					<option value="RATING_ASC">Les mieux notés</option>
				</select>
			</div>
			<button @click="getTracks" :disabled="query === ''" class="go-btn">Go</button>
		</div>
		<div class="results">
			<Loader v-if="isLoading"/>
			<MusicCard
				v-if="tracks.length !== 0"
				v-for="(item, index) in tracks"
				:key="index"
				:track="item"
			/>
			<h2 v-if="gotResults === true && tracks.length === 0 && query !== ''">Aucun résultat</h2>
			<h2 v-if="error !== ''">{{ error }}</h2>
		</div>
	</div>
</template>

<script>
import MusicCard from "@/components/MusicCard";
import Loader from "vue-simple-spinner";
import api from "@/services/ApiConfig";

export default {
	name: "Search",
	components: {
		MusicCard,
		Loader
	},
	data() {
		return {
			query: "",
			filter: "TRACK_ASC",
			tracks: [],
			baseUrl:
				"https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?",
			isLoading: false,
			gotResults: false,
			error: ""
		};
	},
	methods: {
		getTracks() {
			this.isLoading = true;
			this.gotResults = false;
			this.error = "";
			let query = `q=${this.query.split(" ").join("+")}`;
			let fetchUrl = `${this.baseUrl}${query}&order=${this.filter}`;
			api
				.fetchAll(fetchUrl)
				.then(data => {
					this.tracks = data.data;
					this.isLoading = false;
					this.gotResults = true;
				})
				.catch(err => {
					this.isLoading = false;
					this.error = "Invalid query";
				});
		},
		onPlay() {
			this.isPlaying = true;
		}
	}
};
</script>

<style scoped>
#search {
	margin: 10px 50px;
}

#page-title {
	font-size: 50px;
}

#page-description {
	font-size: 20px;
}

.search-container {
	margin: 15px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	border-top: 1px solid #dedede;
	border-bottom: 1px solid #dedede;
	padding: 15px 0;
}

.input-group label {
	font-size: 25px;
	margin-right: 15px;
}

.input-group input {
}

.results {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
</style>
