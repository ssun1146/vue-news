<template>
  <div>
    <section class="item_view">
      <!-- ==== Asks Detail ==== -->
      <div class="user_container">
        <div class="user_container__title">User</div>
        <div class="user_container__info">
          <router-link :to="`/user/${fetchedItem.user}`" class="user_container__nick"
            >{{ fetchedItem.user }}
          </router-link>
          <p class="user_container__time">{{ fetchedItem.time_ago }}</p>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
      <!-- <p>{{ fetchedItem.title }}</p> -->
      <div v-html="fetchedItem.content"></div>
    </section>
    <section>
      <!-- ==== Comments Detail ==== -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
}
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
  color: #333;
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
</style>
