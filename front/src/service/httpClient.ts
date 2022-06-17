import axios from "axios";

const API_DEV = "http://3.37.128.23";
const API_PRODUCT = "http://3.37.128.23";
const baseURL = process.env.NODE_ENV === "development" ? API_DEV : API_PRODUCT;

const getToken = (tokenName: string) => {
  const localToken = localStorage.getItem('recoil-persist');
  if (localToken) {
    const tokenParseJson = JSON.parse(localToken)
    if (tokenParseJson !== '') {
      const token = tokenParseJson[tokenName]
      return token
    }
  }
}
/*
axios.interceptors.request.use(
  (config) => {
    // HTTP Authorization 요청 헤더에 jwt-token을 넣음
    // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
    const token = getToken('userToken')
    try {
      return config;
    } catch (err) {
      console.error(`[_axios.interceptors.request] config : ${err}`);
    }
    return config;
  },
  (error) =>
    // 요청 에러 직전 호출됩니다.
    Promise.reject(error)
)
*/

const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({
    baseURL: `${url}/api`,
    ...options
  });
  return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
  const token = getToken('userToken')
  const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {'X-AUTH-TOKEN': `${token}`},
    ...options
  });
  return instance;
};



export const defaultInstance = axiosApi(baseURL);
export const authInstance = axiosAuthApi(baseURL);
