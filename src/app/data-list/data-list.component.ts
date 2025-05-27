import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-list',
  imports: [],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss'
})
export class DataListComponent {
  items: any[] | undefined;

  constructor(private readonly http: HttpClient) {
    this.http.get<any[]>('https://api.example.com/items')
      .subscribe(data => this.items = data);
  }
}
