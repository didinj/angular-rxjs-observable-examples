import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, interval } from 'rxjs';

// const fruits$ = of('Apple', 'Banana', 'Mango');

// fruits$.subscribe({
//   next: fruit => console.log(fruit),
//   complete: () => console.log('All fruits delivered!')
// });

const counter$ = interval(1000);

const subscription = counter$.subscribe(value => {
  console.log(`Timer: ${value}`);
});

// Optionally unsubscribe after 5 seconds
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed');
}, 5000);


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-observable-rxjs';
}
