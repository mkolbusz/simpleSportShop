import { AppSettings } from './../app-settings';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(AppSettings.DB_API_ENDPOINT + '/products.json').map(res => {
      this.products = Object.keys(res).map(key => {
        const p = res[key];
        return new Product(p.id, p.name, p.description, p.qty, p.price, p.image, p.category);
      });
      return this.products;
    });
  }

  addProductQty(product: Product, qty: number) {
    const p = Array.from(this.products).find(_p => _p === product);
    p.qty += qty;
    p.qty = 0;
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
