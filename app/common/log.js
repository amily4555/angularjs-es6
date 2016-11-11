import angular from 'angular';

/**
 * 国际化配置
 */

let log = angular.module('log', [])

    .provider('$log', ['app', function(app) {

        this.log = function() {
            app.debug && console.log(...arguments);
        };

        this.error = function() {
            app.debug && console.error(...arguments);
        };

        this.$get = function() {
            return {
            }
        }

    }]);

export default log;