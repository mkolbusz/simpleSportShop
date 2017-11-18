import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductsService } from './services/products.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductListItemComponent,
    TruncatePipe,
    CategoriesComponent,
    FilterByCategoryPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ProductsService, CategoriesService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
