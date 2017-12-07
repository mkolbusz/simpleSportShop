import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { NotificationsService } from 'angular2-notifications';
import { Http } from '@angular/http';
import { AuthHttp } from '../../common/helpers/custom-http';
import { Order } from '../../common/models/order';
import { CartProduct } from '../../common/models/cart-product';
import { Product } from '../../common/models/product';
import { Client } from '../../common/models/client';

@Injectable()
export class OrdersService {

  private orders = new BehaviorSubject<Order[]>([]);
  public ordersState = this.orders.asObservable();

  constructor(private http: AuthHttp, private notifyService: NotificationsService) {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get('/orders').map(response => response.json()).subscribe((orders) => {
      const createdOrders = orders.map(order => {
        const products = order.products.map(p => new CartProduct(Product.fromJsonObject(p.product), p.qty));
        const client = Client.fromJsonObject(order.client);
        return new Order(order._id, products, client, order.status);
      });
      this.orders.next(createdOrders);
    });
  }

  updateOrderStatus(order: Order) {
    this.http.put('/order/' + order.getId() + '/status', order).subscribe(
      res => {
        this.notifyService.info('Zamówienie', 'Zmieniono status zamówienia');
        this.orders.next(this.orders.getValue());
      }
    );
  }
}
