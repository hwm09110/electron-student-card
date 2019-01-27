<template>
  <div class="mask-box">
    <div class="choose-map-pos">
      <baidu-map 
        class="bm-view"
        :center="center" 
        :zoom="zoom"
        :double-click-zoom="false"
        v-if="load"
        @ready="handleReady">
        <!-- <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="false" :autoLocation="false"></bm-geolocation> -->
        <bm-marker 
          :position="marker.position" 
          :dragging="true"
          @dragend="handleDragend" 
          animation="BMAP_ANIMATION_BOUNCE">
        </bm-marker>
      </baidu-map>
      <div class="operate-box">
        <div class="location-info">
          <div class="info-box">
            <span class="label">经度：</span>
            <span class="value">{{select_lng}}</span><br/><br/>
            <span class="label">纬度：</span>
            <span class="value">{{select_lat}}</span>
          </div>
          <div class="btn-box">
            <span class="sure-btn" @click="handleSure">确定</span>
            <span class="cancel-btn" @click="handleCancel">取消</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseMapPos',
  props:{
    show: {
      type: Boolean
    }
  },
  components: {
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      marker:{
        position: {lng: 116.404, lat: 39.915}
      },
      load:false,
      select_lat: '--',
      select_lng: '--',
    }
  },
  methods: {
    handleReady ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 18
    },
    handleDragend (type) {
      console.log(type)
      let {lat,lng} = type.point;
      this.select_lat = lat;
      this.select_lng = lng;
    },
    handleSure () {
      this.$emit('on-sure',{lat:this.select_lat,lng:this.select_lng});
      this.hidePopup();
    },
    handleCancel () {
      this.hidePopup();
    },
    showPopup() {
      let oElemt = document.querySelector('.choose-map-pos');
      let oMask = document.querySelector('.mask-box');
      oMask.style.display = 'block';
      setTimeout(()=>{
        oElemt.style.bottom = '0';
        this.load = true;
      },150);
    },
    hidePopup() {
      let oElemt = document.querySelector('.choose-map-pos');
      oElemt.style.bottom = '-100%';
    }
  },
  watch: {
    show (newVal,oldVal) {
      newVal?this.showPopup():this.hidePopup();
    }
  },
  mounted () {
    let oMask = document.querySelector('.mask-box');
    let oElemt = document.querySelector('.choose-map-pos');

    oElemt.addEventListener('transitionend ',()=>{
      if(oElemt.style.bottom == '-100%'){
        oMask.style.display = 'none';
        this.$emit('update:show', false);
        this.load = false;
      }
    });
    oElemt.addEventListener('webkitTransitionEnd',()=>{
      if(oElemt.style.bottom == '-100%'){
        oMask.style.display = 'none';
        this.$emit('update:show', false);
        this.load = false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  .bm-view {
    width: 100%;
    height: 100%;
  }
  .mask-box{
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.3);
  }
  .choose-map-pos{
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    transition: bottom .5s;
    .operate-box{
      // display: none;
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 700px;
      padding: 15px;
      border-radius: 10px;
      background-color: #fff;
      @include bottomShadow;
      .location-info{
        display: flex;
        justify-content: space-between;
        .label{
          font-size: 36px;
          color: #333;
        }
        .value{
          font-size: 36px;
          color: #47aefe;
        }
        .sure-btn,
        .cancel-btn{
          display: block;
          width: 100px;
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-size: 24px;
          border-radius: 10px;
          text-align: center;
        }
        .sure-btn{
          background-color: #47aefe;
          margin-bottom: 10px;
        }
        .cancel-btn{
          background-color: #ccc;
        }
      }
    }
  }
</style>

