import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition(':enter', [animate('0.6s ease-in')]),
    ]),
    trigger('slideIn', [
      state(
        'void',
        style({
          transform: 'translateY(30px)',
          opacity: 0,
        })
      ),
      transition(':enter', [animate('0.8s ease-out')]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';
}
