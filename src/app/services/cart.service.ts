import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class CartService {

  private cartSource = new BehaviorSubject<Product>(null);
  public cartState = this.cartSource.asObservable();

  constructor() { }

  addToCart(product: Product) {
    this.cartSource.next(product);
  }

}
