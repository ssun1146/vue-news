
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		newsList: [],
		jobsList: [],
		asksList: [],
		userInfo: {},
		itemInfo: {},    // 확인
		list:[],
	}, 
	getters:{
		fetchedAsk(state) {
			return state.asksList;
		},
		fetchedItem(state) {
			return state.itemInfo;
		}
	},
	mutations: mutations,
	actions: actions,
})
