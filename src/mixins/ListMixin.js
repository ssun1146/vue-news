import bus from '@/utils/bus.js';
export default {
	// 재사용할 (또는 공통으로 사용할) 컴포넌트 옵션들 & 로직
	mounted(){
		bus.$emit('end:spinner');
	}
}