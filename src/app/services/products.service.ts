import { AppSettings } from './../app-settings';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ProductsService {

  private products = new BehaviorSubject<Product[]>([]);
  public productsState = this.products.asObservable();

  constructor(private http: HttpClient, private notifyService: NotificationsService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<any[]>(AppSettings.DB_API_ENDPOINT + '/products').subscribe(products => {
      const productsCreated = Object.keys(products).map(key => {
        const p = products[key];
        return new Product(p._id, p.name, p.description, p.qty, p.price, p.image, p.category);
      });
      this.products.next(productsCreated);
    });
  }

  changeQty(product: Product, qty: number) {
    const p = this.products.getValue().find(_p => _p === product);
    p.qty += qty;
    this.products.next(this.products.getValue());
  }

  saveNewProduct(product: Product) {
    return this.http.put(AppSettings.DB_API_ENDPOINT + 'products/new', product);
  }

  applyPromotion(promotion) {
    promotion.products.map(product => {
      const pr = this.products.getValue().find(p => p._id === product._id);
      pr.price = pr.price - pr.price * (promotion.discount / 100.00);
    });
    this.products.next(this.products.getValue());
    this.notifyService.info('Promocja', 'Pojawiły się nowe promocje');
  }

  endPromotion(promotion) {
    promotion.products.map(product => {
      const pr = this.products.getValue().find(p => p._id === product._id);
      pr.price = product.price;
    });

    this.products.next(this.products.getValue());
    this.notifyService.info('Promocja', 'Promocja zakończyła się');
  }

}
