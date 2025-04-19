import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-main',
  imports: [AboutComponent, ExperienceComponent, ProjectComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
