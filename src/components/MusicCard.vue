<template>
	<div id="card">
		<div class="basic-info">
			<img :src="track.album.cover" id="album-img">
			<div id="music-info">
				<p id="music-title">{{ track.title }}</p>
				<p id="music-album">{{ track.artist.name }} / {{ track.album.title }}</p>
			</div>
		</div>
		<div class="player">
			<audio controls id="music-player" :src="track.preview"/>
		</div>
		<button v-if="isFavorite === true" class="remove-fav-btn btn" @click="removeFav">
			<font-awesome-icon class="icon" icon="heart-broken"/>Retirer des favoris
		</button>
		<button v-if="isFavorite === false" class="add-fav-btn btn" @click="addFav">
			<font-awesome-icon class="icon" icon="plus"/>Ajouter dans les favoris
		</button>
	</div>
</template>

<script>
export default {
	name: "Music",
	props: {
		track: Object
	},
	methods: {
		addFav() {
			this.$store.dispatch("addFavorite", this.track);
			this.$emit("onFavAdd");
		},
		removeFav() {
			this.$store.dispatch("removeFavorite", this.track);
			this.$emit("onFavRemove");
		}
	},
	computed: {
		isFavorite() {
			let favs = this.$store.state.FAVORITES;
			if (favs !== "") {
				favs = JSON.parse(favs);
				let found = favs.find(el => el.id === this.track.id);
				return found !== undefined;
			}
			return false;
		}
	}
};
</script>

<style scoped>
#card {
	border: 1px solid #dedede;
	border-radius: 10px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	margin: 5px;
}

.basic-info {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

#music-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 0 0 0 15px;
}

#music-title {
	font-size: 20px;
	font-weight: bold;
}

.player {
	width: 100%;
}

#music-player {
	width: 100%;
	margin: 15px 0 0 0;
}

#album-img {
	width: 75px;
	height: 75px;
}

.btn {
	align-self: flex-start;
}

.add-fav-btn {
	background-color: #00ba48;
}

.remove-fav-btn {
	background-color: #df0028;
}
</style>