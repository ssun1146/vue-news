export default{
	SET_NEWS(state, news) {
		state.newsList = news;
	},
	SET_JOBS(state, jobs) {
		state.jobsList = jobs;
	},
	SET_ASKS(state, asks) {
		state.asksList = asks;
	}
}