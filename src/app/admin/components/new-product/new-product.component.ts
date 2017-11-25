import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: Product;
  pathToFiles = [];

  constructor(private productsService: ProductsService) {
    this.product = new Product(null, '', '', 0, 0, '', '');
  }

  ngOnInit() {
    this.product.id = uuid();
    this.pathToFiles.push('/assets/images/products/' + this.product.id  + '/');
  }

  saveProduct() {
    this.productsService.saveNewProduct(this.product);
  }

}
