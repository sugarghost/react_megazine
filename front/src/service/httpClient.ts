import axios from "axios";

const API_DEV = "http://3.37.128.23/";
const API_PRODUCT = "http://3.37.128.23";
const baseURL = process.env.NODE_ENV === "development" ? API_DEV : API_PRODUCT;


const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({
    baseURL: url,
    ...options
});
  return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
  const token = localStorage.getItem('userToken');
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}`},
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(baseURL);
export const authInstance = axiosAuthApi(baseURL);
