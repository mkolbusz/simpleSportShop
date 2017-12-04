import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Client } from './../models/client';
import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { CartService } from './cart.service';
import { NotificationsService } from 'angular2-notifications';
import { CustomHttp } from '../helpers/custom-http';

@Injectable()
export class OrderService {
  private orderSource = new BehaviorSubject<Order>(null);
  public orderState = this.orderSource.asObservable();

  order: Order;

  constructor(private http: CustomHttp, private notifyService: NotificationsService) {
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
    this.http.put('/order/new', this.order).subscribe(
      res => {
        this.notifyService.success('Zamówienie', 'Zamówienie złożone pomyślnie');
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
