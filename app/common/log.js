import angular from 'angular';

/**
 * 国际化配置
 */

let log = angular.module('log', [])

    .provider('$$log', ['app', 'C', function(app, C) {

        this.log = function() {
            C.DEBUG && console.log && console.log.apply && console.log(...arguments);
        };

        this.error = function() {
            C.DEBUG && console.error && console.error.apply && console.error(...arguments);
        };

        this.$get = () => {
            return {
                log: this.log,
                error: this.error
            }
        }

    }]);

export default log;