import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',		// 주소창에 붙어있는 #를 없애주는 역할
	routes: [
		{
			path:'/',
			redirect:'/news'
		},
		{
			// path:: url 주소
			path:'/news',
			name:'news',
			component:NewsView,
		},
		{
			path:'/ask',
			name:'ask',
			component:AskView,
		},
		{
			path:'/jobs',
			name:'jobs',
			component:JobsView,
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