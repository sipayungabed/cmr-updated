import { Component, OnInit, Input } from '@angular/core';
import { TableMdrDetails } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-table-mdr',
  templateUrl: './detail-table-mdr.component.html',
  styleUrls: ['./detail-table-mdr.component.css']
})
export class DetailTableMdrComponent implements OnInit {
  @Input() title   : string;
  @Input() dataList : any;
  @Input() tableMdr : TableMdrDetails[];
  @Input() key : {
    mdr : string,
    name: string,
    flag : string,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
