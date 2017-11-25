import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CategoriesService {

  private categorySource = new BehaviorSubject<string>('');
  currentCategory = this.categorySource.asObservable();

  constructor(private productsService: ProductsService) { }

  getCategories(): Observable<string[]> {
    return this.productsService.getProducts().map(res => {
      return res.map(item => item.category).filter((item, index, a) => item && a.indexOf(item) === index);
    });
  }

  changeCategory(category: string) {
    this.categorySource.next(category);
  }
}
