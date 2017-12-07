import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss']
})
export class PriceRangeComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  minPrice(event: any) {
    const value = event.target.value ? event.target.value : 0;
    this.filterService.setPriceRange(parseFloat(event.target.value), null);
  }

  maxPrice(event: any) {
    const value = event.target.value ? event.target.value : 0;
    this.filterService.setPriceRange(null, parseFloat(value));
  }

}
