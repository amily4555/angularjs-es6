import angular from 'angular';
import mu from 'mzmu';
import delayering from 'response-data-delayering';

let httpInterceptors = angular.module('http.interceptors', [
])

    .config(['$httpProvider', 'C', 'app', '$logProvider', ($httpProvider, C, app, $logProvider) => {

        let sessionToken = mu.storage(C.STORAGE_SESSION_TOKEN) || '';

        console.debug($logProvider);

        $httpProvider.interceptors.push(($q) => {
            return {
                request: function(config) {

                    /**
                     * 处理AJAX额外参数配置请求,
                     * 以及参数预处理
                     *
                     * @额外参数定义规则 '__paramsName__'
                     *
                     * 自定义参数说明
                     *
                     * errorHandle: false 不执行错误提醒 || fn(status, response) 执行单独的错误提醒
                     * beforeErrorHandle: fn(status, response) 在默认错误提醒程序前执行
                     * afterErrorHandle: fn(status, response) 执行单独的错误提醒
                     * successHandle: false 不执行成功操作提醒 || fn(response) 执行单独的成功操作
                     */
                    config.extra = {};

                    mu.each(config.params, (v, k) => {
                        var reg = /__(.*)?__$/;
                        if(reg.test(k)) {
                            delete config.params[k];
                            k = (k + '').replace(reg, '$1');
                            config.extra[k] = v;
                        }
                    });

                    /**
                     * Request Header 设置
                     */
                    mu.run(()=> {
                        let headers = config.headers || {};
                        // 设置 session token
                        sessionToken && (headers[C.SESSION_TOKEN] = sessionToken);
                        config.headers = angular.extend(headers, config.extra.headers);
                    });

                    return config;
                },

                response: function(response) {
                    let rst = response.data,
                        config = response.config,
                        httpStatus = response.status;

                    /**
                     * 数据返回成功
                     */
                    if(mu.or(httpStatus, 200, 204)) {
                        let data = rst.data;

                        // 对resource的接口进行数据处理
                        if('resource' === config.source && mu.type(rst, 'object') && data) {
                            response.data = delayering(rst);
                        }

                        $logProvider.log(':::' + config.url + ':::\n', rst);

                        return response;
                    }

                    return $q.reject(response);

                },

                responseError: function(response) {
                    let config = response.config,
                        httpStatus = response.status;

                    $logProvider.error(':::error:::', config.method, httpStatus, '\n', config.url);

                    switch(httpStatus){
                        // auth
                        case 401:
                            break;
                        case 404:
                            break;

                        case 400:
                        case 403:
                        case 405:
                        case 422:
                            break;

                        case 500:
                            break;

                        case 502:
                            break;


                    }

                    return $q.reject(response);
                }
            };
        });

    }]);

export default httpInterceptors;

