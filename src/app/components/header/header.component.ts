import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectComponent } from '../project/project.component';
import { FooterComponent } from '../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ExperienceComponent, ProjectComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  profileImage = 'profile.jpeg';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
}
