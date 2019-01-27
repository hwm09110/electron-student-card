<template>
  <div class="banDisturb">
    <header>
      <p class="set-tips">设置免打扰时间段，此时间段会拒绝所有电话和消息</p>
    </header>
    <ul class="ban-disturb-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index">
        <div class="name-box">
          <h2 class="name">{{item.name}}</h2>
          <div class="switch-btn">
              <div class="circle"></div>
          </div>
        </div>
        <div class="options-content">
          <div class="option">
            <span class="label">上午</span>
            <span class="value">{{item.am}}</span>
          </div>
          <div class="option">
            <span class="label">下午</span>
            <span class="value">{{item.pm}}</span>
          </div>
          <div class="option">
            <span class="label">重复</span>
            <span class="value">{{item.mode}}</span>
          </div>
        </div>
      </li>
    </ul>
    <footer class="footer-wrap">
      <button class="add-btn" @click="handleSet">设置</button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tab from '@c/Tab'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'banDisturb',
  components: {
  },
  data () {
    return {
      listData: [
        {
          name: '免打扰时间段',
          am: '08:00-11:30',
          pm: '14:00-17:30',
          mode: '周一至周五'
        }
      ]
    }
  },
  methods: {
    handleSet () {
      console.log(21);
      this.$router.push({name:'setbandisturb'});
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
  .ban-disturb-box{
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
        .name{
          font-size: 32px;
          font-weight: 700;
          color: #333;
        }
        .switch-btn{
            width: 90px;
            height: 50px;
            border-radius: 30px;
            background-color: #cdd3da;
            position: relative;
            .circle{
                position: absolute;
                left: 4px;
                top:4px;
                width: 42px;
                height: 42px;
                border-radius: 100%;
                background-color: #fff;
                transition: left .3s;
            }
            &.on{
                background-color: #47aefe;
                .circle{
                    left: 44px;
                }
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
          }
        }
      }
    }
  }
  .footer-wrap{
    .add-btn{
      display: block;
      margin:0 auto 26px;
      @include blueButton;
      @include bottomShadow;
    }
  }
</style>

