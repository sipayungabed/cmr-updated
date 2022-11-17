import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() sidebarState : boolean;
  @Output() openSidebar  = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  clickSidebarButton() : void
  {
    this.openSidebar.emit(!this.sidebarState);
  }

}
