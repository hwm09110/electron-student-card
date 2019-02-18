<template>
  <div class="tab-round-wrap">
    <div class="tab-box">
        <div class="tab-item" 
        :class="index == active?'tab-active':''" 
        v-for="(item,index) of tabItems"
        @click="handleClick(index)" 
        :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabItems: {
      type: Array,
      required: true,
      default: []
    },
    itemActive: {
      type: Number,
      default: 0
    }
  },
  name: 'TabRound',
  data() {
    return {
      active: this.itemActive
    }
  },
  methods: {
    handleClick(index) {
      this.active = index;
      this.$emit('update:itemActive',index);
      this.$emit('on-tab-item-click',index);
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .tab-item{
      padding: 15px 24px;
      text-align: center;
      font-size: 26px;
      color: #3f3f3f;
      border-top:1px solid #ddd;
      border-left:1px solid #ddd;
      border-bottom:1px solid #ddd;
      &:first-child{
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
      &:last-child{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-right:1px solid #ddd;
      }
      &.tab-active{
        color: #fff;
        background-color: #47aefe;
        border-color: #47aefe;
      }
    }
  }
</style>
