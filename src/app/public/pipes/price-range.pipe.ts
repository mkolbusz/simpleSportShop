import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../common/models/product';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(items: Product[], range: number[]): Product[] {
    if (!items) {
      return [];
    }
    let min = range[0];
    const max = range[1];
    if (!min) {
      min = 0;
    }
    if (!max) {
      return items.filter(product => product.price >= min);
    }
    return items.filter(product => product.price >= min && product.price <= max);
  }

}
