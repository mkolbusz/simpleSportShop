import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Category } from '../models/category';

@Injectable()
export class CategoriesService {

  public categories = new BehaviorSubject<Category[]>([]);
  categoriesState = this.categories.asObservable();

  constructor(private productsService: ProductsService) {
    this.loadCategories();
   }

  loadCategories(): void {
    this.productsService.productsState.subscribe(products => {
      const categories = products.map(item => item.category)
        .filter((item, index, a) => item && a.indexOf(item) === index)
        .map(category => new Category(category, false));
      this.categories.next(categories);
    });
  }

  changeCategory(category: Category) {
    this.categories.getValue().find(c => c === category).toogleSelected();
    this.categories.next(this.categories.getValue());
  }

  getActiveCategories(): Category[] {
    return this.categories.getValue().filter(c => c.isSelected());
  }
}
