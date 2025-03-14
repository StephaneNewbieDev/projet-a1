import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    template: `
    <header>
        <nav>
            <a routerLink="/">🏠 Accueil</a>
            <a routerLink="/products">🛒 Produits</a>
            <a routerLink="/about">📜 À propos</a>
        </nav>
    </header>
`,
    styles: [
        `
    header {
        background: linear-gradient(90deg, #ffd700, #ff4500);
        padding: 15px;
        text-align: right; /* ✅ Aligne le menu à droite */
        border-bottom: 5px solid #000;
}

    nav a {
        font-family: 'Comic Sans MS', cursive;
        font-size: 1.2rem;
        color: black;
        margin: 0 15px;
        text-decoration: none;
        padding: 8px 15px;
        border-radius: 8px;
        background:rgb(109, 233, 27);
        transition: all 0.3s ease-in-out;
        display: inline-block;
    }

    nav a:hover {
        background: #ff4500;
        transform: scale(1.1) rotate(-3deg);
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    }

    nav a:active {
        transform: scale(1.05);
    }
    `,
    ],
})
export class HeaderComponent { }
