<template>
	<div class="header">
		<router-link to="/news">news</router-link> |
		<router-link to="/ask">ask</router-link> |
		<router-link to="/jobs">jobs</router-link> 
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
	display:flex;
	padding: 8px;
	background-color: #42b883;
	color: #fff; 
}
.header a:active,
.header .router-link-exact-active{
	color: #35495e;
	text-decoration: none;
}
.header a {
	padding: 0 8px;
	color: #fff;
	text-decoration: none;
}

</style>