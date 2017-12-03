import { ProductsService } from './../services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { routing } from './admin.routers';
import { ClarityModule } from 'clarity-angular';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminToolsComponent } from './components/admin-tools/admin-tools.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersService } from './services/orders.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ClarityModule.forRoot(),
    FormsModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ProductsListComponent, NewProductComponent, LoginComponent,
    EditProductComponent, AdminToolsComponent, OrdersListComponent],
  providers: [AuthService, AuthGuard, OrdersService]
})
export class AdminModule { }
