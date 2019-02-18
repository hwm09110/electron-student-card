<template>
  <div class="analysis-wrap">
    <van-tabs v-model="tabActive">
      <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
    </van-tabs>
    <div class="main-content">
      <div class="top-operate">
        <TabRound :tabItems="tabLists" :itemActive.sync="tabRoundActive"></TabRound>
        <!-- <span class="entry-btn"> -->
          <router-link :to="{name:'score_survey'}" tag="span" class="entry-btn">试卷概况</router-link>
        <!-- </span> -->
      </div>
      <!-- 题目列表 start -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
      <div class="question-wrap">
        <div class="item-box" v-for="(item,index) in questions" :key="index">
          <div class="item-top">
            <h3 class="num">一、1</h3>
            <div class="result">
              <span class="self-score">得分：<span class="score">2分</span></span>
              <span class="original-score">共<span class="score">2分</span></span>
            </div>
          </div>
          <div class="question-box">
            <img src="../../assets/img/question.png" alt="question">
          </div>
          <div class="answer-box">
            <div class="answer-oprate">
              <span class="tips">答案解析：</span>
              <span class="arrow-icon"></span>
            </div>
            <div class="answer-content">
              <div class="correct">正确答案：A</div>
              <div class="analysis">题目解析：这里是题目解析内容，一大段文字一大段文字一大段文字一大段文字一大段文字一大段文字一大段文字一大段文字。</div>
            </div>
          </div>
        </div>
      </div>
      </van-list>
      <!-- 题目列表 end -->
    </div>
  </div>
</template>

<script>
import TabRound from '@c/TabRound';
export default {
  name: 'StAnalysis',
  components: {
    TabRound
  },
  data() {
    return {
      tabActive: 0,
      courses:['语文','数学','英语','物理','化学','生物','政治','历史','地理','思想品德'],
      tabLists: ['全部试题','仅看错题'],
      tabRoundActive: 0,
      questions: [], //所有题目
      loading: false,
      finished: false,
      error: false,
      hasSetError: false
    }
  },
  watch: {
    tabRoundActive(newVal,oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  },
  methods: {
    onLoad () {
      console.log('加载数据！')
      setTimeout(()=>{
        if (this.questions.length == 30 && !this.hasSetError) {
          this.error = true;
          this.hasSetError = true;
        }
        for(let i = 0; i < 10; i++){
          this.questions.push(this.questions.length + 1)
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.questions.length >= 50) {
          this.finished = true;
        }
      },1500);
    }
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
}
</style>

