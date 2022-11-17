import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLoadingComponent } from './modal-loading.component';
import { ModalAlertComponent } from './modal-alert.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmationComponent } from './modal-confirmation.component';


@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {
  alert : any;
  loading : any;
  confirm : any;

  constructor(private modalService: NgbModal, 
              private Router : Router ) { }

  openLoading(content)
  {
    this.loading = this.modalService.open(ModalLoadingComponent, { size: 'sm', centered: true, backdrop: 'static', keyboard: false, windowClass:'transparant'});
    this.loading.componentInstance.content = content;
  }

  closeLoading()
  {
    this.loading.close();
  }

  openAlert(content, backUrl?)
  {              
    this.alert = this.modalService.open(ModalAlertComponent);
    this.alert.componentInstance.content = content;
    if(backUrl != null)
    {
      this.alert.result.then(() => { this.Router.navigate([backUrl])}, () => { this.Router.navigate([backUrl])} );
    }
    return 1;
  }

  closeAlert()
  {
    this.alert.close();
  }

  openConfirmation(content, backUrl?)
  {              
    this.confirm = this.modalService.open(ModalConfirmationComponent);
    this.confirm.componentInstance.content = content;
    if(backUrl != null)
    {
      this.confirm.result.then((result) => {result == "Ok" ?  this.Router.navigate([backUrl]) : null}, () => {});
    }
  }

  closeConfirmation()
  {
    this.confirm.close();
  }


}
