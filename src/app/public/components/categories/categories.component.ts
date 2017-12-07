import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../../common/models/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.categoriesState.subscribe(categories => this.categories = categories);
  }

  filterByCategory(category: Category): void {
    this.categoriesService.changeCategory(category);
  }

}
