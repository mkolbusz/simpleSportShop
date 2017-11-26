import { CartService } from './../../services/cart.service';
import { CartProduct } from './../../models/cart-product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: CartProduct[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartState.subscribe(products => this.products = products);
  }

  getTotal(): any {
    return this.products.reduce((prev, current) => prev + current.getTotalPrice(), 0);
  }

  isEmpty(): boolean {
    return this.products.length === 0;
  }

  removeProduct(cartProduct: CartProduct) {
    this.cartService.removeProduct(cartProduct);
  }

  changeQty(cartProduct: CartProduct, qty: number): void {
    this.cartService.changeQty(cartProduct, qty);
  }

}
