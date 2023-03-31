import {
  fetchNewsList,
  fetchJobsList,
  fetchAsksList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((res) => {
        context.commit('SET_NEWS', res.data);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((res) => {
        // console.log(res.data);
        context.commit('SET_JOBS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASKS({ commit }) {
    fetchAsksList()
      .then(function (res) {
        // console.log(res.data);
        commit('SET_ASKS', res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
	FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((err) => console.log(err));
  },
  FETCH_USERS({ commit }, name) {
    fetchUserInfo(name)
      .then((res) => {
        commit('SET_USERS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEMS({ commit }, item) {
    fetchItemInfo(item)
      .then((res) => {
        commit('SET_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
 
};
