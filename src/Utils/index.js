import axios from 'axios'
import {setTrue} from "./GlobalVariableConfig";

const $http = axios.create({
    baseURL: '',
    timeout: 5000
});

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (localStorage.getItem('Authorization')) {
        config.headers['Authorization'] = localStorage.getItem('Authorization')
        setTrue()
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response
    return data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default $http
