import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer>
        <p>Suivez-nous :</p>
        <a href="#">Facebook</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">Twitter</a>
    </footer>
`,
    styles: [`
        footer { background: #222; color: white; text-align: center; padding: 10px; }
        a { color: #f8b400; text-decoration: none; margin: 0 5px; }
`]
})
export class FooterComponent {}
