import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-body text-primary" >
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status" style="width:50px; height:50px;">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    <div class="modal-body text-secondary">
        <div class="d-flex justify-content-center">
            <strong>{{content}}</strong>
        </div>
    </div>

  `
})
export class ModalLoadingComponent {
  @Input() content : string;
  constructor(public activeModal: NgbActiveModal) {}
}
