import { AppSettings } from './../app-settings';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductsService {

  private productsSource = new BehaviorSubject<Product[]>([]);
  public productsState = this.productsSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<any[]>(AppSettings.DB_API_ENDPOINT + '/products.json').subscribe(products => {
      const productsCreated = Object.keys(products).map(key => {
        const p = products[key];
        return new Product(p.id, p.name, p.description, p.qty, p.price, p.image, p.category);
      });
      this.productsSource.next(productsCreated);
    });
  }

  changeQty(product: Product, qty: number) {
    const p = Array.from(this.productsSource.getValue()).find(_p => _p === product);
    p.qty += qty;
    this.productsSource.next(this.productsSource.getValue());
  }

  saveNewProduct(product: Product) {
    this.http.put(AppSettings.DB_API_ENDPOINT + 'products/' + product.id + '.json', product).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
