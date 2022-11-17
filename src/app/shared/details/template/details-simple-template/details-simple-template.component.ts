import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailContent } from '../../model/details.model';

@Component({
  selector: 'app-details-simple-template',
  templateUrl: './details-simple-template.component.html',
  styleUrls: ['./details-simple-template.component.css']
})
export class DetailsSimpleTemplateComponent implements OnInit 
{
  @Input() title : string;
  @Input() data : any;
  @Input() detailsList : DetailContent[];
  @Input() closeButton : boolean;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

}
