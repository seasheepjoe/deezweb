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

.icon {
	margin: 0 5px;
}

button {
	margin: 15px 0;
	width: fit-content;
	height: fit-content;
	padding: 5px;
	border: 1px solid transparent;
	border-radius: 3px;
	color: #fff;
	font-size: 15px;
	font-weight: bold;
	cursor: pointer;
}

input[type="text"] {
	width: 250px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	background-color: white;
	padding: 5px;
	font-size: 20px;
}

select {
	font-size: 20px;
}
</style>
