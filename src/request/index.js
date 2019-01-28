import http from './http';

//登录
const checkLogin = (params) => {
    return http.post('/htoa/qx/denglu',params).then(res=>{ return res.data});
};





export default {
    checkLogin
};

