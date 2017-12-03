import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order, OrderStatus } from '../../../models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.ordersService.ordersState.subscribe(orders => this.orders = orders);
  }

  cancelOrder(order: Order) {
    order.setStatus(OrderStatus.CANCELED);
    this.ordersService.updateOrderStatus(order);
  }

  confirmOrder(order: Order) {
    order.setStatus(OrderStatus.CONFIRMED);
    this.ordersService.updateOrderStatus(order);
  }

  getStatusText(status: OrderStatus): string {
    console.log(status);
    switch (status) {
      case OrderStatus.CANCELED: return 'Anulowane';
      case OrderStatus.WAITING_FOR_ACTIVATION: return 'Oczekujące';
      case OrderStatus.CONFIRMED: return 'Potwierdzone';
    }
  }

}
