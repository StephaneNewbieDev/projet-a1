import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    template: `
        <header>
            <nav>
                <!-- ✅ Logo cliquable renvoyant vers l'accueil -->
                <a routerLink="/" class="logo-container">
                    <img src="/assets/logo.jpg" alt="Logo Gaulois" class="logo">
                </a>

                <div class="menu">
                    <a routerLink="/">🏠 Accueil</a>
                    <a routerLink="/products">🛒 Produits</a>
                    <a routerLink="/about">📜 À propos</a>
                    <a routerLink="/contact">📞 Contact</a>
                </div>
            </nav>
        </header>
    `,
    styles: [`
    header {
        background: linear-gradient(90deg, #ffd700, #ff4500);
        padding: 15px;
        border-bottom: 5px solid #000;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* ✅ Style du logo */
    .logo-container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 60px; /* ✅ Taille du logo */
        height: auto;
        margin-right: 15px;
        transition: transform 0.3s ease-in-out;
    }

    .logo:hover {
        transform: scale(1.1);
    }

    /* ✅ Style du menu */
    .menu {
        display: flex;
        gap: 15px;
    }

    .menu a {
        font-family: 'Comic Sans MS', cursive;
        font-size: 1.2rem;
        color: black;
        text-decoration: none;
        padding: 8px 15px;
        border-radius: 8px;
        background: #fdd90b;
        transition: all 0.3s ease-in-out;
    }

    .menu a:hover {
        background: #f9d0a3;
        transform: scale(1.1) rotate(-3deg);
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    }

    .menu a:active {
        transform: scale(1.05);
    }
`]
})
export class HeaderComponent { }
