<template>
	<div class="home">
		<div class="welcome-message">
			<h1 id="welcome-title">Bienvenue sur Deezweb</h1>
			<h4 id="welcome-description">L'application qui permet facilement d'écouter de la musique.</h4>
		</div>
		<MusicCard/>
	</div>
</template>

<script>
import MusicCard from "@/components/MusicCard";

export default {
	name: "Home",
	components: {
		MusicCard
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
</style>
