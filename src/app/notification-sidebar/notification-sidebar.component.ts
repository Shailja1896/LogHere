import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.css']
})
export class NotificationSidebarComponent implements OnInit {

  constructor() { }

  @Output() closeSidebar: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  closeNotificationSidebar() {
    this.closeSidebar.emit(true);
  }

}
