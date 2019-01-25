<template>
	<div id="card">
		<div class="basic-info">
			<img
				src="https://images.store.hmv.com/app_/responsive/HMVStore/media/product/433373/01-433373.jpg?w=500"
				id="album-img"
			>
			<div id="music-info">
				<p id="music-title">Lose Yourself</p>
				<p id="music-album">Eminem / Curtain Call</p>
			</div>
		</div>
		<div class="player">
			<audio controls id="music-player"/>
		</div>
		<button class="remove-fav-btn" @click="$emit('incrementBtn')">Retirer des favoris</button>
	</div>
</template>

<script>
export default {
	name: "Music"
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