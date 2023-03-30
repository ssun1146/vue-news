<template>
  <div class="item_view">
    <section>
      <!-- ==== 사용자 정보 ==== -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`" class="item_view__nick"
				>
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- ==== Comments Detail ==== -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapGetters } from 'vuex';

export default {
  components:{ UserProfile },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMS', itemName);
  },
};
</script>
<style scoped>
.item_view {
  padding: 20px 24px;
  box-sizing: border-box;
}

.item_view__nick {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}
.item_view__nick:hover {
  color: #42b883;
  text-decoration: underline;

}
</style>
