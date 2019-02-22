<template>
  <div class="survey-wrap">
    <van-tabs v-model="tabActive" @change="handleTabChange">
      <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
    </van-tabs>
    <div class="survey-content">
      <div class="item">
        <img src="../../assets/img/st.png" alt="st">
      </div>
      <div class="item">
        <img src="../../assets/img/st.png" alt="st">
      </div>
      <div class="item">
        <img src="../../assets/img/st.png" alt="st">
      </div>
      <div class="item">
        <img src="../../assets/img/st.png" alt="st">
      </div>
    </div>
  </div>
</template>


<script>
import request from '@/request';
export default {
  name: 'StSurvey',
  data() {
    return {
      tabActive: 0,
      courses:[],
      ex_id: 0, //考试id
      y_kaohao: 0, //学生考号
      checked_course: '', //选中科目
      page: 1
    }
  },
  methods: {
    //切换tab
    handleTabChange(index) {
      console.log(index);
      this.checked_course = this.courses[index];
      this.page = 1;
      this.tabRoundActive = 0;
      this.getAllstupaper(this.page)
    },
    getAllstupaper() {
      let params = {
        y_kaohao: this.ex_id, //学生考号
        ex_id: this.y_kaohao, //考试id
        subject_name: this.checked_course, //科目名称
        page:this.page
      };
      request.getAllstupaper(params)
      .then(res => {
        console.log(res);
        if(res.code == 200){
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.ex_id = this.$route.params.ex_id
    this.y_kaohao = this.$route.params.y_kaohao
    this.courses = this.$store.state.subject_list
    this.checked_course = this.courses[0]

    this.getAllstupaper(this.page)
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
</style>
