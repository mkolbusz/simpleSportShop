import { CartService } from './../../services/cart.service';
import { OrderService } from './../../services/order.service';
import { Client } from './../../models/client';
import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  order: Order;
  personalDataRules: boolean;
  shopRules: boolean;

  constructor(private orderService: OrderService, private cartService: CartService) {
    this.orderService.orderState.subscribe(order => {
      this.order = order;
    });
    this.personalDataRules = false;
    this.shopRules = false;
  }

  ngOnInit() {
  }

  processOrder() {
    this.order.products = this.cartService.getProducts();
    this.orderService.setOrder(this.order);
    this.orderService.saveOrder();
  }

}
