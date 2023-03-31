<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="list">
      <li class="list_item" v-for="(ask, i) in askItems" :key="i">
        <div class="list_points">{{ ask.points }}</div>
        <div class="list_info">
          <p class="list_title">
            <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
          </p>
          <span class="list_time"
            >{{ ask.time_ago }} by
            <router-link class="list_user" :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
          </span>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import { mapState, mapGetters } from 'vuex';
import bus from '@/utils/bus.js';

export default {
  components: { ListItem },
  computed: {
    ...mapGetters({
      askItems: 'fetchedAsk',
    }),
    //#2
    // ...mapState({
    // 	asks: state => state.asksList
    // })
    // #1
    // ask() {
    // 	return this.$store.state.ask;
    // }
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_ASKS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1600);
  },
};
</script>
