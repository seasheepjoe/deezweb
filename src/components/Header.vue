<template>
	<div class="header">
		<h1 id="title">Deezweb</h1>
		<div class="nav-items">
			<router-link class="nav-link" to="/">
				<font-awesome-icon class="icon" icon="home"/>Accueil
			</router-link>
			<router-link class="nav-link" to="/search">
				<font-awesome-icon class="icon" icon="search"/>Recherche
			</router-link>
			<router-link class="nav-link" to="/favorites">
				<font-awesome-icon class="icon" icon="heartbeat"/>Mes favoris
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background-color: #383b43;
	margin: 0;
	padding: 20px 0;
}

a {
	color: #fff;
	font-size: 20px;
	transition: all 0.3s;
}

a:hover {
	font-weight: bold;
	transition: all 0.3s;
}

#title {
	color: #fff;
	margin: 0 50px;
}

.icon {
	margin: 0 5px;
}

.nav-items {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
}

.nav-link {
	margin: 0 10px;
	color: grey;
}

.router-link-exact-active {
	color: white;
}
</style>
