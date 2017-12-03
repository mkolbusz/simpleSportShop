import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminToolsComponent } from './components/admin-tools/admin-tools.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';



export const routes: Routes = [
    {
        path: 'admin',
        component: AdminToolsComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'products', component: ProductsListComponent },
            { path: 'new-product', component: NewProductComponent},
            { path: 'orders', component: OrdersListComponent}
        ],
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
