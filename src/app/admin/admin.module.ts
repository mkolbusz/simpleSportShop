import { ProductsService } from './../services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { routing } from './admin.routers';
import { ClarityModule } from 'clarity-angular';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ClarityModule.forRoot(),
    FormsModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ProductsListComponent, NewProductComponent]
})
export class AdminModule { }
