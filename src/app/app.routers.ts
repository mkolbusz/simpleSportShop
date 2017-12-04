import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


export const routes: Routes = [
    { path: '', component: ProductsListComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
