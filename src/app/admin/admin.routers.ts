import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';



export const routes: Routes = [
    {
        path: 'admin',
        // canActivate: [AuthGuard],
        children: [
            { path: 'products', component: ProductsListComponent },
            { path: 'new-product', component: NewProductComponent}
        ],
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
