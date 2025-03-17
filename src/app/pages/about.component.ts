import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="container about-container">
        <h1 class="title">🏛️ À Propos de Gaulois Figurines 🏺</h1>

        <img src="assets/fabrication-figurines.jpg" alt="Atelier de fabrication" class="about-image">

        <p class="intro">
            Bienvenue chez <strong>Gaulois Figurines</strong>, la référence en fabrication de figurines inspirées de l’univers d’Astérix et Obélix !  
            Depuis plus de 20 ans, nous donnons vie aux héros gaulois avec un savoir-faire artisanal unique. ⚒️
        </p>

        <h2>Notre Histoire 📜</h2>
        <p>
            Fondée en 2002, notre entreprise a débuté avec une passion pour l’art et la bande dessinée.  
            Nos artisans créent chaque figurine avec soin, en utilisant des matériaux de qualité pour garantir 
            des détails précis et une finition impeccable.
        </p>

        <h2>Notre Processus de Fabrication 🏗️</h2>
        <ul>
          <li>🎨 **Design & Sculpture** : Chaque figurine est d’abord dessinée et sculptée par nos artistes.</li>
          <li>🛠️ **Moulage & Peinture** : Les figurines sont moulées en résine et peintes à la main avec des couleurs fidèles à l’univers d’Astérix.</li>
          <li>📦 **Emballage & Expédition** : Chaque pièce est soigneusement emballée et expédiée dans le monde entier.</li>
        </ul>

        <h2>Pourquoi choisir nos figurines ? ⭐</h2>
        <ul>
            <li>✔️ Fabrication 100% artisanale</li>
            <li>✔️ Détails fidèles aux personnages d’Astérix</li>
            <li>✔️ Matériaux de haute qualité</li>
            <li>✔️ Éditions limitées pour les collectionneurs</li>
        </ul>

        <h2>Contactez-nous 📬</h2>
        <p>
           📍 **Adresse** : 39 Rue des Gaulois, Lutèce  
           📞 **Téléphone** : 01 23 45 67 89  
           📧 **Email** : contact&#64;gaulois-figurines.com
        </p>

        <button routerLink="/" class="custom-btn">🏠 Retour à l'accueil</button>

        </div>
    `,
    styles: [`
        .about-container {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background: #fff3cd;
        border-radius: 10px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .title {
        font-family: 'Bubbleboddy Neue', cursive;
        color: #Fdd90b;
        text-shadow: 2px 2px 4px #000;
    }

    .about-image {
        width: 100%;
        max-width: 400px;
        border-radius: 10px;
        margin: 20px 0;
    }

    .intro {
        font-size: 1.2rem;
        font-weight: bold;
    }

    ul {
        text-align: left;
        list-style-type: none;
        padding: 0;
    }

    ul li {
        background: #f9d0a3;
        margin: 5px 0;
        padding: 10px;
        border-radius: 5px;
    }

    .btn-primary {
        margin-top: 20px;
    }

.custom-btn {
    background:rgb(214, 101, 26);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;

    cursor: pointer;
        transition: all 0.3s ease-in-out;
}

.custom-btn:hover {
    background: #fdd90b;
    transform: scale(1.05);
    border-radius: 50px;
    color: black;
}

`]
})
export class AboutComponent {}
