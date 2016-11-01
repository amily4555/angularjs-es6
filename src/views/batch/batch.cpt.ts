import {Component, Input} from '@angular/core';
import {GLOBAL} from '../common/global';
import {$$ResourcePool} from '../common/resource-pool';
import {BatchServ} from './batch.serv';
import {NgbModal, NgbAlertConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


import {NgbdModalContent} from './batch-modal.cpt';

const now = new Date();

@Component({
    selector: 'ngbd-modal-basic',
    templateUrl: 'views/batch/batch.html',
    providers: [BatchServ, NgbAlertConfig]
})

export class BatchCpt {
    @Input()
    public alerts: Array<Object> = [];
    // endTime: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    // startTime: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth(), day: now.getDate()};

    constructor(private G: GLOBAL,
                private modalService: NgbModal,
                private batchServ: BatchServ,
                private $$: $$ResourcePool,
                private alertConfig: NgbAlertConfig
    ) {

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

    public closeAlert(alert: Object) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    open(): void {
        this.modalService.open(NgbdModalContent);
    }


}
