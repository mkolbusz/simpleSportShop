import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';



export const routes: Routes = [
    {
        path: 'admin',
        children: [
            { path: '', component: ProductsListComponent },
            { path: 'new-product', component: NewProductComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
