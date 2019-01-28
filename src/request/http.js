import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';

let baseURL = '';
if(process.env.NODE_ENV === 'development'){
  baseURL = '/';
}else if(process.env.NODE_ENV === 'production'){
  baseURL = 'http://113.108.217.90';
}

const Axios = axios.create({ 
  baseURL: baseURL, // 因为我本地做了反向代理 
  timeout: 10000, 
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些 
  headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" } 
});

//添加请求拦截器 
Axios.interceptors.request.use( config => { 
  // 在发送请求之前做某件事 
  if ( config.method === "post" ) { 
    // 序列化 
    config.data = qs.stringify(config.data); 
    // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的 
  } 
  // 若是有做鉴权token , 就给头部带上token 
  // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用 
  // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了 
  // 一些必要的数据写入本地,优先从本地读取 
  if (localStorage.token) { 
    config.headers.Authorization = localStorage.token; 
  } 
  return config; 
}, error => { 
  // error 的回调信息,看贵公司的定义
  return Promise.reject(error); 
});


//添加相应拦截器
Axios.interceptors.response.use(res => {
  console.log(res);
  //非登录下
  if(res.data && res.data.code === '9000'){
    return Promise.reject(res.data.message);
  }
  return res;
},error => {
  return Promise.reject(error);
});



export default Axios;
