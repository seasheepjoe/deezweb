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
					<option selected value="Album">Album</option>
					<option value="Artiste">Artiste</option>
					<option value="Musique">Musique</option>
					<option value="Les plus populaires">Les plus populaires</option>
					<option value="Les mieux notés">Les mieux notés</option>
				</select>
			</div>
			<button @click="getTracks" class="go-btn">Go</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Search",
	data() {
		return {
			query: "",
			filter: ""
		};
	},
	methods: {
		getTracks() {
			console.log(`Getting tracks by ${this.filter} and [${this.query}]`);
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
</style>
