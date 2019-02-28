<template>
  <pull-to
      :is-top-bounce="isBounce"
      :is-bottom-bounce="isBounce"
      @infinite-scroll="loadMore">
    <div class="analysis-wrap">
      <van-tabs v-model="tabActive" @change="handleTabChange">
        <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
      </van-tabs>
      <div class="main-content">
        <div class="top-operate">
          <TabRound :tabItems="tabLists" :itemActive.sync="tabRoundActive" @on-tab-item-click="handleTabRoundClick"></TabRound>
          <span class="entry-btn" @click="handleEntryClick">
            <!-- <router-link :to="{name:'score_survey'}" tag="span" class="entry-btn">试卷概况</router-link> -->
            试卷概况
          </span>
        </div>
        <!-- 题目列表 start -->
        
          <div class="question-wrap">
            <div class="item-box" v-for="(item,index) in questions" :key="index" v-show="item.show">
              <div class="item-top">
                <h3 class="num">{{item.no}}.</h3>
                <div class="result">
                  <span class="self-score">得分：<span :class="['self-score',item.my_score == 0?'zero-score':'']">{{item.my_score}}分</span></span>
                  <span class="original-score">共<span class="score">{{item.score}}分</span></span>
                </div>
              </div>
              <div class="question-box">
                <img :src="item.question_img" alt="question">
                <!-- <img src="../../assets/img/question.png" alt="question"> -->
              </div>
              <div class="answer-box">
                <div class="answer-oprate">
                  <span class="tips">答案解析：</span>
                  <span class="arrow-icon" @click="item.open = !item.open"></span>
                </div>
                <div class="answer-content" :style="{display:item.open?'block':'none'}">
                  <div class="correct">正确答案：{{item.correct_answer}}</div>
                  <div class="analysis">题目解析：{{item.analysis}}</div>
                </div>
              </div>
            </div>
            <div class="message-tips" v-if="questions.length == 0">{{resMessage}}</div>
          </div>
        <!-- 题目列表 end -->
      </div>
    </div>
    <div class="loading-bar" v-show="isLoading">
        <van-loading style="display:inline-block;" size="20"/>
        加载中...
    </div>
    <div class="no-more-bar" v-if="isFinish">没有更多了！</div>
  </pull-to>
</template>

<script>
import TabRound from '@c/TabRound';
import request from '@/request';
import { mapActions } from 'vuex';
import PullTo from 'vue-pull-to';
export default {
  name: 'StAnalysis',
  components: {
    TabRound,
    PullTo
  },
  data() {
    return {
      tabActive: 0, //tab 选中项
      courses: [],
      tabLists: ['全部试题','仅看错题'],
      tabRoundActive: 0, //是否仅看错题 0:否 1:是
      questions: [], //所有题目
      ex_id: 0, //考试id
      y_kaohao: 0, //学生考号
      checked_course: '', //选中科目
      resMessage: '', //接口返回的错误信息
      page: 1,
      isLoading: false, //正在加载中
      isFinish: false, //所有数据加载完
      isBounce: false //是否启用下拉回弹效果
    }
  },
  methods: {
    ...mapActions(['getCourse']),
    //切换科目tab
    handleTabChange(index) {
      this.checked_course = this.courses[index];
      this.page = 1;
      this.isFinish = false;
      this.tabRoundActive = 0;
      this.questions = [];
      this.isLoading = true;
      this.getQuestList(this.page)
    },
    //切换全部试题、仅看错题
    handleTabRoundClick(index) {
      if(this.questions.length > 0){
        this.questions.forEach(item=>{
          if(index == 0){
            item['show'] = true;
          }else if(index == 1){
            if(item['my_score'] > 0){
              item['show'] = false;
            }
          }
        })
      }
    },
    //进入试卷概况
    handleEntryClick() {
      let params = {
        ex_id: this.ex_id,
        kaohao: this.y_kaohao,
        subject_name: this.checked_course
      };
      let querys = {
        course: this.checked_course
      };
      this.$router.push({name:'score_survey',params:params,query:querys})
    },
    loadMore () {
      if(this.isLoading || this.isFinish) return;
      this.page = this.page + 1;
      this.isLoading = true;
      this.getQuestList(this.page)
    },
    getQuestList(page) {
      let params = {
        y_kaohao: this.y_kaohao, //学生考号
        ex_id: this.ex_id, //考试id
        subject_name: this.checked_course, //科目名称
        page:page
      };
      request.getQuestList(params)
      .then(res => {
        this.isLoading = false;
        if(res.code == 200){
          let data = res.extraData;
          if(data.length == 0){
            if(this.page > 0){
              this.isFinish = true;
            }
            return;
          }
          let newData = data.map(item=>{
            item['open'] = false;
            item['show'] = true;
            //tab 是仅看错题情况下
            if(this.tabRoundActive == 1 && item['my_score'] > 0){
              item['show'] = false;
            }
            return item;
          });
          this.questions.push(...newData);
        }else{
          this.questions = [];
          this.resMessage = res.message;
        }
      })
      .catch(error => {
        this.isLoading = false;
        console.log(error);
      })
    },
  },
  created() {
    this.ex_id = this.$route.params.ex_id
    this.y_kaohao = this.$route.params.kaohao
    this.getCourse({y_kaohao:this.y_kaohao,ex_id:this.ex_id}).then(()=>{
      console.log('finish')
      this.courses = this.$store.state.score.subject_list
      this.checked_course = this.courses[0]
      this.isLoading = true
      this.getQuestList(this.page)
    })
  }
}
</script>

