import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngLoadingBar from 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'simple-line-icons/scss/simple-line-icons.scss';

import httpInterceptors from './common/http-interceptors';
import resourceEnhanced from './common/resource-enhanced';
import resourcesPool from './common/resource-pool';
import i18n from './common/i18n';
import log from './common/log';
import constant from  './common/constant';

import AppRoute from './app.route';
import AppCmp from './app.cmp';

import LayoutModule from './module/layout/layout.module';
import UserModule from './module/user/user.module';

/**
 * ngModule
 * module map
 */
angular.module('app', [
    uiRouter,
    ngLoadingBar,

    //--:::common:::---
    constant.name,
    log.name,
    httpInterceptors.name,
    resourceEnhanced.name,
    resourcesPool.name,
    i18n.name,

    AppRoute.name,

    //--:::module:::---
    LayoutModule.name,
    UserModule.name
])
    .component('appCmp', AppCmp);

