import axios from 'axios';

// 1. HTTP request & response와 관련된 기본 설정하기
const config = {
	baseUrl: 'https://api.hnpwa.com/v0'
}

// 2. API 함수들 정리하기
function fetchNewsList() {
	return axios.get(`${config.baseUrl}/news/1.json`);
}
function fetchJobsList() {
	return axios.get(`${config.baseUrl}/jobs/1.json`);
}
async function fetchAsksList() {
	try {
		const res = await axios.get(`${config.baseUrl}/ask/1.json`);
		return res;
	} catch(err){
		console.log(err)
	}
}
async function fetchList(pageName) {
	try {
		const res = await axios.get(`${config.baseUrl}/${pageName}/1.json`);
		return res;
	} catch(err) {
		console.log(err)
	}
}

function fetchUserInfo(username) {
	return axios.get(`${config.baseUrl}/user/${username}.json`);
}
function fetchItemInfo(itemname) {
	return axios.get(`${config.baseUrl}/item/${itemname}.json`);
}


// 3. export
export {
	fetchNewsList,
	fetchJobsList, 
	fetchAsksList, 
	fetchList,

	fetchUserInfo, 
	fetchItemInfo
}
