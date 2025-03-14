import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container full-height text-center">
      <h1 class="title">🏛️ Bienvenue dans la boutique d'Astérix et Obélix ! 🏛️</h1>
      <p class="subtitle">Retrouvez les plus célèbres figurines inspirées des aventures gauloises.</p>

      <h2 class="mt-4">Nos figurines populaires :</h2>

      <div class="row justify-content-center">
        <div class="col-md-4" *ngFor="let product of products">
          <div class="card product-card">
            <img src="assets/asterix.png" class="card-img-top" alt="{{ product.name }}">
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

    .title {
      font-family: 'Comic Sans MS', cursive;
      color: #FFD700;
      text-shadow: 2px 2px 4px #000;
    }

    .subtitle {
      font-style: italic;
      color: #555;
    }

    .product-card {
      background: #f5f5dc;
      border: 2px solid #000;
      border-radius: 10px;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;
    }

    .product-card:hover {
      transform: scale(1.05);
    }

    .card-title {
      font-weight: bold;
      font-family: 'Comic Sans MS', cursive;
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
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
