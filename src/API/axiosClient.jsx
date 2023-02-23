// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import alertify from "alertifyjs";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    alertify.set("notifier", "position", "top-right");
    alertify.error(error.response.data.message);
  }
);
export default axiosClient;
