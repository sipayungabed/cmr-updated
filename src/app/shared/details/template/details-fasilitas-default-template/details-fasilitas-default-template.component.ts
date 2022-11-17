import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-fasilitas-default-template',
  templateUrl: './details-fasilitas-default-template.component.html',
  styleUrls: ['./details-fasilitas-default-template.component.css']
})
export class DetailsFasilitasDefaultTemplateComponent implements OnInit {
  @Input() data;
  @Input() category : string;
  constructor() { }

  ngOnInit(): void {
  }

}
