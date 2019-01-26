<template>
  <div class="limitRange">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
      <template v-for="(item) in limitCircleList">
        <bm-marker :position="item.position" :dragging="false" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-circle 
          :center="item.position" 
          :radius="item.circlePath.radius" 
          :stroke-color="item.circlePath.strokeColor" 
          :stroke-opacity="item.circlePath.strokeOpacity" 
          :stroke-weight="item.circlePath.strokeWeight" 
          :fillColor="item.circlePath.fillColor" 
          :fillOpacity="item.circlePath.fillOpacity" 
          :editing="item.circlePath.editing">
        </bm-circle>
        <bm-label :content="item.label.content" :position="item.position" :labelStyle="{color: '#333', fontSize : '16px'}"/>
      </template>
    </baidu-map>
    <footer class="footer-wrap">
      <div class="message-wrap">
        <div class="message-box">
          <div class="title">
            <span class="text">当前已设置2个电子围栏</span>
          </div>
          <div class="content">
            <span class="warning">最新警告：李大宝进入[电子围栏名称]区域</span>
            <span class="time">1-23 14:45:26</span>
          </div>
        </div>
      </div>
      <button class="setLimitRange" @click="setLimitRange">设置围栏</button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tab from '@c/Tab'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'limitRange',
  components: {
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      limitCircleList: [
        {
          position: {
              lng: 116.404,
              lat: 39.915
          },
          circlePath: {
            fillColor:'#f7777a',
            fillOpacity:0.4,
            strokeColor: 'blue',
            strokeOpacity: 0.5,
            strokeWeight: 0.1,
            radius: 500, //半径，单位为米
            editing: false
          },
          label: {
            content:'电子围栏名称1'
          }
        },
        {
          position: {
            lng: 116.414,
            lat: 39.925
          },
          circlePath: {
            fillColor:'#f7777a',
            fillOpacity:0.4,
            strokeColor: 'blue',
            strokeOpacity: 0.5,
            strokeWeight: 0.1,
            radius: 500, //半径，单位为米
            editing: false
          },
          label: {
            content:'电子围栏名称2'
          }
        }
      ]
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    setLimitRange () {
      this.$router.push({name:'setlimitrange'});
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  .bm-view {
    width: 100%;
    height: 100%;
  }
  .limitRange{
    width: 100%;
    height: 100%;
  }
  .footer-wrap{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    .message-wrap{
      // height: 140px;
      .message-box{
        background-color: #fff;
        width: 700px;
        height: 140px;
        margin: 0 auto 30px;
        border-radius: 10px;
        padding: 34px 20px 0;
        @include bottomShadow;
        .title{
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
          .warning{
            font-size: 24px;
            color: #f16464;
          }
          .time{
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
    .setLimitRange{
      display: block;
      margin:0 auto 26px;
      @include blueButton;
      @include bottomShadow;
    }
  }
</style>

