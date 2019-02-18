<template>
  <div class="score-home">
    <div class="exam-item">
      <h2 class="exam-name">宏途第一实验中学2019年1月测考</h2>
      <div class="exam-time">考试时间：2019-02-14</div>
      <div class="total-score-box">
        <div class="total-score">
          <div class="score">
            <div class="label">总成绩</div>
            <div class="val">568<span class="unit">分</span></div>
          </div>
          <div class="ranking">
            <div class="label">排名</div>
            <div class="val">13</div>
          </div>
        </div>
      </div>
      <div class="course-list-box">
        <div class="course-item">
          <span class="name">语文</span>
          <span class="score">115分</span>
        </div>
        <div class="course-item">
          <span class="name">数学</span>
          <span class="score">105分</span>
        </div>
        <div class="course-item">
          <span class="name">英语</span>
          <span class="score">110分</span>
        </div>
        <div class="course-item">
          <span class="name">物理</span>
          <span class="score">89分</span>
        </div>
        <div class="course-item">
          <span class="name">化学</span>
          <span class="score">82分</span>
        </div>
      </div>
      <div class="operate-box">
        <button @click="handleClick1()">试题解析</button>
        <button @click="handleClick2()">成绩分析</button>
      </div>
    </div>
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
    },
    handleClick1 () {
      this.$router.push({name:'score_analysis'})
    },
    handleClick2 () {
      this.$router.push({name:'score_analysis_table'})
    }
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

