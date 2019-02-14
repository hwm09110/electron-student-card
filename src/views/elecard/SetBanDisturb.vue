<template>
  <div class="setBanDisturb">
    <header>
      <p class="set-tips">设置免打扰时间段，此时间段会拒绝所有电话和消息</p>
    </header>
    <ul class="ban-disturb-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index">
        <div class="name-box">
          <h2 class="name">{{item.name}}</h2>
          <div :class="['radio-btn',{checked:item.checked}]" @click="item.checked=!item.checked"></div>
        </div>
        <div class="options-content">
          <div class="option" v-for="(option,j) of item.options" :key="j">
            <span class="label">{{option.label}}</span>
            <span class="value" @click="handleSelectTime(option)">{{option.time}}</span>
          </div>
        </div>
      </li>
      <li class="item-box">
        <div class="name-box">
          <h2 class="name">重复</h2>
          <div class="arrow-btn" @click="handleSelectWeek">周一至周五</div>
        </div>
      </li>
    </ul>
    <footer class="footer-wrap">
      <button class="add-btn" @click="handleSet">设置</button>
    </footer>

    <!-- 选择时间 -->
    <van-popup v-model="showChooseTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="time"
        @confirm="handleDateTimeConfirm"
        @cancel="handleDateTimeCancel"
      />
    </van-popup>

    <!-- 选择周几 -->
    <van-popup v-model="showChooseWeek" position="bottom">
      <van-picker
        :show-toolbar = "true" 
        :columns="weekColumns"
        @confirm="handleWeekConfirm"
        @cancel="handleWeekCancel"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'setBanDisturb',
  components: {
  },
  data () {
    return {
      listData: [
        {
          name: '上午',
          checked:true,
          options: [
              {
                label: '开始时间',
                time: '08:00'
              },
              {
                label: '结束时间',
                time: '12:00'
              }
          ]
        },
        {
          name: '下午',
          checked:false,
          options: [
              {
                label: '开始时间',
                time: '14:00'
              },
              {
                label: '结束时间',
                time: '18:00'
              }
          ]
        },
        {
          name: '晚上',
          checked:false,
          options: [
              
          ]
        }
      ],
      currentDate: '00:00',
      showChooseTime: false, //显示时间选择控件
      selectOption: '', //点击当前时间的项
      showChooseWeek: false,
      weekColumns: [
        {values:['周一','周二','周三','周四','周五','周六','周日',]},
        {values:['周一','周二','周三','周四','周五','周六','周日',]}
      ]
    }
  },
  methods: {
    handleSet () {
      console.log(21);
    //   this.$router.push({name:'addlimitrange'});
    },
    handleSelectTime (option) {
      this.showChooseTime = true;
      this.selectOption = option;
    },
    handleDateTimeConfirm (value) {
      console.log(value);
      this.selectOption.time = value;
      this.showChooseTime = false;
    },
    handleDateTimeCancel () {
      this.showChooseTime = false;
    },
    handleSelectWeek () {
      this.showChooseWeek = true;
    },
    handleWeekConfirm (value) {
      console.log(value);
      this.showChooseWeek = false;
    },
    handleWeekCancel () {
      this.showChooseWeek = false;
    },
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
        .radio-btn{
            width: 36px;
            height: 36px;
            border-radius: 100%;
            border:1px solid #cdd3da;
            &.checked{
                border:none;
                background-size: 36px 36px;
                background-image: url('../../assets/img/radio-checked.png');
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
                background-image: url('../../assets/img/arrow.png');
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
            padding-right: 35px;
            &::after{
                position: absolute;
                right: 0;
                top:50%;
                transform: translateY(-50%);
                content: '';
                @include backgroundImage(12px,20px);
                background-image: url('../../assets/img/arrow.png');
            }
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

