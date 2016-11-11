import angular from 'angular';
import ngResource from 'angular-resource'

/**
 * Resource Pool
 * 资源仓库
 */
let resourcesPool = angular.module('resources-pool', [
    ngResource
])

    .service('$R', ['$resource', ($resource) => {
        return {
            users: $resource('./store/users.json')
        }
    }]);

export default resourcesPool;