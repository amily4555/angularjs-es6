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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_1.Header,
                app_1.AppCpt,
                login_cpt_1.LoginCpt
            ].concat(index_1.$$CPT_BATCH, index_2.$$DIREC, [
                name_pipe_1.$$NamePipe
            ]),
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.$$ROUTES, { useHash: true })
            ],
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
            bootstrap: [app_1.AppCpt]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=ng-module.js.map