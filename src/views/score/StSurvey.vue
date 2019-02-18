<template>
  <div class="survey-wrap">
    <van-tabs v-model="tabActive">
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
export default {
  name: 'StSurvey',
  data() {
    return {
      tabActive: 0,
      courses:['语文','数学','英语','物理','化学','生物','政治','历史','地理']
    }
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
