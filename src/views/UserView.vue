<template>
  <div>
    <p>ID: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>about: {{ user.about }}</p>
    <p>created: {{ user.created }}</p>
    <!-- <p>{{ user.created_time }}</p> -->
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.userInfo;
    }
  },
  created() {
    // 인자 여러개를 dispatch 하기 위해서 변수로 묶어서 보내기..!
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERS', userName);
  }
}
</script>