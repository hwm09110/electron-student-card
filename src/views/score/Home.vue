<template>
  <div class="score-home">
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh" :disabled="true">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          :immediate-check="false"
          @load="onLoad"
        >
        <div class="exam-item" v-for="(item,index) in examList" :key="index">
          <h2 class="exam-name">{{item.ex_name}}</h2>
          <div class="exam-time">考试时间：{{item.ex_time}}</div>
          <div class="total-score-box">
            <div class="total-score">
              <div class="score">
                <div class="label">总成绩</div>
                <div class="val">{{item.score}}<span class="unit">分</span></div>
              </div>
              <div class="ranking">
                <div class="label">排名</div>
                <div class="val">{{item.rank}}</div>
              </div>
            </div>
          </div>
          <div class="course-list-box">
            <div class="course-item" v-for="(score,key,index) of item.subject_info" :key="index">
              <span class="name">{{key}}</span>
              <span class="score">{{score}}分</span>
            </div>
          </div>
          <div class="operate-box">
            <button @click="handleClick1(item)">试题解析</button>
            <button @click="handleClick2(item)">成绩分析</button>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import request from '@/request';
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      examList: [],
      loading: false,
      finished: false,
      error: false,
      hasSetError: false,
      isRefreshLoading: false,
      page: 1
    }
  },
  methods: {
    handlePreview() {
      ImagePreview({
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        showIndex:false
      });
    },
    //试题解析
    handleClick1(item) {
      let courses = this.getCourses(item.subject_info)
      this.$store.commit('set_subject',courses)

      let params = {
        ex_id: item.ex_id,
        y_kaohao: item.y_kaohao
      };
      this.$router.push({name:'score_analysis',params:params})
    },
    //成绩分析
    handleClick2(item) {
      let courses = this.getCourses(item.subject_info)
      this.$store.commit('set_subject',courses)
      
      let params = {
        ex_id: item.ex_id,
        y_kaohao: item.y_kaohao
      };
      this.$router.push({name:'score_analysis_table',params:params})
    },
    onLoad() {
      // setTimeout(()=>{
      //   if (this.examList.length == 30 && !this.hasSetError) {
      //     this.error = true;
      //     this.hasSetError = true;
      //   }
      //   for(let i = 0; i < 10; i++){
      //     this.examList.push(this.examList.length + 1)
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.examList.length >= 50) {
      //     this.finished = true;
      //   }
      // },1500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.examList = [];
        for(let i = 0; i < 10; i++){
          this.examList.push(this.examList.length + 1)
        }
        this.isRefreshLoading = false;
      }, 10000);
    },
    getExamList(page) {
      let params = {
        stu_guid:this.$store.state.stu_guid,
        page:page
      };
      request.getExamList(params)
      .then(res => {
        console.log(res);
        if(res.code == 200){
          this.examList = res.extraData;
        }
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      })
    },
    getCourses(courseObj) {
      let courses = [];
      for (const p in courseObj) {
        courses.push(p)
      }
      return courses;
    }
  },
  created() {
    this.getExamList(this.page);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
.score-home{
  margin:30px 25px;
}
.exam-item{
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 40px 25px 30px;
  .exam-name{
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    color: #3f3f3f;
    margin-bottom: 20px;
  }
  .exam-time{
    font-size: 26px;
    color: #999;
    margin-bottom: 30px;
    text-align: center;
  }
  .total-score-box{
    background-color: #ebf6ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    .total-score{
      display: inline-block;
      .score,
      .ranking{
        display: inline-block;
        color: #47aefe;
        .label{
          font-size: 24px;
        }
        .val{
          font-size: 36px;
          margin-top: 20px;
          font-weight: bold;
        }
        .unit{
          font-size: 24px;
          font-weight: normal;
          margin-left: 4px;
        }
      }
      .ranking{
        margin-left: 170px;
      }
    }
  }
  .course-list-box{
    .course-item{
      height: 100px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name{
        font-size: 28px;
        color: #3f3f3f;
      }
      .score{
        font-size: 28px;
        color: #8a9199;
      }
    }
  }
  .operate-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    button{
      @include blueButton(309px,80px);
      box-shadow: 0 3px 10px 1px rgba(0,0,0,0.2);
    }
  }
}
</style>

