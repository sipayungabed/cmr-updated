import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../model/details.model';

@Component({
  selector: 'app-details-dual-col-template',
  templateUrl: './details-dual-col-template.component.html',
  styleUrls: ['./details-dual-col-template.component.css']
})
export class DetailsDualColTemplateComponent implements OnInit {

  @Input() title : string;
  @Input() data : any;
  @Input() detailsListLeft : DetailContent[];
  @Input() detailsListRight : DetailContent[];
  @Input() index : number;
  constructor() { }

  ngOnInit(): void {

  }


}
