import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  notificationsOptions = {
    timeOut: 4000,
    position: ['top', 'right']
  };

  constructor() {
  }
}
