import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: Product[] = [
        { id: 1, name: 'Astérix', price: 29.99 },
        { id: 2, name: 'Obelix', price: 24.99 },
];

    getProducts() {
    return this.products;
}
}
