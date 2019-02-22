import Vue from 'vue';
import router from '../router/index'
import axios from 'axios';
import { Toast } from 'vant';

const http = axios.create({ 
  baseURL: process.env.BASE_URL,
  timeout: 60000, 
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些 
  headers: { "Content-Type": "application/x-www-form-urlencoded" } 
});

//添加请求拦截器 
http.interceptors.request.use( config => { 
  // 在发送请求之前做某件事 
  // if ( config.method === "post" ) { 
  //   // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的 
  //   config.data = qs.stringify(config.data); 
  // } 
  // 若是有做鉴权token , 就给头部带上token 
  // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用 
  // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了 
  // 一些必要的数据写入本地,优先从本地读取 
  // if (localStorage.token) { 
  //   config.headers.Authorization = localStorage.token; 
  // } 
  return config; 
}, error => { 
  // error 的回调信息,看贵公司的定义
  return Promise.reject(error); 
});


//添加相应拦截器
http.interceptors.response.use(res => {
  // console.log(res);
  //非登录下
  if(res.data && res.data.code === '9000'){
    return Promise.reject(res.data.message);
  }
  return res;
},error => {
  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  // const responseCode = error.response.status;

  // 断网 或者 请求超时 状态
  if (!error.response) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      Toast({
        position: 'bottom',
        message: '请求超时，请检查网络是否连接正常'
      });
    } else {
      // 可以展示断网组件
      Toast({
        position: 'bottom',
        message: '请求失败，请检查网络是否已连接'
      });
    }
    return
  }
  return Promise.reject(error);
});



export default http;
