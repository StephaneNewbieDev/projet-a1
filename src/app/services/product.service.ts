import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Astérix',
            price: 29.99,
          image: 'assets/asterix.png'  // ✅ Image pour Astérix
        },
        {
            id: 2,
            name: 'Obélix',
            price: 24.99,
          image: 'assets/obelix.png'  // ✅ Image pour Obélix
        },
        {
            id: 3,
            name: 'Idéfix',
            price: 19.99,
          image: 'assets/idefix.png'  // ✅ Image pour Idéfix
        }
    ];
    
    getProducts(): Product[] {
        return this.products;
    }
}