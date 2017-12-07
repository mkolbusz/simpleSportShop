import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { ProductsListComponent } from './admin/components/products-list/products-list.component';
import { ProductDetailsComponent } from './public/components/product-details/product-details.component';
import { CartComponent } from './public/components/cart/cart.component';
import { CheckoutComponent } from './public/components/checkout/checkout.component';
import { LogoutComponent } from './common/components/logout/logout.component';


export const routes: Routes = [
    { path: '', component: ProductsListComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
