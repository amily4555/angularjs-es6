import angular from 'angular';

/**
 * 全局常量|变量设置
 */

let constant = angular.module('constant', [
])

    // 全局常量
    .constant('C', {
        'VERSION': '0.0.1',
        'SESSION_TOKEN': 'X-ACCESS-TOKEN',
        'STORAGE_SESSION_TOKEN': 'X-ACCESS-TOKEN',
        'STORAGE_CURRENT': 'CURRENT',

        // 默认系统显示语言
        'LANG': 'zh-cn',
        // 当前系统设置的语言
        'STORAGE_LANG': 'STORAGE_LANG',
    })

    // 全局变量
    .constant('app', {
        // 是否开启全局调试
        debug: true
    })

    .run(['$injector', '$rootScope', 'app', '$state', function($injector, $rootScope, app, $state) {
        // 常用服务初始化
        app.$injector = $injector;
        $rootScope.$state = $state;

        console.debug( $state );
    }]);

export default constant;

