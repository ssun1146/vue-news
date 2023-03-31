export default{
	SET_NEWS(state, news) {
		state.newsList = news;
	},
	SET_JOBS(state, jobs) {
		state.jobsList = jobs;
	},
	SET_ASKS(state, asks) {
		state.asksList = asks;
	},
	SET_LIST(state, list) {
		state.list = list;
	},

	SET_USERS(state, users){
		state.userInfo = users;
	},
	SET_ITEMS(state, items){
		state.itemInfo = items;
	},
}