import angular from "angular";
import usersTpl from "./ctrl/users.html";
import usersCtrl from "./ctrl/users.ctrl";

import userDetailTpl from './ctrl/user-detail.html';
import userDetailCtrl from './ctrl/user-detail.ctrl';

let UserRoute = angular.module('user.route', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('users', {
                url: '^/users',
                parent: 'be',
                views: {
                    'main@be': {
                        template: usersTpl,
                        controller: usersCtrl,
                        controllerAs: 'UC'
                    }
                }
            })

            .state('users.detail', {
                url: '/:userId',
                views: {
                    'main@be': {
                        template: userDetailTpl,
                        controller: userDetailCtrl,
                        controllerAs: 'UDC'
                    }
                }
            })
    });


export default UserRoute;

