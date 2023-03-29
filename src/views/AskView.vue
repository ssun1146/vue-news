<template>
	<div>
		<p v-for="(ask, i) in askItems" :key="i">
			<a :href="ask.url">{{ ask.title }}</a>
			<span>{{ ask.time_ago }} by {{ ask.user }}</span>
		</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			askItems: 'fetchedAsk' 
		})
		//#2
		// ...mapState({
		// 	asks: state => state.asksList
		// })
		// #1
		// ask() {
		// 	return this.$store.state.ask;
		// }
	},
	created() {
		this.$store.dispatch('FETCH_ASKS');
	}
}
</script>