<template>
  <div class="user_info">
    <user-profile :info="user">
      <div slot="username"><div class="user_container__nick"> ID: {{ user.id }} </div></div>
      <span slot="time"> {{ 'Joined : ' + user.created }},  </span>
      <span slot="karma"> {{ user.karma }} </span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile'

export default {
  components: { UserProfile },
  computed: {
    user() {
      return this.$store.state.userInfo;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERS', userName);
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.user_info {
  padding: 20px 24px;
  box-sizing: border-box;
}
</style>
