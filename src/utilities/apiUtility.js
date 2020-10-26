import axios from 'axios';
import { API_HOST } from '../constants/index';

/** 
 * 공통 API 호출 코드 (Axios 커스터마이징)
 * 
 * @param {object} param
 * @param {'get' | 'post' | 'put' | 'delete' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */
export function callApi({ method = 'get', url, params, data }) {
  // axios 인스턴스 생성
  return axios({
    url,
    method,
    baseURL: API_HOST,
    params,
    data,
    withCredentials: true, // 사용자 쿠기 토큰에 필요한 옵션
  }).then(response => {
    // HTTP 상태코드, 메시지
    const { resultCode, resultlMessage, data } = response.data;

    // resultCode === 0 : 성공
    // resultCode < 0   : 실패
    if (resultCode < 0) {
      console.error(resultlMessage);
    }

    // API로부터 전달받은 데이터와 성공 여부를 반환합니다.
    return {
      isSuccess: resultCode === ResultCode.Success,
      resultCode,
      resultlMessage,
      data,
    }
  })
}

// 결과 코드는 앞으로 원하는 것을 추가할 수 있다.
export const ResultCode = {
  Success: 0,
}