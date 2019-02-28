<template>
  <div class="analysis-wrap">
    <van-tabs v-model="tabActive" @change="handleTabChange">
      <van-tab :title="item" v-for="(item,index) of courses" :key="index"></van-tab>
    </van-tabs>
    <div class="table-content">
      <div class="tab-wrap">
        <TabRound :tabItems="tabLists" :itemActive.sync="tabRoundActive" @on-tab-item-click="handleTabRoundClick"></TabRound>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th>知识点</th>
            <th>包含小题</th>
            <th>得分</th>
            <th>得分率</th>
          </tr>
          <tr v-for="(item,index) of tableData" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.num}}</td>
            <td>{{item.score}}</td>
            <td>{{item.rate}}</td>
          </tr>
          <tr>
            <td colspan="4" v-if="tableData.length == 0">{{resMessage}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import TabRound from '@c/TabRound';
import request from '@/request';
import { mapActions } from 'vuex';
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
      tabRoundActive: 0,
      ex_id: 0, //考试id
      y_kaohao: 0, //学生考号
      checked_course: '', //选中科目
      type:1, //1知识点  2认知水平
      tableData: [],
      resMessage: '' //接口返回的错误信息
    }
  },
  watch: {
  },
  methods: {
    ...mapActions(['getCourse']),
    //切换科目tab
    handleTabChange(index) {
      console.log(index);
      this.checked_course = this.courses[index];
      this.tabRoundActive = 0;
      this.type = 1;
      this.getSummary()
    },
    //切换知识点、认知水平
    handleTabRoundClick(index) {
      this.type = index + 1
      this.getSummary()
    },
    getSummary() {
      let params = {
        y_kaohao: this.y_kaohao, //学生考号
        ex_id: this.ex_id, //考试id
        subject_name: this.checked_course, //科目名称
        type: this.type
      };
      request.getSummary(params)
      .then(res => {
        console.log(res);
        if(res.code == 200){
          this.tableData = res.extraData
        }else{
          this.tableData = [];
          this.resMessage = res.message;
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
    
    this.getCourse({y_kaohao:this.y_kaohao,ex_id:this.ex_id}).then(()=>{
      console.log('finish')
      this.courses = this.$store.state.score.subject_list
      this.checked_course = this.courses[0]
      this.getSummary()
    })
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
    }
  }
}
</style>
