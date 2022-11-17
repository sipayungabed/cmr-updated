import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: '[app-header-bar]',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @Input() tableData;
  @Input() append;
  @Input() prepend;
  @Input() sort;
  @Output() sortEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
