import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Socket } from 'ng-socket-io';
import { FilterService } from '../../services/filter.service';
import { Product } from '../../../common/models/product';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  numberOfProducts: number;
  page: number;

  constructor(
    private productsService: ProductsService,
    public categoriesService: CategoriesService,
    private socket: Socket,
    public filterService: FilterService
  ) {
    this.page = 1;
    this.numberOfProducts = 0;
    this.products = [];
  }

  ngOnInit() {
    this.productsService.productsState.subscribe(products => {
      this.products = products;
      this.numberOfProducts = this.products.length;
    });
  }

  qtyChange(qty: number) {
    this.numberOfProducts -= qty;
  }

}

