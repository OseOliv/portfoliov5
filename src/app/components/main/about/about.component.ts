import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-about',
  imports: [SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
}
