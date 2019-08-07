import Axios from "axios";
import Conf from "./conf";
import jsCookie from 'js-cookie';
let axios = Axios.create({
    withCredentials: true //跨域
})

const herf = window ? window.location.href : '';
const METHOD = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put',
    OPTION: 'option'
}
const Error = {
    NETWORKERROR: 'newwOrk error'
}
const loginUrl = 'www.baidu.com';
//请求过滤器
function getCode(response) {
    if (response && response.data && response.data.code) {
        return response.data.code;
    } else {
        return 0
    }
}
axios.interceptors.request.use(function (request) {
    let method = request.method;
    let headers = request.headers;
    let timeout = request.timeout > 0 ? request.timeout : 30000;
    Object.assign(request, {
        timeout: timeout
    });
    if (method == METHOD.OPTION || method == METHOD.GET || method == METHOD.POST || method == METHOD.PUT || method == METHOD.METHOD['DELETE']) {
        let tk = jsCookie.get('ticket');
    }
    Object.assign(headers, {
        'ticket': tk ? tk : ''
    });
    Object.assign(headers, {
        'type': tk ? tk : ''
    });
    return request;
}, function (error) {
    return Promise.reject(error)
})
//返回过滤器
axios.interceptors.response.use(function (response) {
    if (getCode(response) == ERROR.LOGINERR0) {
        location.href = loginUrl
    }
    let result = response.data;
    return result;
}, function (error) {

})
export default axios;
export const get = axios.get.bind(axios);
export const post = axios.post.bind(axios);
export const options = axios.options.bind(axios);
export const request = axios.request.bind(axios);
// export const httpClientConf = Conf;