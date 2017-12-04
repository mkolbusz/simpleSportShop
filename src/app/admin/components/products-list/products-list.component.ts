import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  editedProduct: Product;
  selectedProducts: Product[];

  constructor(private productService: ProductsService) {
    this.editedProduct = null;
    this.selectedProducts = [];
   }

  ngOnInit() {
    this.productService.productsState.subscribe(products => {
      this.products = products;
    });
  }

  editProduct(product: Product) {
    this.editedProduct = product;
  }

  removeProduct(product: Product) {
    this.productService.remove(product);
  }

}
