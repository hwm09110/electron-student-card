import http from './http';
import Qs from 'qs';

//获取考试列表
const getExamList = (params) => http.get('/ydzt/web_chengji/index',{params}).then(res => res.data);

//获取试题
const getQuestList = (params) => http.get('/ydzt/web_chengji/analysis',{params}).then(res => res.data);

//获取试题概况
const getAllstupaper = (params) => http.get('/ydzt/web_chengji/stupaper',{params}).then(res => res.data);

//获取知识点、认知水平
const getSummary = (params) => http.get('/ydzt/web_chengji/summary',{params}).then(res => res.data);


export default {
    getExamList,
    getQuestList,
    getAllstupaper,
    getSummary
};

