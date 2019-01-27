<template>
  <div class="device-info-wrap">
    <ul class="device-info-box">
      <li class="item-box" v-for="(item,index) of listData" :key="index">
        <div class="label">{{item.label}}</div>
        <div class="value">{{item.value}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'deviceInfo',
  components: {
  },
  data () {
    return {
      listData: [
        {
          label: '设备信息',
          value: '9521021874362',
        },
        {
          label: '设备状态',
          value: '运行正常',
        },
        {
          label: '电池电量',
          value: '65%',
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.device-info-box{
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
    .label{
      font-size: 32px;
      color: #333;
    }
    .value{
      font-size: 32px;
      color: #8a9199;
    }
  }
}
</style>

