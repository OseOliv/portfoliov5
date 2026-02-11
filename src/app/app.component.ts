import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { fadeIn, slideInRight } from './core/animations/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeIn, slideInRight],
})
export class AppComponent {
  title = 'portfolio';
}
