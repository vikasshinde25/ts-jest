import axios from "axios";

import { NON_AUTHORIZATION_APIS } from "./constants";

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_APP_URL + process.env.REACT_APP_API_VERSION,
});

// Add a request interceptor
axiosInstance.interceptors.request.use((request) => {
  if (!NON_AUTHORIZATION_APIS.includes(request?.url!)) {
    let token = localStorage.getItem("token");
    token = token || "";
    request.headers.Authorization = `Token ${token}`;
  }
  return request;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
