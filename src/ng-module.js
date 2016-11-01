"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_1 = require('./views/app/app');
var global_1 = require('./views/common/global');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var login_cpt_1 = require('./views/fe/login.cpt');
var auth_guide_1 = require('./views/common/auth-guide');
var header_1 = require('./views/layout/header');
var routes_1 = require('./views/common/routes');
var index_1 = require('./views/batch/index');
var name_pipe_1 = require('./views/common/pipe/name.pipe');
var resource_pool_1 = require('./views/common/resource-pool');
var resource_1 = require('./views/common/resource');
var http_interceptor_1 = require('./views/common/http-interceptor');
var index_2 = require('./views/common/directive/index');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var batch_modal_cpt_1 = require('./views/batch/batch-modal.cpt');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            /**
             * declarations 声明
             * 声明本模块拥有的视图类: component 组件, directive 指令, pipe 管道
             *
             * RC.4 以前需要在每一个 component 中声明 directive 和 pipe ,
             * RC.5 以后只要在根模块中全局声明
             */
            declarations: [
                header_1.Header,
                app_1.AppCpt,
                login_cpt_1.LoginCpt
            ].concat(index_1.$$CPT_BATCH, index_2.$$DIREC, [
                name_pipe_1.$$NamePipe,
                batch_modal_cpt_1.NgbdModalContent
            ]),
            entryComponents: [batch_modal_cpt_1.NgbdModalContent],
            /**
             * exports 是 declarations 的子集
             * 它可作用于其他模块中的组件模板
             *
             * 根模块不需要导出任何东西, 它只应用在特性模块中
             */
            // exports: [AppComponent],
            /**
             * imports 导出
             * 本模块组件中需要由其他模块导出的类
             */
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.$$ROUTES, { useHash: true })
            ],
            /**
             * providers 模块全局服务
             * 可以把部分服务加入到本模块的全局服务列表中
             */
            providers: [
                {
                    provide: http_1.Http,
                    useFactory: function (xhrBackend, requestOptions, router, G) {
                        return new http_interceptor_1.$$HttpInterceptor(xhrBackend, requestOptions, router, G);
                    },
                    deps: [
                        http_1.XHRBackend,
                        http_1.RequestOptions,
                        router_1.Router,
                        global_1.GLOBAL
                    ]
                },
                global_1.GLOBAL,
                auth_guide_1.AuthGuide,
                resource_1.$$Resource,
                resource_pool_1.$$ResourcePool
            ],
            /**
             * bootstrap 标明主视图 ( 根模块 )
             * 每一个应用只能有一个主视图, 即 只有根模块才能设置 bootstrap
             */
            bootstrap: [app_1.AppCpt]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// bootstrap(App, [
//
//     // 全局变量
//     GLOBAL,
//
//     // ROUTER_PROVIDERS,
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     RouterModule.forRoot(ROUTES, { useHash: true }),
//
//     // 使用 # hash
//     {
//         provide: LocationStrategy,
//         useClass: HashLocationStrategy
//     },
//
//     ConnectionBackend,
//
//     XHRBackend,
//
//     {
//         provide: Http,
//         useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, G: GLOBAL) => {
//             return new $$HttpInterceptor(xhrBackend, requestOptions, router, G);
//         },
//         deps: [
//             XHRBackend,
//             RequestOptions,
//             Router,
//             GLOBAL
//         ]
//     },
//
//     $$HttpInterceptor,
//
//     $$Resource,
//     $$ResourcePool,
//
//     {
//         provide: RequestOptions,
//         useClass: BaseRequestOptions
//     },
//     {
//         provide: ResponseOptions,
//         useClass: BaseResponseOptions
//     }
//
// ]).catch((error: Error) => console.error(error));
//# sourceMappingURL=ng-module.js.map