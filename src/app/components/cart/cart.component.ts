import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartProduct } from '../../models/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: CartProduct[];

  constructor(private cartService: CartService) {
    this.products = [];
  }

  ngOnInit() {
    this.cartService.cartState.subscribe((product:Product) => {
      if (product) {
        this.addToCart(product);
      }
    });
  }

  addToCart(newProduct: Product) {
    const product = this.products.find(p => p.getProduct().getId() === newProduct.getId());
    if (!product) {
      this.products.push(new CartProduct(newProduct, newProduct.qty));
      return;
    }
    product.qty += newProduct.qty;
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

}
