import request from "@/utils/request.js";

/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */
export function login(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/login",
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}
/**
 * 用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function users(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/user/list",
    method: "get",
    params: params //注意：如果是get请求请使用 params: params
  });
}
