import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private readonly http = inject(HttpClient);
  posts: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError(error => {
          console.error('Error fetching posts', error);
          return of([]);
        })
      )
      .subscribe(data => this.posts = data);
  }
}
