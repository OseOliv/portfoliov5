import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileImage = 'assets/images/profile.jpeg';
  profileNameLogo = 'assets/logo/logo-nome-perfil.svg';
}
