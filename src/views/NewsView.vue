<template>
  <div>
    <p v-for="(item, i) in this.$store.state.newsList" :key="i">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <span>{{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link> </span>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>