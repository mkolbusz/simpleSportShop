import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'searchProperty'
})
export class SearchPropertyPipe implements PipeTransform {

  transform(items: Product[], property: string, value: string): Product[] {
    if (!items) {
      return [];
    }
    if (!value || !property) {
      return items;
    }
    return items.filter(item => String(item[property]).toLowerCase().includes(String(value).toLowerCase()));
  }

}
