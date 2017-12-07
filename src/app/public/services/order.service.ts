import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Order } from '../../common/models/order';
import { AuthHttp } from '../../common/helpers/custom-http';
import { Client } from '../../common/models/client';
import { Http } from '@angular/http';

@Injectable()
export class OrderService {
  private orderSource = new BehaviorSubject<Order>(null);
  public orderState = this.orderSource.asObservable();

  order: Order;

  constructor(private http: Http, private notifyService: NotificationsService) {
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
