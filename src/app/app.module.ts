import { AdminModule } from './admin/admin.module';
import { CartComponent } from './components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng4-validators';
import { NgxGalleryModule } from 'ngx-gallery';

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
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { environment } from './../environments/environment';
import { routing } from './app.routers';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderService } from './services/order.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchPropertyPipe } from './pipes/search-property.pipe';
import { FilterService } from './services/filter.service';
import { PriceRangeComponent } from './components/price-range/price-range.component';
import { PriceRangePipe } from './pipes/price-range.pipe';
import { AppSettings } from './app-settings';
import { customHttpProvider } from './helpers/custom-http';


const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1067732667127-mnv03s04gq8ld62hh18uu6ve5h6q5bo0.apps.googleusercontent.com')
  }
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('Facebook-App-Id')
  // },
  // {
  //   id: LinkedinLoginProvider.PROVIDER_ID,
  //   provider: new LinkedinLoginProvider('LINKEDIN_CLIENT_ID')
  // }
]);

const socketConfig: SocketIoConfig = { url: AppSettings.API_URL, options: {} };

export function provideConfig() {
  return CONFIG;
}


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
    CheckoutComponent,
    ProductDetailsComponent,
    SearchPropertyPipe,
    PriceRangeComponent,
    PriceRangePipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    routing,
    ClarityModule.forRoot(),
    FormsModule,
    AdminModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    SimpleNotificationsModule.forRoot(),
    SocialLoginModule,
    SocketIoModule.forRoot(socketConfig),
    NgxGalleryModule
  ],
  providers: [
    ProductsService, CategoriesService, CartService, OrderService, FilterService, customHttpProvider,
    { provide: AuthServiceConfig, useFactory: provideConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

