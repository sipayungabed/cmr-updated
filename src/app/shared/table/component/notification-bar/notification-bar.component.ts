import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-notification-bar]',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  @Input() length;
  @Input() class;
  @Input() content;
  constructor() { }

  ngOnInit(): void {
  }

}
