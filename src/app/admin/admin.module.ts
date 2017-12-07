import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
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
import { PromotionModalComponent } from './components/promotion-modal/promotion-modal.component';
import { CommonModule } from '../common/common.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'ng4-social-login';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1067732667127-mnv03s04gq8ld62hh18uu6ve5h6q5bo0.apps.googleusercontent.com')
  },
]);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  imports: [
    AngularCommonModule,
    CommonModule,
    routing,
    ClarityModule.forRoot(),
    FormsModule,
    ImageUploadModule.forRoot(),
    SocialLoginModule
  ],
  declarations: [ProductsListComponent, NewProductComponent, LoginComponent,
    EditProductComponent, AdminToolsComponent, OrdersListComponent, PromotionModalComponent],
  providers: [
    AuthService, AuthGuard, OrdersService, { provide: AuthServiceConfig, useFactory: provideConfig }
  ]
})
export class AdminModule { }
