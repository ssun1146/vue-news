<template>
	<div>
		<list-item></list-item>
		<p v-for="(job, i) in this.$store.state.jobsList" :key="i">
			<a :href="job.url" target="_blank">{{ job.title }}</a>
			<span>{{ job.time_ago }} , {{ job.domain }}</span>
		</p>
	</div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
	components:{ ListItem },
	created() {
		this.$store.dispatch('FETCH_JOBS');
	}
}
</script>

<style>

</style>