<template>
  <div class="call-btn" @click="handleClick"></div>
</template>

<script>
export default {
  name: 'callBtn',
  methods:{
    handleClick () {
      console.log('call phone');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
//呼叫按钮
.call-btn{
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  border-radius: 100%;
  background-image: url('../assets/img/call_btn.png');
  @include backgroundImage(170px,170px);
}
</style>