import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Ruby',
    'Python',
    'TypeScript',
    'Node.js',
    'React.js',
    'React',
    'Angular',
    'Nest.js',
    'Ruby on Rails',
    'SQL',
    'Firebase',
  ];
}
