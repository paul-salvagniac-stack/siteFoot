import { Component } from '@angular/core';
import { Produit } from '../produit.class';
import { DataViewModule } from 'primeng/dataview';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [DataViewModule,NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.scss'
})
export class ProduitComponent {

  produit = new Produit(1,"test","test","testest",12,3,'assets\\img\\imageMatch.jpg');
  produit2 = new Produit(1,"test","test","testest",12,3,'assets\\img\\imageMatch.jpg');

  list: Produit[] = [this.produit,this.produit2];
}
