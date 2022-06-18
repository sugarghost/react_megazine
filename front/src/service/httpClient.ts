import axios from "axios";
// "http://3.39.124.255:8080";; 소이님
// "http://15.164.93.211"; ㅇ유진님
const API_DEV = "http://15.164.93.211";
const API_PRODUCT ="http://15.164.93.211";
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
const instance = axios.create({timeout:10000, baseURL: `${baseURL}/api`});

const axiosApi = (url: string, options?: object) => {
  const instanceDefault = axios.create({
    baseURL: `${url}/api`,
    ...options
  });
  return instanceDefault;
};

const axiosAuthApi = (url: string) => {
  const token = getToken('userToken')
  instance.interceptors.request.use(
    (config)=>{
      if(token) {
        config.headers = {'X-AUTH-TOKEN': `${token}`}
      }
      config.url = url
      try{
        return config
      }catch(err){
        console.error(`[_axios.interceptors.request] config : ${err}`);
      }
      return config
    }
  )
  return instance;
};



export const defaultInstance = axiosApi(baseURL);
export const authInstance = axiosAuthApi(baseURL);
