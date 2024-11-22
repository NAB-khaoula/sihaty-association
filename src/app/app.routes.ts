import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import('@association/products').then((c) => c.ProductsComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('@association/orders').then((c) => c.OrdersComponent)
    },
];
