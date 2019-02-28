<template>
  <div class="survey-wrap">
    <van-tabs v-model="tabActive" @change="handleTabChange">
      <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
    </van-tabs>
    <div class="survey-content">
      <div class="item" v-for="(item,index) in listData" :key="index">
        <img :src="item" alt="st" @click="handleImageClick(index)">
      </div>
      <div class="message-tips" v-if="listData.length == 0">{{resMessage}}</div>
    </div>
  </div>
</template>


<script>
import request from '@/request';
import { mapActions } from 'vuex';
import { ImagePreview } from 'vant';
export default {
  name: 'StSurvey',
  data() {
    return {
      tabActive: 0, //科目tab 选中的index
      courses:[],
      ex_id: 0, //考试id
      y_kaohao: 0, //学生考号
      checked_course: '', //选中科目
      listData: [], //概况列表
      resMessage: '', //接口返回的错误信息
      previewImage: [], //放大预览图片数组 [imgsrc,imgsrc,...]
      page: 1
    }
  },
  methods: {
    ...mapActions(['getCourse']),
    //切换tab
    handleTabChange(index) {
      console.log(index);
      this.checked_course = this.courses[index];
      this.page = 1;
      this.tabRoundActive = 0;
      this.getAllstupaper(this.page)
    },
    //点击图片，放大查看
    handleImageClick(index) {
      ImagePreview({
        images: this.previewImage,
        startPosition: index
      })
    },
    getAllstupaper() {
      let params = {
        y_kaohao: this.y_kaohao, //学生考号
        ex_id: this.ex_id, //考试id
        subject_name: this.checked_course, //科目名称
        page:this.page
      };
      request.getAllstupaper(params)
      .then(res => {
        console.log(res);
        if(res.code == 200){
          this.listData = res.extraData
          this.previewImage = res.extraData
        }else{
          this.listData = []
          this.resMessage = res.message
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.ex_id = this.$route.params.ex_id
    this.y_kaohao = this.$route.params.kaohao
    this.checked_course = this.$route.query.course

    this.getCourse({y_kaohao:this.y_kaohao,ex_id:this.ex_id}).then(()=>{
      this.courses = this.$store.state.score.subject_list
      this.courses.forEach((item , index) => {
        if(item == this.checked_course){
          this.tabActive = index;
        }
      })
      this.getAllstupaper(this.page)
    })
  }
}
</script>

<style lang="scss">
@import url('../../assets/scss/vant-reset.scss');
</style>

<style lang="scss" scoped>
.survey-wrap{
  height: 100%;
}
.survey-content{
  background-color: #fff;
  min-height: calc(100% - 110px);
  margin-top: 20px;
  padding-bottom:20px;
  .item{
    margin-bottom: 20px;
    img{
      max-width: 100%;
      width:100%;
    }
  }
}
.message-tips{
  font-size:26px;
  color:#666;
  padding:40px 0;
  text-align:center;
}
</style>
