import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items: Product[], categories: Category[]): Product[] {
    if (!categories || categories.length === 0) {
      return items;
    }
    const activeCategories = categories.filter(c => c.isSelected);
    return items.filter(product => activeCategories.find(c => product.category === c.getName()));
  }

}
