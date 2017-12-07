import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterService {

  private searchKey = new BehaviorSubject<string>('');
  public searchState = this.searchKey.asObservable();

  private priceMin = new BehaviorSubject<number>(0);
  private priceMax = new BehaviorSubject<number>(null);

  constructor() { }

  getSearchKey(): string {
    return this.searchKey.getValue();
  }

  setSearchValue(key: string) {
    this.searchKey.next(key);
  }

  setPriceRange(min: number, max: number) {
    const newMin = min == null ? this.priceMin.getValue() : min;
    const newMax = max == null ? this.priceMax.getValue() : max;

    this.priceMin.next(newMin);
    this.priceMax.next(newMax);
  }

  getPriceRange(): number[] {
    return [this.priceMin.getValue(), this.priceMax.getValue()];
  }

}
