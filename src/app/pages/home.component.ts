import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="homepage-container">
      <!-- ✅ Bandeau de bienvenue -->
      <div class="banner">
        <h1 class="title">🏛️ Bienvenue dans la boutique d'Astérix et Obélix ! 🏛️</h1>
        <p class="subtitle">Retrouvez nos figurines artisanales et collectionnez vos héros préférés !</p>
        <a routerLink="/products" class="btn btn-warning">Découvrir notre collection</a>
      </div>

      <!-- ✅ Présentation de l'entreprise -->
      <div class="presentation">
        <h2>Qui sommes-nous ?</h2>
        <p>
          🏺 Depuis plus de 20 ans, notre entreprise conçoit et fabrique des figurines de qualité inspirées de l’univers d’Astérix et Obélix. 
          Chaque pièce est réalisée avec soin pour offrir aux collectionneurs et fans des modèles uniques !
        </p>
      </div>

      <!-- ✅ Section des figurines populaires -->
      <div class="popular-products">
        <h2>Nos figurines populaires ⚔️</h2>
        <div class="popular-list">
          <div class="popular-card" *ngFor="let product of popularProducts">
            <img [src]="product.image" alt="{{ product.name }}">
            <h3>{{ product.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .homepage-container {
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
    }

    /* ✅ Bandeau de bienvenue */
    .banner {
      background-color: #f9d0a3;
      padding: 80px 20px;
      border-radius: 15px;
      color: white;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    }

    .banner .title {
      font-family: 'Bubbleboddy Neue', cursive;
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    .banner .btn {
      margin-top: 15px;
      font-size: 1.2rem;
      padding: 10px 20px;
    }

    /* ✅ Présentation de l'entreprise */
    .presentation {
      margin: 40px 0;
      padding: 20px;
      background: #fff3cd;
      border-radius: 10px;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    }

    .presentation h2 {
      font-family: 'Bubbleboddy Neue', cursive;
      color: #da001e;
    }

    /* ✅ Section des figurines populaires */
    .popular-products {
      margin-top: 40px;
    }

    .popular-list {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .popular-card {
      background: #f9D0a3;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
      width: 150px;
      text-align: center;
    }

    .popular-card img {
      width: 100px;
      height: auto;
      margin-bottom: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {
  popularProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // ✅ On affiche seulement 3 produits populaires au hasard
    this.popularProducts = this.productService.getProducts().slice(0, 3);
  }
}
