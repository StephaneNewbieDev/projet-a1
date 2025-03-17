import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <div class="container contact-container">
        <h1 class="title">📬 Contactez Gaulois Figurines 🏺</h1>

        <p class="intro">
            Une question, une commande spéciale ou simplement envie de discuter avec nous ?  
            Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais ! 📩
        </p>

        <form (ngSubmit)="sendMessage()">
            <div class="form-group">
                <label for="name">Nom :</label>
                <input type="text" id="name" [(ngModel)]="contact.name" name="name" required class="form-control">
            </div>

            <div class="form-group">
                <label for="email">Email :</label>
                <input type="email" id="email" [(ngModel)]="contact.email" name="email" required class="form-control">
            </div>

            <div class="form-group">
                <label for="message">Message :</label>
                <textarea id="message" [(ngModel)]="contact.message" name="message" required class="form-control"></textarea>
            </div>

        <button type="submit" class="btn btn-warning">Envoyer</button>
        </form>

        <h2>Nos Coordonnées 📍</h2>
        <p>
            📍 **Adresse** : 39 Rue des Gaulois, Lutèce  
            📞 **Téléphone** : 01 23 45 67 89  
            📧 **Email** : contact&#64;gaulois-figurines.com
        </p>

        <a routerLink="/" class="btn btn-primary">Retour à l'accueil</a>
    </div>
`,
styles: [`
    .contact-container {
        max-width: 600px;
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

    .intro {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .form-group {
        text-align: left;
        margin-bottom: 15px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        border: 2px solid #000;
        border-radius: 5px;
        font-size: 1rem;
    }

    textarea.form-control {
        height: 100px;
        resize: none;
    }

    .btn-warning {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .btn-primary {
        margin-top: 20px;
    }
`]
})
export class ContactComponent {
    contact = { name: '', email: '', message: '' };

    sendMessage() {
        alert(`Merci ${this.contact.name} ! Nous avons bien reçu votre message.`);
        this.contact = { name: '', email: '', message: '' }; // Réinitialisation du formulaire
    }
}