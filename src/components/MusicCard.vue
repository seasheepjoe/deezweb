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
		<button class="remove-fav-btn" @click="$emit('removeFav')">Retirer des favoris</button>
	</div>
</template>

<script>
export default {
	name: "Music",
	props: {
		track: Object
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

#music-player {
	width: 450px;
	margin: 15px 0 0 0;
}

#album-img {
	width: 75px;
	height: 75px;
}

.remove-fav-btn {
	align-self: flex-start;
	margin: 15px 0;
}
</style>