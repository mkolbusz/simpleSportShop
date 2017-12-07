import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NotificationsService } from 'angular2-notifications';
import { CartProduct } from '../../common/models/cart-product';
import { Product } from '../../common/models/product';

@Injectable()
export class CartService {

  private cart = new BehaviorSubject<CartProduct[]>([]);
  public cartState = this.cart.asObservable();

  constructor(private productService: ProductsService, private notificationsService: NotificationsService) {
  }

  addToCart(product: Product, qty: number) {
    const existedProduct = this.cart.getValue().find(p => p.getProduct() === product);
    if (!existedProduct) {
      this.cart.getValue().push(new CartProduct(product, qty));
    }
    this.cart.next(this.cart.getValue());
    this.productService.changeQty(product, -qty);
  }

  getProducts(): CartProduct[] {
    return this.cart.getValue();
  }

  clearCart(): void {
    this.cart.getValue().map(cartProduct => this.productService.changeQty(cartProduct.product, cartProduct.qty));
    this.cart.next([]);
    this.notificationsService.info('Koszyk', 'Koszyk został wyczyszczony');
  }

  removeProduct(cartProduct: CartProduct) {
    const newCart = this.cart.getValue().filter((v) => v !== cartProduct);
    this.cart.next(newCart);
    this.productService.changeQty(cartProduct.product, cartProduct.qty);
  }

  changeQty(cartProduct: CartProduct, qty: number) {
    const product = this.cart.getValue().find(p => p === cartProduct);
    product.qty += qty;
    this.productService.changeQty(cartProduct.product, -qty);
    this.cart.next(this.cart.getValue());
  }

}
