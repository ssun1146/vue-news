<template>
	<div>
		<p v-for="(job, i) in this.$store.state.jobsList" :key="i">
			<a :href="job.url" target="_blank">{{ job.title }}</a>
			<span>{{ job.time_ago }} , {{ job.domain }}</span>
		</p>
	</div>
</template>

<script>
// import axios from 'axios'

export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
	}
}
</script>

<style>

</style>