import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule], // ✅ Ajout de RouterModule pour routerLink
    template: `
    <div class="container product-container">
        <h1 class="title">🛒 Nos Produits</h1>

        <!-- Barre de recherche -->
        <input type="text" class="form-control search-bar" [(ngModel)]="searchTerm" placeholder="Rechercher un produit..." />

        <!-- Boutons de tri -->
        <div class="sort-buttons">
            <button class="btn btn-primary" (click)="sortByPrice('asc')">Prix croissant ⬆️</button>
            <button class="btn btn-primary" (click)="sortByPrice('desc')">Prix décroissant ⬇️</button>
        </div>

        <!-- Liste des produits -->
        <div class="row justify-content-center">
            <div class="col-md-4" *ngFor="let product of filteredProducts()">
                <div class="card product-card">
                    <img [src]="product.image" class="card-img-top product-image" alt="{{ product.name }}">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">Prix : <span class="price">{{ product.price }}€</span></p>
                    <a [routerLink]="'/product/' + product.id" class="btn btn-warning">Voir détails</a>
                </div>
                </div>
            </div>
        </div>
    </div>
`,
    styles: [`
    .product-container {
        max-width: 900px;
        margin: 50px auto;
        text-align: center;
    }

    .title {
        font-family: 'Bubbleboddy Neue', cursive;
        color: #Fdd90b;
        text-shadow: 2px 2px 4px #000;
    }

    .search-bar {
        width: 50%;
        margin: 15px auto;
        padding: 10px;
        border: 2px solid #000;
        border-radius: 5px;
        font-size: 1rem;
    }

    .sort-buttons {
        margin: 10px 0;
    }

    .sort-buttons .btn {
        margin: 5px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .product-card {
        background: #f9D0a3;
        border: 2px solid #000;
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
    }

    .product-card:hover {
        transform: scale(1.05);
    }

    .product-image {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .price {
        font-size: 1.2rem;
        color: #c00;
    }

    .btn-warning {
        font-weight: bold;
        background-color: #FFD700;
        border: none;
    }

    .btn-warning:hover {
        background-color: #FFC107;
    }
`]
})
export class ProductComponent implements OnInit {
    searchTerm: string = '';
    products: Product[] = [];
    sortDirection: 'asc' | 'desc' = 'asc';

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    // ✅ Fonction pour trier par prix
    sortByPrice(direction: 'asc' | 'desc') {
        this.sortDirection = direction;
        this.products.sort((a, b) => {
            return direction === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    // ✅ Fonction de recherche
    filteredProducts(): Product[] {
        return this.products.filter(product =>
            product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }
}
