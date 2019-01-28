<template>
  <!-- <div class="call-btn" @click="handleClick"></div> -->
  <a class="call-btn" href="tel:18202038213"></a>
</template>

<script>
export default {
  name: 'callBtn',
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
//呼叫按钮
.call-btn{
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  border-radius: 100%;
  background-image: url('../assets/img/call_btn.png');
  display: block;
  @include backgroundImage(170px,170px);
}
</style>