<template>
  <div class="setLimitRange">
    <header>
      <p class="set-tips">请设置电子学生证上对应数字绑定的亲情号码</p>
    </header>
    <ul class="phone-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index" :class="{notset:!item.edit}">
        <div class="left-box">
          <span class="number">{{index + 1}}</span>
          <strong class="rel-name">{{item.name}}</strong>
          <strong class="rel-phone">{{item.phone}}</strong>
        </div>
        <button class="edit-btn" v-if="item.edit" @click="handleEdit(item)">编辑</button>
        <button class="add-btn" v-if="!item.edit" @click="handleAdd()">添加</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'relPhone',
  components: {
  },
  data () {
    return {
      listData: [
        {
          name: '爸爸',
          phone: '182-0203-8213',
          edit: true
        },
        {
          name: '未设置',
          phone: '',
          edit: false
        },
        {
          name: '未设置',
          phone: '',
          edit: false
        },
      ]
    }
  },
  methods: {
    handleEdit () {
      console.log(21);
      this.$router.push({name:'addrelphone'});
    },
    handleAdd () {
      console.log(21);
      this.$router.push({name:'addrelphone'});
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
      height: 110px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-box{
        .number{
          display: inline-block;
          width: 44px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          background-color: #47aefe;
          color: #fff;
          font-size: 32px;
          border-radius: 100%;
          margin-top: -3px;
        }
        .rel-name{
          font-size: 36px;
          color: #333;
          margin: 0 5px;
        }
        .rel-phone{
          font-size: 36px;
          color: #47aefe;
        }
      }
      .edit-btn,
      .add-btn{
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
      .edit-btn{
        background-color: #ccc;
      }
      &.notset{
        .rel-name{
          color: #b2b9c1;
        }
      }
    }
  }
</style>

