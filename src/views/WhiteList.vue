<template>
  <div class="setLimitRange">
    <header>
      <p class="set-tips">设置可呼入电话白名单，最多可设置30个</p>
    </header>
    <ul class="phone-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index" >
        <div class="left-box">
          <div class="rel-name">{{item.name}}</div>
          <div class="rel-phone">{{item.phone}}</div>
        </div>
        <div class="right-box">
          <button class="edit-btn" @click="handleEdit(item)">编辑</button>
          <button class="del-btn"  @click="handleDel()">删除</button>
        </div>
      </li>
    </ul>
    <footer class="footer-wrap">
      <button class="add-btn" @click="addRelPhone">添加</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'whiteList',
  components: {
  },
  data () {
    return {
      listData: [
        {
          name: '爸爸',
          phone: '182-0203-8213'
        },
        {
          name: '妈妈',
          phone: '182-0203-8213'
        },
      ]
    }
  },
  methods: {
    handleEdit () {
      console.log(21);
      // this.$router.push({name:'addrelphone'});
    },
    handleDel () {
      console.log(21);
    },
    addRelPhone () {
      this.$router.push({name:'addwhitephone'});
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
  .phone-box{
    padding: 0 15px 150px;
    background-color: #efeff4;
    li{
      margin-top: 24px;
      background-color: #fff;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include bottomShadow;
      .left-box{
        .rel-name{
          font-size: 36px;
          color: #333;
          margin: 0 5px;
        }
        .rel-phone{
          font-size: 36px;
          color: #47aefe;
          margin-top: 15px;
        }
      }
      .del-btn,
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
      .del-btn{
        background-color: #ccc;
        margin-left: 10px;
      }
      &.notset{
        .rel-name{
          color: #b2b9c1;
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

