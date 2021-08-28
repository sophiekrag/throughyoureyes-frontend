import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://through-your-eyes.herokuapp.com/api/",
  //baseURL: "http://localhost:5000/api",
  timeout: 10000,
  withCredentials: true,
});

export default axiosApi;
