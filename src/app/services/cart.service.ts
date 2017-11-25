import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../models/product';
import { CartProduct } from '../models/cart-product';

@Injectable()
export class CartService {

  private cartSource = new BehaviorSubject<CartProduct[]>(null);
  public cartState = this.cartSource.asObservable();

  private products: CartProduct[];

  constructor(private productService: ProductsService) {
    this.products = [];
    this.cartSource.next(this.products);
  }

  addToCart(product: Product, qty: number) {
    const existedProduct = this.products.find(p => p.getProduct() === product);
    if (!existedProduct) {
      this.products.push(new CartProduct(product, qty));
      return;
    } else {
      existedProduct.qty += product.qty;
    }

    this.cartSource.next(this.products);
  }

  getProducts(): CartProduct[] {
    return this.products;
  }

  clearCart(): void {
    this.products = [];
    this.cartSource.next(this.products);
  }

  removeProduct(cartProduct: CartProduct) {
    this.products = this.products.filter((v) => v !== cartProduct);
    this.cartSource.next(this.products);
    this.productService.addProductQty(cartProduct.product, cartProduct.qty);
  }


}
