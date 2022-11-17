import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';


@Component({
  selector: 'app-detail-multi-json-label',
  templateUrl: './detail-multi-json-label.component.html',
  styleUrls: ['./detail-multi-json-label.component.css']
})
export class DetailMultiJsonLabelComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() data : any;
  indented : string;
  colLabel : string;
  classCol : string;
  constructor() { }

  ngOnInit(): void {
    var col = Math.floor(9/this.detail.jsonName.length) != 0 ? Math.floor(9/this.detail.jsonName.length) : 1;
    this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`
    this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``  
    this.classCol = `col-md-${col}`
  }

}
