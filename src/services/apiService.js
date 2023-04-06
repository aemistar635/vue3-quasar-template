import axios from "axios";
import { Notify } from "quasar";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    "Content-Type": "multipart/form-data", //in zanbeel we use this otherwise best practice is Contetnt-Type : 'application/json'
  },
});
// interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const get = async (url, body) => {
  try {
    const data = await axiosInstance.get(url, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

const post = async (url, body, config) => {
  try {
    const data = await axiosInstance.post(url, body, config);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

const put = async (url, body) => {
  try {
    const data = await axiosInstance.put(url, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

const remove = async (url, body) => {
  try {
    const data = await axiosInstance.delete(url, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (err) => {
  Notify.create({
    message: err.response.data.detail,
    color: "red",
  });
};

export default {
  get,
  post,
  put,
  remove,
  axiosInstance,
};
