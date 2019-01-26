<template>
  <div class="choose-mam-pos">
    <baidu-map class="map" style="display: flex; flex-direction: column" center="北京">
      <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
      <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
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

