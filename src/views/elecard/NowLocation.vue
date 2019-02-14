<template>
  <div class="nowlocation">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="false" :autoLocation="false"></bm-geolocation> -->
      <bm-marker 
        :position="marker.position" 
        :dragging="marker.dragging"
        :icon="marker.icon" 
        animation="BMAP_ANIMATION_BOUNCE">
      </bm-marker>
    </baidu-map>
    <div class="setLocation" @click="setLocation"></div>
    <div class="message-wrap">
      <div class="message-box">
        <div class="title">
          <span class="icon"></span>
          <span class="text">李大宝在绿地广场附近</span>
        </div>
        <div class="content">
          <span class="addr">广州市黄埔区科学大道120号</span>
          <span class="time">1分钟前</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tab from '@c/Tab'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'nowlocation',
  components: {
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      marker: {
        position: {lng: 116.404, lat: 39.915},
        dragging: false,
        icon: {
          // url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
          url: require('@/assets/img/people.png'),
          size: {
            width: 94, 
            height: 94
          }
        }
      }
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    //设置定位
    setLocation () {
      console.log('设置定位');
      // this.zoom = this.zoom + 1;
    }
  }
}
</script>

<style lang="scss" scoped>
  .bm-view {
    width: 100%;
    height: 100%;
  }
  .nowlocation{
    position: relative;
    width: 100%;
    height: 100%;
    .setLocation{
      position: absolute;
      left: 25px;
      bottom: 195px;
      width: 76px;
      height: 76px;
      background-size: 76px 76px;
      background-image: url('../../assets/img/location-icon.png');
    }
  }
  .message-wrap{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    // height: 140px;
    .message-box{
      background-color: #fff;
      width: 700px;
      height: 140px;
      margin: 0 auto 30px;
      border-radius: 10px;
      padding: 34px 20px 0;
      .title{
        .icon{
          display: inline-block;
          width: 26px;
          height: 32px;
          background-size: 26px 32px;
          background-image: url('../../assets/img/location_blue.png');
          vertical-align: middle;
        }
        .text{
          font-size: 32px;
          color: #333;
          font-weight: 700;
          vertical-align: middle;
          margin-left: 5px;
        }
      }
      .content{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .addr{
          font-size: 24px;
          color: #333;
        }
        .time{
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
</style>

