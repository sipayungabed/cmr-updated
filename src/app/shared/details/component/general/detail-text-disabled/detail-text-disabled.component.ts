import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';
@Component({
  selector: 'app-detail-text-disabled',
  templateUrl: './detail-text-disabled.component.html',
  styleUrls: ['./detail-text-disabled.component.css']
})
export class DetailTextDisabledComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() data : any;
  indented : string;
  colLabel : string;
  colValue : string;
  colChildren : string;
  jsonNameIsString;
  constructor() { }

  ngOnInit(): void {
    this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``  
    this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`
    if(typeof this.detail.jsonName === 'string' )
    {
      this.jsonNameIsString = true;
      this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-4`
    }
    else
    {
      this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-8`
      this.colChildren = this.detail.colChildren ? `col-${this.detail.colChildren}` : `col`
    }

  }

}
