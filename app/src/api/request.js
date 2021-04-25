//拦截文件

import axios from "axios";

//创建一个实例
const instance = axios.create({
  baseURL: "http://localhost:3000",
  //请求延时为3000毫秒
  timeout: 3000,
});

//拦截器 请求拦截
instance.interceptors.request.use(
  (config) => {
    //配置项  携带的数据(部分接口需要拿到token)
    let token = localStorage.getItem("token");
    //如果有token 就把token的值给配置文件的headers中
    if (token) {
      // config.headers.token = token;

      //如果token有其他的名字 如：a-token
      config.headers = {
        "a-token": token,
      };
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//拦截器 响应拦截
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//整体导出
export default instance;


/* import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:3000",
  //请求延时为3000毫秒
  timeout: 3000,
});

// Alter defaults after instance has been created
//instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance */
