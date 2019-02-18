import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 百度地图 https://dafrok.github.io/vue-baidu-map/#/
import BaiduMap from 'vue-baidu-map'

// import 'lib-flexible'
import '@/assets/css/reset.css'
import setRem from '@/assets/js/rem.js'

setRem();

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '2q9dwhAGGA8krEGuA9bw4TzegdXTQ6bE'
})

//https://youzan.github.io/vant/#/zh-CN/intro
import { DatetimePicker, Picker, Popup, Tab, Tabs, Toast, List } from 'vant';

Vue.use(Picker).use(DatetimePicker).use(Popup).use(Tab).use(Tabs).use(Toast).use(List);

console.log(process.env.BASE_URL);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