<style lang="scss">
/* 重置 vant tab 组件样式 */
@import url('../../assets/scss/vant-reset.scss');
</style>

<style lang="scss" scope>
.main-content{
  background-color: #fff;
  padding: 0 25px;
  margin-top: 24px;
  .top-operate{
    padding-top: 40px;
    position: relative;
    .entry-btn{
      position: absolute;
      right: 0;
      top:54px;
      color: #47aefe;
      font-size: 26px;
    }
  }
  .question-wrap{
    .item-box{
      padding: 55px 0;
      border-bottom: 1px solid #ddd;
      &:last-child{
        border-bottom:none;
      }
      .item-top{
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        color: #3f3f3f;
        .num{
          font-weight: normal;
          font-size: 26px;
        }
        .result{
          .self-score{
            font-size: 26px;
            .score{
              font-size: 26px;
              color: #47aefe;
            }
            .zero-score{
              font-size: 26px;
              color: #ff4e4e;
            }
          }
          .original-score{
            font-size: 26px;
            margin-left: 40px;
            .score{
              font-size: 26px;
            }
          }
        }
      }
      .question-box{
        margin: 25px 0;
        img{
          max-width: 100%;
          width: 100%;
        }
      }
      .answer-box{
        .answer-oprate{
          display: flex;
          justify-content: space-between;
          align-items:center;
          margin-bottom: 20px;
          .tips{
            font-size: 26px;
            color: #3f3f3f;
            font-weight: 700;
          }
          .arrow-icon{
            position: relative;
            display: inline-block;
            width: 60px;
            height: 36px;
            border-radius: 8px;
            background-color: #f1f9ff;
            &::after{
              display: block;
              position: absolute;
              left: 50%;
              top:50%;
              transform: translate(-50%,-50%);
              content: '';
              width: 22px;
              height: 12px;
              background-image: url('../../assets/img/arrow-down-icon.png');
              background-size: 22px 12px;
            }
          }
          .open{
            &::after{
              background-image: url('../../assets/img/arrow-up-icon.png');
            }
          }
        }
        .answer-content{
          display: none;
          background-color: #f1f9ff;
          padding: 20px;
          .correct{
            color: #ff4e4e;
            font-size: 26px;
          }
          .analysis{
            font-size: 26px;
            color: #3f3f3f;
            line-height: 1.8;
            margin-top: 28px;
          }
        }
      }
    }
  }
  .message-tips{
    font-size:26px;
    color:#666;
    padding:40px 0;
    text-align:center;
  }
}
// 加载更多 loading tips
.loading-bar {
  width: 100%;
  padding: 30px 0;
  text-align: center;
  font-size:28px;
  color:#666;
  background-color: #fff;
}
.no-more-bar{
  text-align:center;
  padding:30px 0;
  font-size:28px;
  color:#666;
}
</style>

