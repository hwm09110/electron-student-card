import http from './http';
import Qs from 'qs';

// 【成绩模块】
//获取考试列表
const getExamList = (params) => http.get('/ydzt/web_chengji/index',{params}).then(res => res.data);

//获取科目
const getCourse = (params) => http.get('/ydzt/web_chengji/subject',{params}).then(res => res.data);

//获取试题
const getQuestList = (params) => http.get('/ydzt/web_chengji/analysis',{params}).then(res => res.data);

//获取试题概况
const getAllstupaper = (params) => http.get('/ydzt/web_chengji/stupaper',{params}).then(res => res.data);

//获取知识点、认知水平
const getSummary = (params) => http.get('/ydzt/web_chengji/summary',{params}).then(res => res.data);

// 【微官网模块】

/**
 * 获取新闻栏目
 * @param {*} params=>{sch_guid:''} 
 */
const getNewsCategory = (params) => http.get('/ydzt/web_parentnews/vcolumn',{params}).then(res => res.data);

/**
 * 获取banner列表
 * @param {*} params=>{sch_guid:'',col_guid:''} 
 */
const getNewsBannerList = (params) => http.get('/ydzt/web_parentnews/vfocus',{params}).then(res => res.data);

/**
 * 获取新闻列表
 * @param {*} params=>{sch_guid:'',col_guid:'',page:1}
 */
const getNewsList = (params) => http.get('/ydzt/web_parentnews/vlist',{params}).then(res => res.data);



export default {
    getExamList,
    getCourse,
    getQuestList,
    getAllstupaper,
    getSummary,
    getNewsList,
    getNewsBannerList,
    getNewsCategory
};

