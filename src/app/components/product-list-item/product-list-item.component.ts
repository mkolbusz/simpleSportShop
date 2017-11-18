import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() qtyChange = new EventEmitter<number>();

  isDescriptionVisible: boolean;

  constructor(private cartService: CartService) {
    this.isDescriptionVisible = false;
   }

  ngOnInit() {
    console.log(typeof this.product);
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }

  increaseQty() {
    if (this.product.qtyAvailable > 0) {
      this.product.qty++;
      this.product.qtyAvailable--;
      this.qtyChange.emit(1);
    }
  }

  decreaseQty() {
    if (this.product.qty > 0) {
      this.product.qty--;
      this.product.qtyAvailable++;
      this.qtyChange.emit(-1);
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    if (this.product.qtyAvailable === 0) {
      this.product.isSoldOut = true;
    }
    this.product.qty = 0;
  }

}
