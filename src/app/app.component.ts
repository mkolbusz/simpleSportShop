import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/services/auth.service';
import { Socket } from 'ng-socket-io';
import { ProductsService } from './services/products.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  notificationsOptions = {
    timeOut: 4000,
    position: ['top', 'right']
  };

  constructor(
    private authService: AuthService,
    private socket: Socket,
    private productsService: ProductsService,
  ) {
  }

  ngOnInit() {
    this.socket.on('new-promotion', (data) => {
      this.productsService.applyPromotion(data);
    });
    this.socket.on('end-promotion', (data) => {
      console.log(data);
    });
  }

  logout() {
    this.authService.logout();
  }
}
