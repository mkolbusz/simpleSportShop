import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Order } from '../../models/order';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app-settings';
import { CartProduct } from '../../models/cart-product';
import { Product } from '../../models/product';
import { Client } from '../../models/client';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class OrdersService {

  private orders = new BehaviorSubject<Order[]>([]);
  public ordersState = this.orders.asObservable();

  constructor(private http: HttpClient, private notifyService: NotificationsService) {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get(AppSettings.DB_API_ENDPOINT + '/orders').subscribe((orders: any[]) => {
      const createdOrders = orders.map(order => {
        const products = order.products.map(p => new CartProduct(Product.fromJsonObject(p.product), p.qty));
        const client = Client.fromJsonObject(order.client);
        return new Order(order._id, products, client, order.status);
      });
      this.orders.next(createdOrders);
    });
  }

  updateOrderStatus(order: Order) {
    this.http.put(AppSettings.DB_API_ENDPOINT + '/order/' + order.getId() + '/status', order).subscribe(
      res => {
        this.notifyService.info('Produkt', 'Zmieniono status produktu');
      }
    )
  }
}
