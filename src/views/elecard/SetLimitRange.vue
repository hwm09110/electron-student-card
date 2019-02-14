<template>
  <div class="setLimitRange">
    <header>
      <p class="set-tips">最多可以设置5个围栏区域</p>
    </header>
    <ul class="limitrange-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index">
        <div class="name-box">
          <h2 class="name">{{item.name}}</h2>
          <button class="edit-btn">编辑</button>
        </div>
        <div class="options-content">
          <div class="option">
            <span class="label">经度信息</span>
            <span class="value">{{item.lng}}</span>
          </div>
          <div class="option">
            <span class="label">纬度信息</span>
            <span class="value">{{item.lat}}</span>
          </div>
          <div class="option">
            <span class="label">半径范围</span>
            <span class="value">{{item.radius}}m</span>
          </div>
        </div>
      </li>
    </ul>
    <footer class="footer-wrap">
      <button class="add-btn" @click="addLimitRange">添加</button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tab from '@c/Tab'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'setLimitRange',
  components: {
  },
  data () {
    return {
      listData: [
        {
          name: '电子围栏名称1',
          lng: '23.1583810000',
          lat: '113.4431300000',
          radius: 500
        },
        {
          name: '电子围栏名称2',
          lng: '23.1583810000',
          lat: '113.4431300000',
          radius: 500
        },
        {
          name: '电子围栏名称3',
          lng: '23.1583810000',
          lat: '113.4431300000',
          radius: 500
        }
      ]
    }
  },
  methods: {
    addLimitRange () {
      console.log(21);
      this.$router.push({name:'addlimitrange'});
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  header{
    background-color: #fff;
    .set-tips{
      width: 100%;
      height: 80px;
      line-height: 80px;
      color: #aaa;
      font-size: 24px;
      text-align: center;
    }
  }
  .limitrange-box{
    padding: 0 15px 150px;
    background-color: #efeff4;
    li{
      margin-top: 24px;
      background-color: #fff;
      border-radius: 10px;
      .name-box{
        height: 110px;
        padding: 0 20px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
          font-size: 32px;
          font-weight: 700;
          color: #333;
        }
        .edit-btn{
          display: inline-block;
          width: 90px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: #47aefe;
          color: #fff;
          font-size: 28px;
          border-radius: 30px;
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
          }
        }
      }
    }
  }
  .footer-wrap{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .add-btn{
      display: block;
      margin:0 auto 26px;
      @include blueButton;
      @include bottomShadow;
    }
  }
</style>

