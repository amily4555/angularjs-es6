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
var global_1 = require('../common/global');
var resource_pool_1 = require('../common/resource-pool');
var batch_serv_1 = require('./batch.serv');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var batch_modal_cpt_1 = require('./batch-modal.cpt');
var now = new Date();
var BatchCpt = (function () {
    // endTime: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    // startTime: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth(), day: now.getDate()};
    function BatchCpt(G, modalService, batchServ, $$, alertConfig) {
        this.G = G;
        this.modalService = modalService;
        this.batchServ = batchServ;
        this.$$ = $$;
        this.alertConfig = alertConfig;
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
        alertConfig.type = 'success';
    }
    BatchCpt.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    BatchCpt.prototype.open = function () {
        this.modalService.open(batch_modal_cpt_1.NgbdModalContent);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BatchCpt.prototype, "alerts", void 0);
    BatchCpt = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-basic',
            templateUrl: 'views/batch/batch.html',
            providers: [batch_serv_1.BatchServ, ng_bootstrap_1.NgbAlertConfig]
        }), 
        __metadata('design:paramtypes', [global_1.GLOBAL, ng_bootstrap_1.NgbModal, batch_serv_1.BatchServ, resource_pool_1.$$ResourcePool, ng_bootstrap_1.NgbAlertConfig])
    ], BatchCpt);
    return BatchCpt;
}());
exports.BatchCpt = BatchCpt;
//# sourceMappingURL=batch.cpt.js.map