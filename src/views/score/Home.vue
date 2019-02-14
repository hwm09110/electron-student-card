<template>
  <div class="exam_home">
    <button @click="handlePreview">预览图片</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ImagePreview } from 'vant';
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    handlePreview () {
      ImagePreview({
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        showIndex:false
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
</style>

