import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container full-height text-center">
      <h1 class="title">🏛️ Bienvenue dans la boutique d'Astérix et Obélix ! 🏛️</h1>
      <p class="subtitle">Retrouvez les plus célèbres figurines inspirées des aventures gauloises.</p>

      <!-- Présentation de l'entreprise -->
      <div class="presentation">
        <p>
          Bienvenue dans notre boutique dédiée aux figurines d'Astérix et Obélix ! 
          Nous proposons des modèles uniques et collectors inspirés de vos personnages préférés.
          Découvrez notre sélection et ajoutez une touche gauloise à votre collection ! 🏺⚔️
        </p>
      </div>

      <!-- Barre de recherche -->
      <input type="text" class="form-control search-bar" [(ngModel)]="searchTerm" placeholder="Rechercher une figurine..." />
      <!-- Boutons de tri -->
      <div class="sort-buttons">
        <button class="btn btn-primary" (click)="sortByPrice('asc')">Prix croissant ⬆️</button>
        <button class="btn btn-primary" (click)="sortByPrice('desc')">Prix décroissant ⬇️</button>
      </div>

      <h2 class="mt-4">Nos figurines populaires :</h2>

      <div class="row justify-content-center">
        <div class="col-md-3" *ngFor="let product of filteredProducts()">
          <div class="card product-card">
            <img [src]="product.image" class="img-small" alt="{{ product.name }}">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Prix : <span class="price">{{ product.price }}€</span></p>
              <button class="btn btn-warning">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .full-height {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .presentation {
      font-size: 1.2rem;
      font-family: 'Comfortaa', sans-serif;
      background: #fdd90b;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
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

    .img-small {
      width: 250px;
      height: auto;
      display: block;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .title {
      font-family: 'Bubbleboddy Neue', cursive;
      font-size: 2rem;
      color: #Fdd90b;
      text-shadow: 2px 2px 4px #000;
    }

    .subtitle {
      font-style: italic;
      color: #555;
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

    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .card-title, .card-text {
      margin-bottom: 10px;
      font-size: 1.2rem;
    }

    .btn-warning {
      margin-top: 10px;
    }

    .btn-warning:hover {
      background-color: #da001e;
    }
  `]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = ''; // ✅ Variable pour la recherche
  sortDirection: 'asc' | 'desc' = 'asc'; // ✅ Variable pour trier

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // ✅ Fonction de tri par prix
  sortByPrice(direction: 'asc' | 'desc') {
    this.sortDirection = direction;
    this.products.sort((a, b) => {
      return direction === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

  // ✅ Fonction de filtrage par recherche
  filteredProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
