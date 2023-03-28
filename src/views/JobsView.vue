<template>
	<div>
		<div v-for="(jobs, i) in jobsList" :key="i">{{ jobs.title }}</div>
	</div>
</template>

<script>
// import axios from 'axios'
import { fetchJobsList } from '../api/index.js';

export default {
	data() {
		return {
			jobsList: []
		}
	},
	created() {
		var vm = this;
		fetchJobsList()
			.then(function(res){
				console.log(res);
				vm.jobsList = res.data;
			})
			.catch(function(err){  
				console.log(err)
			})
		}
	}
</script>

<style>

</style>