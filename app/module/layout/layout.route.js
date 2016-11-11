import angular from "angular";
import feTpl from "./fe.html";
import beTpl from "./be.html";


let LayoutRoute = angular.module('layout.route', [])

    .config(($stateProvider) => {
        $stateProvider
        // 前台(未登陆)展示页面
            .state('fe', {
                url: '/fe',
                template: feTpl
            })

            // 后台(登陆后)页面
            .state('be', {
                url: '/be',
                template: beTpl
            });
    });

export default LayoutRoute;

