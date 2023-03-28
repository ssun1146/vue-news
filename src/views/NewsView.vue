<template>
  <div>
    <div v-for="(news, i) in newsList" :key="i">{{ news.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios'
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    var vm = this;
    fetchNewsList()
      .then(function(res){
        console.log(res);
        vm.newsList = res.data;
      } )
      .catch(function(err){  
        console.log(err)
      } )
  }
}
</script>