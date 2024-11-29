import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const tokenApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth/",
});

tokenApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default tokenApi;
