import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  qty: number;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService) {
    this.qty = 0;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.productsService.getProductById(params['id']);
      this.galleryOptions = [
        {
            width: '100%',
            height: '600px',
            imagePercent: 100,
            imageSize: NgxGalleryImageSize.Contain,
            thumbnailSize: NgxGalleryImageSize.Contain,
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 100,
        },
        {
            breakpoint: 400,
            preview: false
        }
      ];
      this.galleryImages = this.product.images.map(image => {
        const images = {
          small: this.product.getImageUrl(image),
          medium: this.product.getImageUrl(image),
          big: this.product.getImageUrl(image)
        };
        return images;
      });
    });
  }


  increaseQty() {
    if (this.qty < this.product.qty) {
      this.qty++;
    }
  }

  decreaseQty() {
    if (this.qty > 0) {
      this.qty--;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
    this.qty = 0;
  }
}
