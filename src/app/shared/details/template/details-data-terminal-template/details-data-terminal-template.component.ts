import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../model/details.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-details-data-terminal-template',
  templateUrl: './details-data-terminal-template.component.html',
  styleUrls: ['./details-data-terminal-template.component.css']
})
export class DetailsDataTerminalTemplateComponent implements OnInit {

  @Input() dataOutlet : any;


  detailQrScannerCount : DetailContent =
  {
    jsonName : 'qrScannerCount',
    type     : 'default',
    label    : 'QRIS READER',
    inputConfig :
    {
      inputType : 'text-disabled',
      prepend : {qrScannerCount: 'Jumlah'}
    }
  }

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  dataModal
  fasilitasOutletDevices;
  openModal(content, data)
  {
    this.fasilitasOutletDevices = this.modalService.open(content, {size : 'lg'});
    this.dataModal = data;
  }


  closeModal()
  {
    this.fasilitasOutletDevices.close();
  }

}
