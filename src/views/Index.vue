<template>
  <div class="index">
    <div class="card-wrap">
      <div class="stu-info">
        <div class="name">李大宝</div>
        <div class="phone">手机：18202038213</div>
        <div class="classname">班级：一年级1班</div>
      </div>
      <div class="location" @click="seeNowLocation">查看当前位置</div>
    </div>
    <div class="device-info">
      <div class="device-status">
        <span class="icon normal"></span>
        <span class="text">设备运行正常</span>
      </div>
      <div class="battery-status">
        <span class="icon battery-95-100"></span>
        <span class="text">电池电量</span>
      </div>
    </div>
    <div class="app-box">
      <div class="title">全部功能</div>
      <ul class="app-list-box">
        <li v-for="(app,index) of appList" :key="index" @click="handleAppClick(app)">
          <div class="icon"></div>
          <div class="name">{{app.text}}</div>
        </li>
      </ul>
    </div>
    <call-btn></call-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import CallBtn from '@c/CallBtn'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'Index',
  components: {
    CallBtn
  },
  data () {
    return {
      appList: [
        {
          text: '实时定位',
          routeName: 'nowlocation'
        },
        {
          text: '亲情号码',
          routeName: 'relphone'
        },
        {
          text: '电子围栏',
          routeName: 'limitrange'
        },
        {
          text: '白名单设置',
          routeName: 'whitelist'
        },
        {
          text: '免打扰设置',
          routeName: ''
        },
        {
          text: 'SOS呼救',
          routeName: ''
        },
        {
          text: '设备信息',
          routeName: ''
        },
      ]
    }
  },
  methods: {
    handleAppClick (app) {
      if(app.routeName){
        this.$router.push({name:app.routeName})
      }
    },
    seeNowLocation () {
      this.$router.push({name:'nowlocation'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
 .index{
   min-height: 100%;
   background-color: #efeff4;
   padding: 15px 25px 25px;
   position: relative;
 }
  // 卡
 .card-wrap{
   width: 740px;
   height: 340px;
   background-size: 740px 340px;
   background-image: url('../assets/img/card_bg.png');
   position: relative;
   color: #fff;
   margin-left: -20px;
   .stu-info{
     position: absolute;
     left: 40px;
     top:50px;
     .name{
       font-size: 42px;
     }
     .phone{
       margin-top: 83px;
       font-size: 28px;
     }
     .classname{
       font-size: 28px;
       margin-top: 25px;
     }
   }
   .location{
     position: absolute;
     top:123px;
     right: 50px;
     font-size: 24px;
     width: 200px;
     height: 56px;
     line-height: 56px;
     text-align: center;
     border-radius: 30px;
     border:2px solid #fff;
     padding-left: 22px;
     &::before{
       position: absolute;
       left: 13px;
       top:15px;
       content: '';
       width: 20px;
       height: 24px;
       background-size: 20px 24px;
       background-image: url('../assets/img/location_white.png');
     }
   }
 }
 //设备状态
 .device-info{
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 10px;
   margin-bottom: 20px;
   > div{
     width: 350px;
     height: 92px;
     line-height: 82px;
     text-align: center;
     color: #47aefe;
     background-size: 350px 92px;
   }
   .text{
       vertical-align: middle;
       margin-left: 10px;
       font-size: 28px;
   }
   .device-status{
     background-image: url('../assets/img/tab-left-bg.png');
     margin-left: -5px;
     .icon{
       @include backgroundImage(34px,34px);
       display: inline-block;
       vertical-align: middle;
       &.normal{
        background-image: url('../assets/img/status_normal.png');
       }
       &.abnormal{
        background-image: url('../assets/img/status_abnormal.png');
       }
     }
   }
   .battery-status{
     margin-right: -5px;
     background-image: url('../assets/img/tab-left-bg.png');
     .icon{
       @include backgroundImage(51px,28px);
       display: inline-block;
       vertical-align: middle;
       &.battery-0-20{
        background-image: url('../assets/img/0-20battery.png');
       }
       &.battery-20-50{
        background-image: url('../assets/img/20-50battery.png');
       }
       &.battery-50-95{
        background-image: url('../assets/img/50-95battery.png');
       }
       &.battery-95-100{
        background-image: url('../assets/img/95-100battery.png');
       }
     }
   }
 }
 //功能列表
 .app-box{
   background-color: #fff;
   border-radius: 10px;
   padding-bottom: 257px;
   .title{
     height: 90px;
     line-height: 90px;
     padding-left: 28px;
     font-size: 28px;
     font-weight: 700; 
     color: #333;
     border-bottom: 1px solid #eee;
   }
   .app-list-box{
     display: flex;
     flex-flow: wrap;
     padding: 37px 42px;
     li{
       width: 120px;
       height: 140px;
       margin-right: 45px;
       margin-bottom: 36px;
       .icon{
        width: 100px;
        height: 100px;
        border:1px solid #eee;
        border-radius: 10px;
        margin: 0 auto;
       }
       .name{
         font-size: 24px;
         color: #333;
         margin-top: 15px;
         text-align: center;
       }
       &:nth-child(4n){
        margin-right: 0;
       }
     }
   }
 }
</style>

