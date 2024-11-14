import { Component, Input, OnInit, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MonFooterComponent } from "./composant-page/footer/mon-footer.component";
import { MonNavbarComponent } from "./composant-page/navbar/mon-navbar.component";  

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MonNavbarComponent, MonFooterComponent]
})
export class AppComponent implements OnInit{
 
  title = 'siteFoot';
  @Input() page: String ='';

  ngOnInit(): void {
    this.page = 'Actualite';
  }
}

