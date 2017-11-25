import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', component: ProductsListComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
