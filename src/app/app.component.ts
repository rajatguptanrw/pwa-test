import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa-test';
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.initialize();
  }
}
