<template>
	<div class="home">
		<div class="welcome-message">
			<h1 id="welcome-title">Bienvenue sur Deezweb</h1>
			<h4 id="welcome-description">L'application qui permet facilement d'écouter de la musique.</h4>
		</div>
		<div v-if="$store.state.FAVORITES !== ''" class="random-favorite">
			<Loader v-if="isLoading"/>
			<MusicCard v-if="track !== null && !isLoading" :track="track" @onFavRemove="getRandomFav"/>
			<button v-if="track !== null && !isLoading" id="random-btn" @click="getRandomFav">
				<font-awesome-icon class="icon" icon="random"/>Choisir une autre musique
			</button>
		</div>
	</div>
</template>

<script>
import MusicCard from "@/components/MusicCard";
import api from "@/services/ApiConfig";
import Loader from "vue-simple-spinner";

export default {
	name: "Home",
	beforeMount() {
		this.getRandomFav();
	},
	components: {
		MusicCard,
		Loader
	},
	data() {
		return {
			track: null,
			isLoading: true
		};
	},
	methods: {
		getRandomFav() {
			this.isLoading = true;
			this.track = null;
			let favs = this.$store.state.FAVORITES;
			if (favs !== "") {
				favs = JSON.parse(favs);
				if (favs.length !== 0) {
					let randomFav = favs[Math.floor(Math.random() * favs.length)];
					this.track = randomFav;
				}
			} else {
				console.warn("No favorites");
			}
			this.isLoading = false;
		}
	}
};
</script>

<style scoped>
.home {
	margin: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.welcome-message {
	padding: 100px;
	width: 50%;
	background-color: #e9ebef;
	border-radius: 10px;
}

#welcome-title {
	font-size: 75px;
	font-weight: normal;
	color: #26292e;
}

#welcome-description {
	color: #26292e;
}

.random-favorite {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#random-btn {
	background-color: #4e00ff;
	color: #fff;
}
</style>
