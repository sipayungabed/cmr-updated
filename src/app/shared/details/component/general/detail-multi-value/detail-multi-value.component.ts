import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detail-multi-value',
  templateUrl: './detail-multi-value.component.html',
  styleUrls: ['./detail-multi-value.component.css']
})
export class DetailMultiValueComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() dataList : any;
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
