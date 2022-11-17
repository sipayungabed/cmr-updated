import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `


    <div class="modal-header text-center">
    <h5 class="modal-title " id="modal-basic-title">Alert</h5>
        <button type="button" class="close btn btn-danger" aria-label="Close"  (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
        {{content}}
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Ok</button>
    </div>
  `
})
export class ModalAlertComponent {
  @Input() content;
  constructor(public activeModal: NgbActiveModal) {}
}
