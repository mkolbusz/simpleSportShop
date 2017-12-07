import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../common/models/product';
import { ProductsService } from '../../../public/services/products.service';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;


  constructor(private productService: ProductsService) {
    this.product = null;
  }

  ngOnInit() {
  }

}
