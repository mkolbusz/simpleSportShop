import { AdminModule } from './admin/admin.module';
import { CartComponent } from './components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng4-validators';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsService } from './services/products.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { CartService } from './services/cart.service';
import { ClarityModule } from 'clarity-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { environment } from './../environments/environment';
import { routing } from './app.routers';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductListItemComponent,
    TruncatePipe,
    CategoriesComponent,
    FilterByCategoryPipe,
    CartWidgetComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    routing,
    ClarityModule.forRoot(),
    FormsModule,
    // AdminModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [ProductsService, CategoriesService, CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
