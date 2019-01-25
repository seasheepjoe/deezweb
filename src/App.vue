<template>
	<div id="app">
		<Header/>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "app",
	components: {
		Header
	}
};
</script>

<style>
@font-face {
	font-family: "futura";
	src: url("./assets/FuturaPTLight.otf");
}

* {
	font-family: "futura";
	margin: 0;
	padding: 0;
}
</style>
