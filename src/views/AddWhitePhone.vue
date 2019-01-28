<template>
  <div class="addRelPhone">
    <div class="form-box">
      <div class="item-box">
        <span class="label">亲属关系</span>
        <input type="text" placeholder="请填写亲属关系(选填)">
      </div>
      <div class="item-box">
        <span class="label">亲情号码</span>
        <input type="text" placeholder="请输入手机号码">
      </div>
    </div>
    <footer class="footer-wrap">
      <button class="add-btn" @click="handelSave">保存</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'addWhitePhone',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    handelSave () {
      this.$router.push({name:'whitelist'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  .form-box{
    padding: 24px 15px;
    .item-box{
      display: flex;
      height: 110px;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 0 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      @include bottomShadow;
      .label{
        font-size: 32px;
        color: #333;
      }
      input{
        width: 500px;
        text-align: right;
        font-size: 32px;
        color: #8a9199;
        border: none;
      }
    }
  }
  .footer-wrap{
    margin-top: 70px;
    .add-btn{
      display: block;
      margin:0 auto 26px;
      @include blueButton;
      @include bottomShadow;
    }
  }
</style>

