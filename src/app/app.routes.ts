import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductComponent } from './pages/product.component';
import { ProductDetailComponent } from './pages/product-detail-component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent }, // ✅ Liste des produits
    { path: 'product/:id', component: ProductDetailComponent }, // ✅ Détails du produit
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent}
];
