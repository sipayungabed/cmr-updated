import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';

@Component({
  selector: 'app-detail-radio-children-disabled',
  templateUrl: './detail-radio-children-disabled.component.html',
  styleUrls: ['./detail-radio-children-disabled.component.css']
})
export class DetailRadioChildrenDisabledComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() data : any;
  typeRadioChild;
  detailChildren;
  indented : string;
  colLabel : string;
  colValue : string;
  colChildren : string;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``  
    this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`
    this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-3`
    this.typeRadioChild = this.checkTypeRadioChild();
  }

  checkTypeRadioChild()
  {
    if(this.detail.children && this.detail.children[this.data[this.detail.jsonName].toString()] 
        && this.detail.children[this.data[this.detail.jsonName].toString()][0]
        && this.detail.children[this.data[this.detail.jsonName].toString()][0].type == 'input-text')
    {
        this.detailChildren = this.detail.children[this.data[this.detail.jsonName].toString()][0]
        this.colChildren = this.detail.colChildren ? `col-md-${this.detail.colChildren}`  : `col-md-4`;
        return 'input-text'; 
    }
    else if(this.detail.children && this.detail.children[this.data[this.detail.jsonName].toString()] 
    && this.detail.children[this.data[this.detail.jsonName].toString()][0]
    && this.detail.children[this.data[this.detail.jsonName].toString()][0].type == 'non-input-text')
    {
      this.detailChildren = this.detail.children[this.data[this.detail.jsonName].toString()][0]
      this.colChildren = this.detail.colChildren ? `col-md-${this.detail.colChildren}`  : `col-md-6`;
      return 'non-input-text';
    }
    else
    {
      return false;
    }
  }

}
