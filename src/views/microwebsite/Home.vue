<template>
<pull-to
      :is-top-bounce="isBounce"
      :is-bottom-bounce="isBounce"
      @infinite-scroll="loadMore">
  <div class="home-wrap">
    <van-tabs
      v-if="categorys.length"
      v-model="tabActive"
      :line-width="20"
      :swipe-threshold="3.5"
      title-active-color="#3f3f3f"
      title-inactive-color="#8a9199" 
      @change="handleTabChange">
      <van-tab :title="item.col_name" v-for="(item,index) of categorys" :key="index"></van-tab>
    </van-tabs>
    <!-- banner start -->
    <div class="banner-wrap" v-if="swiperSlides.length">
      <swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length">
        <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
          <img :src="imgDomain+item.title_img" alt="banner" @click="handleOpenNewsDetail(item)">
          <div class="img-title">{{item.title}}</div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- banner end -->
    <div class="main-container">
      <div class="news-list-box">
        <div v-for="(item,index) of newsData" :key="index">
          <div class="three-img-item" v-if="item.type == 2" @click="handleOpenNewsDetail(item)">
            <div class="title-box">{{item.title}}</div>
            <div class="horizontal-image-box">
              <div class="image-item" v-for="(img,img_index) of item.title_img" :key="img_index">
                <img :src="imgDomain+img" alt="img">
              </div>
            </div>
          </div>
          <div class="news-item" @click="handleOpenNewsDetail(item)" v-else>
            <div class="news-img">
              <img :src="imgDomain+item.title_img[0]" alt="img" v-if="item.title_img[0]">
              <div class="defalut-img" v-else></div>
            </div>
            <div class="news-content">
              <div class="title">{{item.title}}</div>
              <div class="intr">{{item.news_desc}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nodata-tips" v-show="nodataTipShow || categorys.length == 0">没有相关新闻</div>
    </div>
    <!-- news detail popup sart -->
    <van-popup v-model="popupShow" position="right" :overlay="false" style="width:100%;height:100%;">
      <div class="news-detail-wrap">
        <header class="detail-header">
          <span class="goback" @click="popupShow = !popupShow"></span>
        </header>
        <article class="article-box">
          <h1 class="title">谷歌的战略：把未来押注于人工智能、云服务和“登月计划”</h1>
          <div class="others">
            <span class="source">校园文化站</span>
            <span class="time">发布时间: 2018年11月20日 15:35</span>
          </div>
          <div class="article-thumb">
            <img src="../../assets/img/news-detail.png" alt="img">
          </div>
          <div class="article-content">
            自1998年在加州门洛帕克(Menlo Park)的车库
            中成立以来，谷歌已经成为了后互联网时代企业
            创新的火炬手。它孵化非常遥远的概念的吸引力
            体现在几个具体方面，从著名的“20%时间”政策
            为其员工的个人项目(使得Gmail和AdSense的
            诞生)，谷歌风险投资公司的成立于2009年作为
            一个准独立投资部门，其专注”登月计划”的
            Google X的创新实验室，现在仅仅是X。

            然而，近年来，该公司已经开始从实验方法、风
            险研发向去中心的公司结构转变。

            在2011年掌舵后，首席执行官拉里·佩奇(Larry 
            Page，现任Alphabet公司的负责人)宣布谷歌
          </div>
        </article>
        <div class="detail-footer">
          <div class="read-count">阅读数 998</div>
          <div class="zan-count"><span class="icon"></span>点赞 998</div>
        </div>
      </div>
    </van-popup>
    <!-- news detail popup end -->
  </div>
  <div class="loading-bar" v-show="isLoading">
      <van-loading style="display:inline-block;" size="20"/>
      加载中...
  </div>
  <div class="no-more-bar" v-if="isFinish">没有更多了！</div>
</pull-to>
</template>


<script>
import request from '@/request';
import { IMGDOMAIN, WEBDOMAIN } from '@/assets/js/config';
//vue-awesome-swiper https://github.com/surmon-china/vue-awesome-swiper
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import PullTo from 'vue-pull-to';

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    PullTo
  },
  data() {
    return {
      sch_guid: '', //学校guid
      tabActive: 0, //type tab 选中的index
      selected_category: '', //选中的新闻栏目guid
      categorys: [
        // {col_guid:"ac7cea2699ac99N32204703",col_name:"校园新闻"}
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 1, //在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置为本来slide的个数)
        slidesPerView: 'auto',
        centeredSlides: true,
        disableOnInteraction: false, //设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
        // spaceBetween: 10, //css中设置,否则会出现位置错乱（重要）
        initialSlide: 0 //初始化时active slide
      },
      swiperSlides: [], //banner list
      popupShow: false,
      newsData: [
        // {
        //   news_guid: 'jc7e38390ddb00V88838412',
        //   news_id: 34,
        //   title: '最上面的新闻图',
        //   title_img: ['/images/campus_news/20190305/155177582921305.png'],
        //   news_desc: '所得税的',
        //   type: 1,
        //   insert_time: 1551775829,
        // }
      ],
      nodataTipShow:false,
      page: 1, //新闻列表页码
      isLoading: false, //是否正在加载中
      isFinish: false, //是否所有数据加载完
      isBounce: false, //是否启用下拉回弹效果
      imgDomain: IMGDOMAIN //图片域名
    }
  },
  computed: {
    //定义这个swiper对象
　　swiper(){
　　  return this.$refs.mySwiper.swiper;
　　}
  },
  methods: {
    //点击切换栏目
    handleTabChange(activeIndex) {
      this.selected_category = this.categorys[activeIndex]['col_guid']
      this.page = 1
      this.isFinish = false
      this.isLoading = true
      this.newsData = []
      this.getNewsBanner().then(() => {
        this.getNewsList()
      })
    },
    //点击新闻列表项
    handleNewsItemClick() {
      this.popupShow = true
    },
    //打开新闻详情（调原生方法）
    handleOpenNewsDetail(item) {
      let u = navigator.userAgent,
          isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
          isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      let news_guid = item.news_guid
      let url = `${WEBDOMAIN}/ydzt/web_parentnews/vdetail?news_guid=${news_guid}`
      console.log(url)
      if(isAndroid) {
          window.js_campus.gotoPage(url)
      }else if(isiOS) {
          window.webkit.messageHandlers.openNewsDetail.postMessage(url)            
      }
    },
    loadMore () {
      if(this.isLoading || this.isFinish) return
      this.page = this.page + 1
      this.isLoading = true
      this.getNewsList()
    },
    //拉取新闻栏目
    getNewsColumn () {
      let params = {sch_guid:this.sch_guid}
      return request.getNewsCategory(params).then((res) => {
        if(res.code == 200){
          this.categorys = res.extraData
        }else{
          this.$toast({
            position: 'bottom',
            message: res.message
          })
        }
      })
    },
    //拉取banner
    getNewsBanner () {
      let params = {sch_guid:this.sch_guid,col_guid:this.selected_category}
      return request.getNewsBannerList(params).then((res) => {
        if(res.code == 200){
          this.swiperOption.loopedSlides = res.extraData.length
          this.swiperOption.loop = res.extraData.length > 2?true:false
          this.swiperSlides = res.extraData
        }else{
          this.$toast({
            position: 'bottom',
            message: res.message
          })
        }
      })
    },
    //拉取新闻列表
    getNewsList () {
      let params = {sch_guid:this.sch_guid,col_guid:this.selected_category,page:this.page}
      this.nodataTipShow = false
      return request.getNewsList(params).then((res) => {
        console.log(res)
        this.isLoading = false
        if(res.code == 200){
          if(res.extraData.length > 0){
            this.newsData.push(...res.extraData)
          }else{
            if(this.page > 1){
              this.isFinish = true
            }
            if(this.page == 1){
              this.nodataTipShow = true
            }
          }
        }else{
          this.$toast({
            position: 'bottom',
            message: res.message
          })
        }
      })
    },
    //获取选中栏目guid
    getActiveTabGuid () {
      this.selected_category = this.categorys.length > 0 && this.categorys[this.tabActive]?this.categorys[this.tabActive]['col_guid']:''
    }
  },
  created() {
    this.sch_guid = this.$route.query.sch_guid
  },
  mounted() {
    this.getNewsColumn().then(() => {
      this.getActiveTabGuid()
      if(this.selected_category){
        return this.getNewsBanner()
      }
    }).then(() => {
      if(this.selected_category){
        this.getNewsList()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home-wrap{
  // min-height: 100%;
  .banner-wrap{
    background-color:#fff;
    padding:24px 0;
    height: 300px;
  }
  .main-container{
    padding:0 20px 20px;
    background-color: #fff;
    margin-top: 15px;
    .news-list-box{
      .news-item{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 25px 0;
        border-bottom: 1px solid #eee;
        .news-img{
          width: 208px;
          height: 146px;
          img{
            width: 100%;
            height: 100%;
          }
          .defalut-img{
            width: 100%;
            height: 100%;
            background-color: #EFEFF5;
          }
        }
        .news-content{
          width: 506px;
          padding-left: 36px;
          box-sizing: border-box;
          .title{
            font-size: 28px;
            color: #3f3f3f;
          }
          .intr{
            font-size: 24px;
            color: #aaaaaa;
            margin-top: 24px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
      .three-img-item{
        .title-box{
          height: 80px;
          line-height: 80px;
          font-size:28px;
          color: #3f3f3f;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .horizontal-image-box{
          padding-bottom: 25px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          .image-item{
            width: 210px;
            height: 147px;
            background-color: #eee;
            margin-right: 42px;
            &:last-child{
              margin-right: 0;
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .nodata-tips{
      padding: 20px 0 0px;
      font-size: 28px;
      color: #666;
      text-align: center;
    }
  }
}

//新闻详情页
.news-detail-wrap{
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-size: initial;
  .detail-header{
    padding: 25px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    .goback{
      display: inline-block;
      width: 16px;
      height: 30px;
      background-image: url('../../assets/img/arrow-left.png');
      background-size: 16px 30px;
    }
  }
  .article-box{
    padding: 30px 40px;
    .title{
      font-size: 44px;
      color: #333;
      margin: 0;
    }
    .others{
      margin-top: 30px;
      margin-bottom: 58px;
      .source,
      .time{
        font-size: 28px;
        color: #999;
      }
      .time{
        margin-left: 30px;
      }
    }
    .article-thumb{
      width: 636px;
      margin:0 auto 20px;
      img{
        width: 100%;
        max-width: 100%;
      }
    }
    .article-content{
      font-size: 30px;
      color: #333;
      line-height: 1.8;
    }
  }
  .detail-footer{
    padding: 40px 40px 60px;
    display: flex;
    justify-content: space-between;
    .read-count{
      font-size: 28px;
      color: #aaa;
    }
    .zan-count{
      font-size: 28px;
      color: #aaa;
      .icon{
        display: inline-block;
        width: 28px;
        height: 30px;
        background-image: url('../../assets/img/zan-icon.png');
        background-size: 28px 30px;
        margin-right: 6px;
        margin-bottom: -4px;
      }
      &.haszan{
        color: #5ba6ff;
        .icon{
          background-image: url('../../assets/img/zan-active-icon.png');
        }
      }
    }
  }
}

// 设置swiper样式
.swiper-container{
  width:750px;
  .swiper-wrapper{
    .swiper-slide{
      position: relative; 
      width: 600px;
      height: 300px;
      overflow: hidden; 
      border-radius: 20px;
      transition: all .2s;
      margin-right: 20px;
      &.swiper-slide-prev,
      &.swiper-slide-next{
        margin-top: 20px;
        height: 260px;
      }
      img{
        width:100%;
        height: 100%;
      }
      .img-title{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        background-color: rgba(0,0,0,0.2);
        color:#fff;
        font-size: 26px;
      }
    }
  }
}

// 加载更多 loading tips
.loading-bar {
  width: 100%;
  text-align: center;
  font-size:28px;
  color:#666;
  padding: 30px 0;
  background-color: #fff;
}
.no-more-bar{
  padding: 30px 0;
  text-align:center;
  font-size:28px;
  color:#666;
}
</style>

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