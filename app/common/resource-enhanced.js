import angular from 'angular';
import ngResource from 'angular-resource'

let resourceEnhanced = angular.module('resource.enhanced', [
    ngResource
])

    .config(['$resourceProvider', ($resourceProvider) => {

        var actions = $resourceProvider.defaults.actions || {};
        // 添加 update， 部分修改
        actions.update = {
            method: 'PATCH'
        };

        actions.post = {
            method: 'POST',
            isArray: true
        };

        actions.upload = {
            method: 'POST',
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        };

        for(var key in actions) {
            if(actions.hasOwnProperty(key)) {
                actions[key].source = 'resource';
            }
        }

        $resourceProvider.defaults.actions = actions;

    }]);

export default resourceEnhanced;

