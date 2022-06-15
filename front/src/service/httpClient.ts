import axios from "axios";

const API_DEV = "http://localhost:10004/";
const API_PRODUCT = "http://localhost:10004/";
const baseURL = process.env.NODE_ENV === "development" ? API_DEV : API_PRODUCT;


const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({
    baseURL: url,
    ...options
});
  return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
  const token = 'ddd';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(baseURL);
export const authInstance = axiosAuthApi(baseURL);
