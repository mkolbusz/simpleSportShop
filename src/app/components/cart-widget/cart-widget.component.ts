import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../models/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {

  products: CartProduct[];

  constructor(private cartService: CartService) {
    this.products = [];
  }

  ngOnInit() {
    this.cartService.cartState.subscribe((products: CartProduct[]) => {
      this.products = products;
    });
  }

  getTotalPrice(): number {
    return this.products.reduce((prev, current, i, a) => prev + current.getTotalPrice(), 0);
  }

  getTotalNumber(): number {
    return this.products.length;
  }

  getLastProduct(): CartProduct {
      return this.products[this.products.length - 1];
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
