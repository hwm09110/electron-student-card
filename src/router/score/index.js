// 考试模块
import Home from '../../views/score/Home'
import StAnalysis from '../../views/score/StAnalysis'
import StSurvey from '../../views/score/StSurvey'
import AnalysisTable from '../../views/score/AnalysisTable'

export default [
  {
    path: '/score/home',
    name: 'score_home',
    component: Home,
    meta:{title:'成绩列表'}
  },
  {
    path: '/score/analysis/:ex_id/:kaohao',
    name: 'score_analysis',
    component: StAnalysis,
    meta:{title:'试题解析'}
  },
  {
    path: '/score/survey/:ex_id/:kaohao',
    name: 'score_survey',
    component: StSurvey,
    meta:{title:'题目概况'}
  },
  {
    path: '/score/analysisTable/:ex_id/:kaohao',
    name: 'score_analysis_table',
    component: AnalysisTable,
    meta:{title:'成绩分析'}
  }
]