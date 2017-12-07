import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Order } from '../../common/models/order';
import { AuthHttp } from '../../common/helpers/custom-http';
import { Client } from '../../common/models/client';

@Injectable()
export class OrderService {
  private orderSource = new BehaviorSubject<Order>(null);
  public orderState = this.orderSource.asObservable();

  order: Order;

  constructor(private http: AuthHttp) {
    this.order = new Order(null, [], new Client('', '', '', '', '', '', ''));
    this.orderSource.next(this.order);
  }

  setOrder(order: Order) {
    this.order = order;
    this.orderSource.next(this.order);
  }

  clearOrder() {
    this.order = new Order(null, [], new Client('', '', '', '', '', '', ''));
    this.orderSource.next(this.order);
  }

  saveOrder() {
    return this.http.put('/order/new', this.order);
  }

}
