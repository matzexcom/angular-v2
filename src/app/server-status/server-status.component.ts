import { Component, OnDestroy, OnInit } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = 'online';
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.floor(Math.random() * 3);
      switch (rnd) {
        case 0:
          this.currentStatus = 'online';
          break;
        case 1:
          this.currentStatus = 'offline';
          break;
        case 2:
          this.currentStatus = 'unknown';
          break;
        default:
          this.currentStatus = 'online';
      }
    }, 1500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
