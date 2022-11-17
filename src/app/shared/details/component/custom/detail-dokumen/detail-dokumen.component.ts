import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detail-dokumen',
  templateUrl: './detail-dokumen.component.html',
  styleUrls: ['./detail-dokumen.component.css']
})
export class DetailDokumenComponent implements OnInit {
  @Input() index : number;
  @Input() data : any;
  RBAchecked : boolean ;
  @Output() imageEvent = new EventEmitter<any>();
  dokumenList : string[] = [];
  dokumenModifiedDate: any;
  constructor(private datePipe : DatePipe) {};

  ngOnInit(): void {
    this.checkDokumen();
  }

  checkDokumen()
  {
    if(this.data['type'] && this.data['type'].toString().match(','))
    {
      this.dokumenList = this.data['type'].toString().split('||')[0].split(',');
      this.dokumenList.pop();
    }
    else
    {
      this.dokumenList.push(this.data['type']);
    }
    this.RBAchecked = this.dokumenList.some((dokumen) => dokumen == "RBA");
    this.dokumenModifiedDate = this.datePipe.transform(this.data['modifiedDate'], 'EEEE dd-MMM-yyyy HH:mm:ss')
  } 

  emitEvent()
  {
    this.imageEvent.emit(this.index);
  }
}
