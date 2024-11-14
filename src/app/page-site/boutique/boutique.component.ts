import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.class';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MonFiltreComponent } from "./filtre/mon-filtre.component";
import { ProduitComponent } from "./produit/produit.component";

@Component({
    selector: 'app-boutique',
    standalone: true,
    templateUrl: './boutique.component.html',
    styleUrl: './boutique.component.scss',
    imports: [HttpClientModule, CommonModule, MonFiltreComponent, ProduitComponent]
})
export class BoutiqueComponent implements OnInit {
  
  produit = new Produit(1,"test","test","testest",12,3,'assets\\img\\imageMatch'); // ajouter .jpg pour afficher l'image
  listProduit: Array<Produit> = [];
  produits$ = this.http.get<Produit[]>('/api/produit');

  constructor(private http:HttpClient){ }
  
  ngOnInit(): void {
    console.log();
  }
}
