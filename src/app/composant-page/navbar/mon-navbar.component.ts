import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mon-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mon-navbar.component.html',
  styleUrl: './mon-navbar.component.scss'
})
export class MonNavbarComponent {
  constructor(private router: Router) {
  }
  
  goToActualite() {
    this.router.navigate(['/', 'Actualites']);
  }

  goToMedias() {
    this.router.navigate(['/', 'Media']);
  }

  goToBoutique() {
    this.router.navigate(['/', 'Boutique']);
  }
}
