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

button {
	margin: 15px 0;
	width: fit-content;
	height: fit-content;
	padding: 5px;
	border: 1px solid transparent;
	border-radius: 2px;
	color: #fff;
	font-size: 15px;
	font-weight: bold;
	cursor: pointer;
}
</style>
