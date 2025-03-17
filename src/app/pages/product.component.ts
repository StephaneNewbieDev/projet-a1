import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [FormsModule, CommonModule], // Import de FormsModule pour [(ngModel)]
    template: `
        <h1>Nos Produits</h1>
        <input [(ngModel)]="searchTerm" placeholder="Rechercher..." />
        <ul>
            <li *ngFor="let product of products">
            {{ product.name }} - {{ product.price }}€
            </li>
        </ul>
`,
    styles: [
    `input { margin-bottom: 10px; padding: 5px; width: 200px; }`
]
})
export class ProductComponent implements OnInit {
    searchTerm: string = '';
    products: Product[] = [];

constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
}

    filteredProducts() {
    return this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}
}
