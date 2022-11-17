import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';


@Component({
  selector: 'app-detail-default',
  templateUrl: './detail-default.component.html',
  styleUrls: ['./detail-default.component.css']
})
export class DetailDefaultComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() data : any;
  indented : string;
  colLabel : string;
  colValue : string;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``  
    this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`
    this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-6`
  }


}
