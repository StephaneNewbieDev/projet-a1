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
      image: 'assets/asterix.png',
      description: 'Astérix est le plus courageux des Gaulois ! Il utilise sa ruse et sa force pour déjouer les plans des Romains.'
    },
    {
      id: 2,
      name: 'Obélix',
      price: 24.99,
      image: 'assets/obelix.png',
      description: 'Obélix, le meilleur ami d’Astérix, est tombé dans la potion magique étant petit, ce qui le rend super fort en permanence.'
    },
    {
      id: 3,
      name: 'Idéfix',
      price: 19.99,
      image: 'assets/idefix.png',
      description: 'Idéfix est le fidèle compagnon d’Obélix. Il adore les arbres et suit nos héros partout dans leurs aventures.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
