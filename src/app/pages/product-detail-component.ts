import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="container text-center">
        <h1 class="title">{{ product?.name }}</h1>
        <img [src]="product?.image" class="product-image" alt="{{ product?.name }}">
        <p class="price">Prix : <span>{{ product?.price }}€</span></p>
        <p class="description">{{ product?.description }}</p>
        <button class="btn btn-warning">Ajouter au panier</button>
        <br>
        <a routerLink="/" class="btn btn-primary mt-3">Retour à la boutique</a>
    </div>
`,
    styles: [`
    .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background: #fff3cd;
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    }
    
    .title {
        font-family: 'Bubbleboddy Neue', cursive;
        color: #Fdd90b;
        text-shadow: 2px 2px 4px #000;
    }

    .product-image {
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        margin: 15px 0;
    }

    .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #c00;
    } 

    .description {
        font-size: 1.2rem;
        color: #333;
    }

    .btn-warning {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .btn-primary {
        margin-top: 15px;
    }
`]
})
export class ProductDetailComponent implements OnInit {
    product: Product | undefined;

constructor(
    private route: ActivatedRoute,
    private productService: ProductService
) {}

ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
}
}
