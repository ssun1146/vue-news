<template>
	<div>
		<div v-for="(ask, i) in askList" :key="i">{{ ask.title }}</div>
	</div>
</template>

<script>
// import axios from 'axios'
import { fetchAsksList } from '../api/index.js';

export default {
	data() {
		return {
			askList: []
		}
	},
	created() {
		var vm = this;
		fetchAsksList()
			.then(function(res){
				console.log(res);
				vm.askList = res.data;
			})
			.catch(function(err){  
				console.log(err)
			})
		}
	}
</script>

<style>

</style>