import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductComponent } from './pages/product.component';
import { AboutComponent } from './pages/about.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'about', component: AboutComponent },
];
