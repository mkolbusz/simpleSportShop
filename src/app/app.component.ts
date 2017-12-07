import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/services/auth.service';
import { Socket } from 'ng-socket-io';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { ProductsService } from './public/services/products.service';
import { FilterService } from './public/services/filter.service';

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
    // private authService: AuthService,
    private socket: Socket,
    private productsService: ProductsService,
    private searchService: FilterService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.socket.on('new-promotion', (data) => {
      this.productsService.applyPromotion(data);
    });
    this.socket.on('end-promotion', (data) => {
      this.productsService.endPromotion(data);
    });
    this.socket.on('new-order', (data) => {
      this.productsService.refreshProducts();
    });
    this.socket.on('new-product', (product) => {
      this.productsService.refreshProducts();
    });
    this.socket.on('remove-product', (product) => {
      this.productsService.removeProduct(product);
    });
  }

  search(event: any) {
    this.searchService.setSearchValue(event.target.value);
  }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
}
