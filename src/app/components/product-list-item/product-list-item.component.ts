import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {



  qty: number;
  @Input() product: Product;
  @Output() qtyChange = new EventEmitter<number>();

  isDescriptionVisible: boolean;

  constructor(private cartService: CartService, private notificationService: NotificationsService) {
    this.isDescriptionVisible = false;
    this.qty = 0;
  }

  ngOnInit() {
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }

  increaseQty() {
    if (this.product.qty > 0) {
      this.qty++;
      this.product.qty--;
      this.qtyChange.emit(1);
    }
  }

  decreaseQty() {
    if (this.qty > 0) {
      this.qty--;
      this.product.qty++;
      this.qtyChange.emit(-1);
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
    this.qty = 0;
    this.notificationService.success('Produkt został dodany do koszyka', '', {
      timeOut: 2000,
      showProgressBar: true,
      clickToClose: false
    });
  }
}
