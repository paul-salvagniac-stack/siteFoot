import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './actualites.component.html',
  styleUrl: './actualites.component.scss'
})
export class ActualitesComponent implements OnInit {

  article$ = this.http.get<any>('http://localhost:3000/article');

  constructor(private http:HttpClient){ }

  ngOnInit(): void {
  }
}
