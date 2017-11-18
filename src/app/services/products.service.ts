import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app-settings';

@Injectable()
export class ProductsService {

  products = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(AppSettings.DB_API_ENDPOINT + '/products.json').map(res => {
      return res.map(p => new Product(p.id, p.name, p.description, p.qty, p.price, p.image, p.category));
    });
  }
}
