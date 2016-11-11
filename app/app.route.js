import angular from 'angular';

import LayoutRoute from './module/layout/layout.route';
import UserRoute from './module/user/user.route';

let AppRoute = angular.module('app.route', [
    LayoutRoute.name,
    UserRoute.name
])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
    });


export default AppRoute;

