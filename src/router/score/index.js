// 考试模块
import Home from '../../views/score/Home'
import StAnalysis from '../../views/score/StAnalysis'
import StSurvey from '../../views/score/StSurvey'
import AnalysisTable from '../../views/score/AnalysisTable'

export default [
  {
    path: '/score/home',
    name: 'score_home',
    component: Home
  },
  {
    path: '/score/analysis/:ex_id/:kaohao',
    name: 'score_analysis',
    component: StAnalysis
  },
  {
    path: '/score/survey/:ex_id/:kaohao',
    name: 'score_survey',
    component: StSurvey
  },
  {
    path: '/score/analysisTable/:ex_id/:kaohao',
    name: 'score_analysis_table',
    component: AnalysisTable
  }
]