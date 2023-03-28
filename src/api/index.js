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
function fetchAsksList() {
	return axios.get(`${config.baseUrl}/ask/1.json`);
}


// 3. export
export {
	fetchNewsList, fetchJobsList, fetchAsksList
}
