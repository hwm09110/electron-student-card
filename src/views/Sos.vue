<template>
  <div class="sos">
    <ul class="sos-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index">
        <div class="name-box">
          <h2 class="title">{{item.title}}</h2>
          <div class="see-btn">
              <span class="icon"></span>
              <span class="text">查看当前位置</span>
          </div>
        </div>
        <div class="options-content">
          <div class="option" v-for="(option,j) of item.options" :key="j">
            <span class="label">{{option.label}}</span>
            <span class="value">{{option.value}}</span>
          </div>
        </div>
      </li>
    </ul>
    <call-btn></call-btn>
  </div>
</template>

<script>
import CallBtn from '@c/CallBtn';
export default {
  name: 'sos',
  components: {
      CallBtn
  },
  data () {
    return {
      listData: [
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        },
        {
          title: '李大宝发出一条呼救信息！',
          options: [
              {
                label: '时间',
                value: '12:00'
              },
              {
                label: '位置',
                value: '在广州宏途第一学校附近'
              }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  .sos-box{
    padding: 0 15px 70px;
    background-color: #efeff4;
    li{
      margin-top: 24px;
      background-color: #fff;
      border-radius: 10px;
      @include bottomShadow;
      .name-box{
        height: 110px;
        padding: 0 20px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
          font-size: 32px;
          font-weight: 700;
          color: #ff4e4e;
        }
        .see-btn{
            width: 200px;
            height: 56px;
            line-height: 56px;
            border-radius: 30px;
            text-align: center;
            background-color: #ff4e4e;
            color: #fff;
            .icon{
                display: inline-block;
                @include backgroundImage(20px,24px);
                background-image: url('../assets/img/location_white.png');
                margin-top: -2px;
                margin-right: 2px;
                vertical-align: middle;
            }
            .text{
                font-size: 24px;
            }
        }
        .arrow-btn{
            font-size: 28px;
            color: #8a9199;
            position: relative;
            padding-right: 35px;
            &::after{
                position: absolute;
                right: 0;
                top:50%;
                transform: translateY(-50%);
                content: '';
                @include backgroundImage(12px,20px);
                background-image: url('../assets/img/arrow.png');
            }
        }
      }
      .options-content{
        margin: 0 30px;
        .option{
          border-bottom: 1px solid #ddd;
          height: 100px;
          line-height: 100px;
          display: flex;
          justify-content: space-between;
          &:last-child{
            border-bottom: none;
          }
          .label{
            font-size: 28px;
            color: #333;
          }
          .value{
            font-size: 28px;
            color: #8a9199;
            position: relative;
          }
        }
      }
    }
  }
</style>

