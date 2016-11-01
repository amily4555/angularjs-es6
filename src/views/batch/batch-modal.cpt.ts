import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Component} from '@angular/core';


@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Modal title</h4>
    </div>
    <div class="modal-body">
      <p>One fine body&hellip;</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
    constructor(public activeModal: NgbActiveModal) {
    }
}
