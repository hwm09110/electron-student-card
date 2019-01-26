<template>
  <div class="tab-wrap">
    <ul class="tab">
      <li v-for="(item,index) in tabList" :key="index" :class="active == index?'active':''">
        <a href="javascript:;" @click="handleClick(index)">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    active: {
      required: true,
      type: Number,
      default: 0
    },
    tabList: {
      required: true,
      type: Array
    }
  },
  methods:{
    handleClick (index) {
      this.$emit('on-tab-click',index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
.tab-wrap{
  background-color: #fff;
  .tab{
    border-bottom:2px solid #dcdcdc;
    display:flex;
    li{
      flex:1;
      height:px2half(110px);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2half(32px);
      a{
        display: block;
        height:px2half(110px);
        line-height:px2half(110px);
        color: #8a9199;
        text-decoration: none;
        border-bottom:2px solid transparent;
      }
      &.active{
        a{
          border-color:#47aefe;
          color: #47aefe;
          font-weight: 700;
        }
      }
    }
  }
}
</style>