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
var resource_1 = require('./resource');
var core_1 = require('@angular/core');
var $$ResourcePool = (function () {
    function $$ResourcePool(R) {
        this.R = R;
        /**
         * 代理渠道 Agency
         */
        // 代理
        this.agencies = this.R.$$('/services/boss/agency/{agencyId}');
        // 代理 -> 状态
        this.agencies_activeness = this.R.$$('/services/boss/agency/{agencyId}/activeness');
        // 代理下的会员
        this.agencies_members = this.R.$$('/services/boss/agency/{agencyId}/admin');
        /**
         * 租户 Tenant
         * @type {any}
         */
        this.tenants = this.R.$$('/services/boss/tenant/{tenantId}');
        // 租户下的用户
        this.tenants_users = this.R.$$('/services/boss/tenant/{tenantId}/user/{userId}');
        this.tenants_users_activeness = this.R.$$('/services/boss/tenant/{tenantId}/user/{userId}/activeness');
        // 租户下的活动
        this.tenants_activities = this.R.$$('/services/boss/tenant/{tenantId}/activity/{activityId}');
        // 租户下的会员状态
        this.tenants_activeness = this.R.$$('/services/boss/tenant/{tenantId}/activeness');
        /**
         * User
         */
        // User状态
        this.users_activeness = this.R.$$('/services/boss/user/{userId}/activeness');
        /**
         * 管理员 Admin
         */
        // 管理员列表
        this.admins = this.R.$$('/services/boss/admin/{adminId}');
        // 代理下的会员状态
        this.admins_activeness = this.R.$$('/services/boss/admin/{adminId}/activeness');
        // 当前用户信息
        this.current = this.R.$$('/services/boss/admin/current');
        // 登录
        this.login = this.R.$$('/services/admin/login');
    }
    $$ResourcePool = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [resource_1.$$Resource])
    ], $$ResourcePool);
    return $$ResourcePool;
}());
exports.$$ResourcePool = $$ResourcePool;
//# sourceMappingURL=resource-pool.js.map