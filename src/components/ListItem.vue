<template>
  <ul class="list">
    <li class="list_item" v-for="(item, i) in listItems" :key="i">
      <div class="list_points">{{ item.points || 0 }}</div>
      <div class="list_info">
        <p class="list_title">
          <!-- 타이틀 영역 -->
          <template v-if="item.domain">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </template>
        </p>
        <span class="list_user">
          by

          <router-link v-if="item.user" :to="`/user/${item.user}`" class="list_link"
            >{{ item.user }}
          </router-link>
          <a :href="item.url" class="list_link" v-else>{{ item.domain }}</a>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  // created() {
  //   const name = this.$route.name;
  //   console.log(this.$route);
  //   let pageName;
  //   if (name === 'news') {
  //     pageName = 'FETCH_NEWS';
  //   } else if (name === 'ask') {
  //     pageName = 'FETCH_ASKS';
  //   } else if (name === 'jobs') {
  //     pageName = 'FETCH_JOBS';
  //   }
  //   this.$store.dispatch(pageName);
  // },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.newsList;
      } else if (name === 'ask') {
        return this.$store.state.asksList;
      } else if (name === 'jobs') {
        return this.$store.state.jobsList;
      } else {
        return '';
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.list {
  margin: 0;
  padding: 0;
}
.list_item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.list_points {
  flex: 0 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.list_title {
  margin: 0 0 2px;
  font-size: 16px;
  font-weight: bold;
  color: #34495e;
}
.list_user {
  font-size: 13px;
  color: #9e9e9e;
}
.list_link {
  font-size: 14px;
  font-weight: bold;
  color: #617080;
}
.list_title:hover,
.list_link:hover {
  color: #42b883;
	text-decoration: underline;
}
</style>
