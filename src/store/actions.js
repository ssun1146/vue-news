import {
  fetchNewsList,
  fetchJobsList,
  fetchAsksList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((res) => {
  //       context.commit('SET_NEWS', res.data);
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  // async 
  async FETCH_NEWS(context) {
    const res = await fetchNewsList()
    context.commit('SET_NEWS', res.data);
    return res;   // async에서 return이 되면 항상 promise가 return 됨.. 주의!
  },

  // FETCH_JOBS(context) {
  //   return fetchJobsList()
  //     .then((res) => {
  //       // console.log(res.data);
  //       context.commit('SET_JOBS', res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  async FETCH_JOBS(context){
    const res = await fetchJobsList()
    context.commit('SET_JOBS', res.data);
    return res;
  },

  // FETCH_ASKS({ commit }) {
  //   return fetchAsksList()
  //     .then(function (res) {
  //       // console.log(res.data);
  //       commit('SET_ASKS', res.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // },

  async FETCH_ASKS({commit}){
    const res = await fetchAsksList()
    commit('SET_ASKS', res.data);
    return res;
  },

  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(res => {
  //       commit('SET_LIST', res.data)
  //       return res.data;
  //     })
  //     .catch((err) => console.log(err));
  // },

  async FETCH_LIST({commit}, pageName){
    const res = await fetchList(pageName)
    commit('SET_LIST', res.data)
    return res;
  },

  FETCH_USERS({ commit }, name) {
    return fetchUserInfo(name)
      .then((res) => {
        commit('SET_USERS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEMS({ commit }, item) {
    return fetchItemInfo(item)
      .then((res) => {
        commit('SET_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
