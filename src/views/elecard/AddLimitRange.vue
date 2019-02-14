<template>
  <div class="addLimitRange">
    <div class="form-box">
      <div class="item-box">
        <span class="label">区域名称</span>
        <input type="text" placeholder="请输入区域名称" v-model="formData.name">
      </div>
      <div class="item-box">
        <span class="label">经度信息</span>
        <input type="text" placeholder="请输入地图经度信息" v-model="formData.lng" readonly @click="handleInputClick">
      </div>
      <div class="item-box">
        <span class="label">纬度信息</span>
        <input type="text" placeholder="请输入地图纬度信息" v-model="formData.lat" readonly @click="handleInputClick">
      </div>
      <div class="item-box">
        <span class="label">半径范围</span>
        <input type="number" placeholder="请输入数字" v-model="formData.radius">
      </div>
    </div>
    <footer class="footer-wrap">
      <button class="add-btn" @click="handelSave">保存</button>
    </footer>
    <choose-map-pos :show.sync="show" @on-sure="handleSurePoint"></choose-map-pos>
  </div>
</template>

<script>
import ChooseMapPos from '@c/ChooseMapPos'
export default {
  name: 'addLimitRange',
  components: {
    ChooseMapPos
  },
  data () {
    return {
      formData: {
          name: '电子围栏名称3',
          lng: '23.1583810000', //经度
          lat: '113.4431300000', //纬度
          radius: 500
      },
      show: false
    }
  },
  methods: {
    handleInputClick () {
      this.show = true;
    },
    handleSurePoint (point) {
      this.formData.lng = point.lng
      this.formData.lat = point.lat
    },
    handelSave () {
      this.$router.push({name:'setlimitrange'})
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

