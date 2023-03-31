<template>
	<div class="test">
		<button @click="loginUser1">login</button>
		<h1> List </h1>
		<ul>
			<li v-for="(item, i) in items" :key="i">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			items: [],
		}
	},
	methods: {
		loginUser() {
			axios.get('https://jsonplaceholder.typicode.com/users/1')
				.then(res => {
					if (res.data.id === 1){
						axios.get('https://jsonplaceholder.typicode.com/todos')
							.then( res => {
								this.items = res.data
							})
							.catch(err => console.log(err))
					}
				})
				.catch(err => console.log(err))
		},
		async loginUser1() {
			var res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
			if (res.data.id === 1){
				var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
				this.items = list.data;
			}
		}
	}
}
</script>