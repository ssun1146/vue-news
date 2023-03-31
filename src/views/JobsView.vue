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
import bus from '@/utils/bus.js'
import ListMixin from '@/mixins/ListMixin'

export default {
	components:{ ListItem },
	mixins: [ListMixin]
	// created() {
	// 	bus.$emit('start:spinner');
	// 	setTimeout(() => {
	// 		this.$store.dispatch('FETCH_JOBS')
	// 		.then(() => {
	// 			console.log('fetched')
	// 			bus.$emit('end:spinner');
	// 		} )
	// 		.catch( err => {
	// 			console.log(err)
	// 		})
	// 	}, 1600)
	// }

}
</script>