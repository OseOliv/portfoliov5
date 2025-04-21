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
    'Ruby on Rails',
    'React.js',
    'React',
    'Angular',
    'Nest.js',
    'Tailwind CSS',
    'SQLite',
    'Firebase',
    'PostgreSQL',
  ];
}
