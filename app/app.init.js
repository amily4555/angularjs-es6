import angular from 'angular';
import AppModule from './app.module';

/**
 * NgInit
 */
var appInit = () => {
    let $q = angular.injector(['ng']).get('$q');

    // 预加载处理数据
    return $q.all([]);
};

appInit()
    .then((promises) => {
        angular.element(document)
            .ready(function() {
                angular.bootstrap(document, [
                    AppModule.name
                ]);
            });
    });

