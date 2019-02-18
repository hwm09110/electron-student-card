<template>
  <div class="analysis-wrap">
    <van-tabs v-model="tabActive">
      <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
    </van-tabs>
    <div class="table-content">
      <div class="tab-wrap">
        <TabRound :tabItems="tabLists" :itemActive.sync="tabRoundActive"></TabRound>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th>知识点</th>
            <th>包含小题</th>
            <th>得分</th>
            <th>得分率</th>
          </tr>
          <tr>
            <td>文言文实词</td>
            <td>2</td>
            <td>5</td>
            <td>85%</td>
          </tr>
          <tr>
            <td>文言文实词</td>
            <td>2</td>
            <td>5</td>
            <td>85%</td>
          </tr>
          <tr>
            <td>文言文实词</td>
            <td>2</td>
            <td>5</td>
            <td>85%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import TabRound from '@c/TabRound';
export default {
  name: 'AnalysisTable',
  components: {
    TabRound
  },
  data() {
    return {
      tabActive: 0,
      courses: ['语文','数学','英语','物理','化学','生物','政治','历史','地理'],
      tabLists: ['知识点','认知水平'],
      tabRoundActive: 0
    }
  },
  watch: {
    tabRoundActive(newVal,oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  }
}
</script>

<style lang="scss">
/* 重置 vant tab 组件样式 */
@import url('../../assets/scss/vant-reset.scss');
</style>

<style lang="scss" scoped>
.analysis-wrap{
  height: 100%;
}
.table-content{
  background-color: #fff;
  min-height: calc(100% - 110px);
  margin-top: 20px;
  .tab-wrap{
    padding-top: 40px;
    padding-bottom: 56px;
  }
  .table{
    border-collapse:collapse;
    width: calc(100% - 44px);
    margin:0 22px;
    tr{
      th,td{
        border:1px solid #ddd;
        font-size: 26px;
        text-align: center;
        padding:20px 0;
      }
      th{
        background-color: #f5f5f9;
        font-weight: blod;
      }
      td{}
    }
  }
}
</style>
