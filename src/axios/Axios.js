import axios from "axios";
import { Load } from "../Actions/Load";
import store from "../Store/store";

const axiosInst = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

// Add a request interceptor
axiosInst.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      store.dispatch(Load(true));
      
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInst.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      store.dispatch(Load(false));
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
export default axiosInst;