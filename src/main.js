import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

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

import { DatetimePicker,Popup } from 'vant';

Vue.use(DatetimePicker);
Vue.use(Popup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
