import axios from "axios";
import qs from "qs";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
// 挂载全局对象
app.config.globalProperties.fool = "Hello World";
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = "http://bufantec.com/api/";
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (config.method?.toLocaleLowerCase() == "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
app.use(store).use(router).mount("#app");
