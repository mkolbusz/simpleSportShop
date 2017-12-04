import { AppSettings } from './../app-settings';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NotificationsService } from 'angular2-notifications';
import { CustomHttp } from '../helpers/custom-http';

@Injectable()
export class ProductsService {

  private products = new BehaviorSubject<Product[]>([]);
  public productsState = this.products.asObservable();

  constructor(private http: CustomHttp, private notifyService: NotificationsService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get('/products').map(response => response.json()).subscribe(products => {
      console.log(products);
      const productsCreated = Object.keys(products).map(key => {
        const p = products[key];
        return new Product(p._id, p.name, p.description, p.qty, p.price, p.images, p.category);
      });
      this.products.next(productsCreated);
    });
  }

  getProductById(id: string) {
    return this.products.getValue().find(p => p.id === id);
  }

  changeQty(product: Product, qty: number) {
    const p = this.products.getValue().find(_p => _p === product);
    p.qty += qty;
    this.products.next(this.products.getValue());
  }

  saveNewProduct(product: Product) {
    return this.http.put('/products/new', product);
  }

  removeUploadedPhoto(image) {
    return this.http.delete('/products/image/' + image);
  }

  applyPromotion(promotion) {
    promotion.products.map(product => {
      const pr = this.products.getValue().find(p => p.id === product.id);
      pr.price = pr.price - pr.price * (promotion.discount / 100.00);
      pr.isPromoted = true;
    });
    this.products.next(this.products.getValue());
    this.notifyService.info('Promocja', 'Pojawiły się nowe promocje');
  }

  endPromotion(promotion) {
    promotion.products.map(product => {
      const pr = this.products.getValue().find(p => p.id === product.id);
      pr.price = product.price;
      pr.isPromoted = false;
    });

    this.products.next(this.products.getValue());
    this.notifyService.info('Promocja', 'Promocja zakończyła się');
  }

  refreshProducts() {
    this.loadProducts();
  }

  removeProduct(id: string) {
    this.products.next(this.products.getValue().filter(p => p.id !== id));
  }

  remove(product: Product) {
    this.http.delete('/products/' + product.getId()).subscribe(
      res => {
        this.notifyService.info('Produkt', 'Pomyślnie usunięto produkt');
      },
      err => {
        this.notifyService.error('Produkt', 'Błąd podczas usuwania produktu');
      }
    );
  }
}
