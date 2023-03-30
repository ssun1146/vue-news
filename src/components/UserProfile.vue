<template>
	<div class="user_container">
		<div class="user_container__title"></div>
		<div class="user_container__info">
			<slot name="username"></slot>
			<!-- <router-link :to="`/user/${info.user}`" class="user_container__nick"
				>
				{{ info.id }}
			</router-link> -->
			<p class="user_container__time">
				<!-- {{ info.created }} -->
				<slot name="time"></slot>
			</p>
			<div class="user_container__karma">
				<slot name="karma"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		info: Object
	},
	computed: {
    // user() {
    //   return this.$store.state.userInfo;
    // },
  },
}
</script>

<style scoped>
.user_container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
}
.user_container::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #000;
  transform: translateY(-50%);
}
.user_container__title {
  font-size: 20px;
  font-weight: bold;
}
.user_container__nick {
  font-size: 16px;
  font-weight: bold;
  color: #35495e;
  text-decoration: none;
}
.user_container__info {
  padding-left: 8px;
}
.user_container__time {
  line-height: 1;
  margin: 4px 0 0;
  font-size: 13px;
  color: #9e9e9e;
}
.user_container__karma {
	font-size: 13px;
	font-weight: bold;
}
</style>