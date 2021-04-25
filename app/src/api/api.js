//将request.js整体导入
import request from "./request";
//import qs from 'qs'

//请求首页数据

//请求用户基本信息
export const getCountInfo = (params = {}) => request.get("/login/cellphone", params)