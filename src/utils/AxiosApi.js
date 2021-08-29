import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
  timeout: 10000,
  withCredentials: true,
});

export default axiosApi;
