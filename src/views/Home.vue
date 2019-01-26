<template>
  <div class="home">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
      <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
      <bm-circle 
        :center="circlePath.center" 
        :radius="circlePath.radius" 
        :stroke-color="circlePath.strokeColor" 
        :stroke-opacity="circlePath.strokeOpacity" 
        :stroke-weight="circlePath.strokeWeight" 
        :fillColor="circlePath.fillColor" 
        :fillOpacity="circlePath.fillOpacity" 
        :editing="circlePath.editing">
      </bm-circle>
    </baidu-map>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tab from '@c/Tab'
// import Business from '@/views/Business'
// import { Icon, TabItem,} from 'vux'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      circlePath: {
        center: {
          lng: 116.404,
          lat: 39.915
        },
        fillColor:'#30A5FF',
        fillOpacity:'0.2',
        strokeColor: 'blue',
        strokeOpacity: 0.5,
        strokeWeight: 0.1,
        radius: 500, //半径，单位为米
        editing: false
      }
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
  }
  .bm-view {
    width: 100%;
    height: 100%;
  }
</style>

