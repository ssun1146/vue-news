import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'

import { store } from '../store/index.js'
import bus from '@/utils/bus.js';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',		// 주소창에 붙어있는 #를 없애주는 역할
	routes: [
		{
			path:'/',
			redirect:'/news'
		},
		{
			path:'/news',
			name:'news',
			component:NewsView,
			// component:createListView('NewsView'),
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched');
						bus.$emit('end:spinner');
						next();
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
		{
			path:'/ask',
			name:'ask',
			component:AskView,
			// component:createListView('AskView'),
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched');
						next();
					})
					.catch((err) => {
						console.log(err);
					});
				}
		},
		{
			path:'/jobs',
			name:'jobs',
			component:JobsView,
			// component:createListView('AskView'),
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched');
						next();
					})
					.catch((err) => {
						console.log(err);
					});
				}
		},
		{
			path:'/user/:id',
			name:'users',
			component:UserView,
		},
		{
			path:'/item/:id',
			name:'items',
			component:ItemView,
		}
	]
});