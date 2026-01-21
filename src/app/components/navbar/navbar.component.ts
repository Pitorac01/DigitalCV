import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrollTo(sectionId: string): void {
    // Chiudi prima l'offcanvas
    this.closeOffcanvas();

    // Aspetta che l'offcanvas si chiuda completamente prima di scrollare
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 300); // 300ms è il tempo di animazione di chiusura dell'offcanvas
  }

  closeOffcanvas(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const bsOffcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }

    // Rimuovi il focus dal bottone toggle per evitare lo scroll verso l'alto
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 100);
  }
}
