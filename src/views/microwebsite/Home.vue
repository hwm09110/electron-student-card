<template>
  <div class="home-wrap">
    <van-tabs 
      v-model="tabActive"
      line-width="20"
      swipe-threshold="3.5"
      title-active-color="#3f3f3f"
      title-inactive-color="#8a9199" 
      @change="handleTabChange">
      <van-tab :title="item" v-for="(item,index) of categorys" :key="index"></van-tab>
    </van-tabs>
    <!-- banner start -->
    <div class="banner-wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <!-- <img src="../../assets/img/banner.png" alt="banner"> -->
          {{slide}}
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
    <!-- banner end -->
  </div>
</template>


<script>
import request from '@/request';
import { mapActions } from 'vuex';
//vue-awesome-swiper https://github.com/surmon-china/vue-awesome-swiper
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      tabActive: 0, //type tab 选中的index
      categorys: ['校园新闻','文化园地','校园之星','校园活动','校园风采'],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 1, //在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置为本来slide的个数)
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 1 //初始化时active slide
      },
      swiperSlides: []
    }
  },
  computed: {
    //定义这个swiper对象
　　swiper(){
　　　　return this.$refs.mySwiper.swiper;
　　}
  },
  methods: {
    ...mapActions(['getCourse']),
    handleTabChange() {
      let length = Math.floor(Math.random() * 9) + 1
      var arr = Array.from({length}, (v,k) => k)
      console.log(arr)
      this.swiperSlides = arr
      this.swiperOption.loopedSlides = this.swiperSlides.length
      setTimeout(() => {
        this.swiper.update()
      },200)
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.swiperSlides.push(1,2,3)
      this.swiperOption.loopedSlides = this.swiperSlides.length
    },3000)
  }
}
</script>

<style lang="scss">
/* 重置 vant tab 组件样式！！！呃呃 */
.van-tabs--line{
  padding-top: 108px;
  border-bottom:1px solid #eee;
}
.van-tabs--line .van-tabs__wrap{
  height: 108px;
}
.van-tab{
  color: #333;
  height: 108px;
  line-height: 108px;
  padding: 0 5px;
  .van-ellipsis{
    font-size: 28px;
  }
}
.van-tab--active{
  color: #47aefe;
  font-weight: bold;
  .van-ellipsis{
    font-size: 36px;
  }
}
.van-tabs__line{
  background-color:#47aefe;
}
</style>

<style lang="scss" scoped>
.home-wrap{
  height: 100%;
  .banner-wrap{
    background-color:#fff;
    padding:24px 0;
  }
}

// 设置swiper样式
.swiper-container{
  width:750px;
  .swiper-wrapper{
    .swiper-slide{ 
      width: 600px;
      height: 300px;
      overflow: hidden; 
      border-radius: 20px;
      &.swiper-slide-prev,
      &.swiper-slide-next{
        margin-top: 20px;
        height: 260px;
      }
      img{
        width:100%;
        height: 100%;
      }
    }
  }
}
</style>

