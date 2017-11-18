import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items: Product[], category: string): Product[] {
    if (!category || category === '') {
      return items;
    }

    return items.filter(product => product.category === category);
  }

}
