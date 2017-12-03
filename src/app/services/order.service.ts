import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Client } from './../models/client';
import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app-settings';
import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  private orderSource = new BehaviorSubject<Order>(null);
  public orderState = this.orderSource.asObservable();

  order: Order;

  constructor(private http: HttpClient) {
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
    this.http.put(AppSettings.DB_API_ENDPOINT + '/order/new', this.order).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
