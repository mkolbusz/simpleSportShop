import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule} from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPropertyPipe } from './pipes/search-property.pipe';
import { PriceRangeComponent } from './components/price-range/price-range.component';
import { PriceRangePipe } from './pipes/price-range.pipe';
import { CommonModule } from '../common/common.module';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { CartService } from './services/cart.service';
import { FilterService } from './services/filter.service';
import { OrderService } from './services/order.service';
import { ClarityModule } from 'clarity-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import { routing } from './public.routers';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductListItemComponent,
    TruncatePipe,
    FilterByCategoryPipe,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    SearchPropertyPipe,
    PriceRangeComponent,
    PriceRangePipe
  ],
  imports: [
    AngularCommonModule,
    CommonModule,
    routing,
    ClarityModule.forRoot(),
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    NgxGalleryModule,
  ],
  providers: [
    ProductsService, CategoriesService, CartService, OrderService, FilterService
  ]
})
export class PublicModule { }
