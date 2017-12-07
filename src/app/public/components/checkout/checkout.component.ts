import { CartService } from './../../services/cart.service';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../common/models/order';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  order: Order;
  personalDataRules: boolean;
  shopRules: boolean;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private notifyService: NotificationsService,
    private router: Router
  ) {
    this.orderService.orderState.subscribe(order => {
      this.order = order;
    });
    this.personalDataRules = false;
    this.shopRules = false;
  }

  ngOnInit() {
  }

  processOrder() {
    this.order.setProducts(this.cartService.getProducts());
    this.orderService.setOrder(this.order);
    this.orderService.saveOrder().subscribe(
      res => {
        this.notifyService.success('Zamówienie', 'Zamówienie złożone pomyślnie');
        this.router.navigate(['']);
      },
      err => {
        this.notifyService.error('Zamówienie', 'Wystąpił błąd podczas składania zamówienia');
      }
    );
  }

}
