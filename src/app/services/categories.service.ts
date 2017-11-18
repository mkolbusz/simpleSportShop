import { Injectable } from '@angular/core';
import {BIKES} from "../data/bikes";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CategoriesService {

  private categorySource = new BehaviorSubject<string>("");
  currentCategory = this.categorySource.asObservable();

  constructor() { }

  getCategories():string[] {
    return BIKES.map(item => item.category).filter((item, index, a) => item && a.indexOf(item) === index);
  }

  changeCategory(category:string) {   
    this.categorySource.next(category);
  }

}
