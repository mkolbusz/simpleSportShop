import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../common/models/product';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  qty: number;
  @Input() product: Product;
  @Output() qtyChange = new EventEmitter<number>();
  @Output() openDetailsModal = new EventEmitter<Product>();

  isDescriptionVisible: boolean;

  constructor(private cartService: CartService) {
    this.isDescriptionVisible = false;
    this.qty = 0;
  }

  ngOnInit() {
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }

  increaseQty() {
    if (this.qty < this.product.qty) {
      this.qty++;
    }
  }

  decreaseQty() {
    if (this.qty > 0) {
      this.qty--;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
    this.qtyChange.emit(this.qty);
    this.qty = 0;
  }
}
