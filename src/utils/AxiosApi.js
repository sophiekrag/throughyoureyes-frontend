import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default baseURL;
