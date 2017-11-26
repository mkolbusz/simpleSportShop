import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  numberOfProducts: number;
  page: number;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {
    this.page = 1;
    this.numberOfProducts = 0;
    this.products = [];
  }

  ngOnInit() {
    this.productsService.productsState.subscribe(products => {
      this.products = products;
      this.numberOfProducts = this.products.reduce((prev, el) => {
        return prev + el.qty;
      }, 0);
    });
  }

  qtyChange(qty: number) {
    this.numberOfProducts -= qty;
  }

}
