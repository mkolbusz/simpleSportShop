import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { AppSettings } from '../../../app-settings';
import { CustomHttp } from '../../../helpers/custom-http';

@Component({
  selector: 'promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss']
})
export class PromotionModalComponent implements OnInit {

  @Input() products: Product[];
  isOpen: boolean;
  discount: number;
  time: number;


  constructor(private http: CustomHttp) {
    this.isOpen = false;
    this.discount = 0;
    this.time = 0;
  }

  ngOnInit() {
  }

  savePromotion() {
    const promotion = {
      products: this.products,
      time: this.time,
      discount: this.discount
    };

    this.http.put('/promotions/new', promotion).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
