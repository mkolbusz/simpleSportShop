import { CartService } from './../../services/cart.service';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../common/models/order';

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
    this.order.setProducts(this.cartService.getProducts());
    this.orderService.setOrder(this.order);
    this.orderService.saveOrder();
  }

}
