import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  currentCategory: string;
  categories: string[];

  constructor(private categoriesService: CategoriesService) {
    categoriesService.getCategories().subscribe(categories => this.categories = categories);
    this.currentCategory = null;
  }

  ngOnInit() {
    this.categoriesService.currentCategory.subscribe(category => this.currentCategory = category);
  }

  filterByCategory(category: string): void {
    this.categoriesService.changeCategory(category);
  }

}
