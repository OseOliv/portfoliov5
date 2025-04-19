import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ExperienceComponent, ProjectComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profileImage = 'profile.jpeg';
}
