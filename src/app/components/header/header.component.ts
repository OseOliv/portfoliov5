import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialComponent } from "./social/social.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, SocialComponent, ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {

}
