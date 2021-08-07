import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
});

export default baseURL;
